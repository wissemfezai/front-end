import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { CoreConfigService } from '@core/services/config.service';

import { Employee } from '../employee.model';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { EmployeeService } from '../employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Civility } from 'app/components/account-clients/client/contact/contact.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  // Public
  public sidebarToggleRef: boolean = false;
  public rows: Employee[];
  public selectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public searchValue: string = "";
  public view: string = "not-archive";

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private _unsubscribeAll: Subject<any>;
  private _subscription: Subscription[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _coreConfigService: CoreConfigService,
    private _toster: ToastrService,
    private _modalService: NgbModal,
  ) {
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe config change
    this._subscription.push(this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => { this._getEmployee() }, 450);
      } else { this._getEmployee() }
    }))
  }

  /**
 *  On destroy
 */
  ngOnDestroy(): void {
    this._subscription.forEach(subscription => subscription.unsubscribe());
  }

  // -----------------------------------------------------------------------------------------------------
  // Public Methods
  // -----------------------------------------------------------------------------------------------------



  public deleteEmployee(id: number) {
    Swal.fire({
      title: 'Es-tu sûr?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7367F0',
      cancelButtonColor: '#E42728',
      confirmButtonText: 'Oui, supprimez-le!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then((result) => {
      if (result.value) {
        this._subscription.push(
          this._employeeService.archiveEmployee(id).subscribe(
            (response) => { },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: 'Supprimé!',
                text: err.error.message,
                customClass: {
                  confirmButton: 'btn btn-primary'
                }
              })
            },
            () => {
              Swal.fire({
                icon: 'success',
                title: 'Supprimé!',
                text: 'Le employee a été bien supprimée',
                customClass: {
                  confirmButton: 'btn btn-success'
                }
              })
              this._getEmployee();
            }
          )
        )
      }
    })
  }

  public recoveryEmployee(id: number) {
    Swal.fire({
      title: 'Es-tu sûr?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7367F0',
      cancelButtonColor: '#E42728',
      confirmButtonText: 'Oui, eécupérer-le!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then((result) => {
      if (result.value) {
        this._subscription.push(
          this._employeeService.recoveryEmployee(id).subscribe(
            (response) => { },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: 'Récupération!',
                text: err.error.message,
                customClass: {
                  confirmButton: 'btn btn-primary'
                }
              })
            },
            () => {
              Swal.fire({
                icon: 'success',
                title: 'Supprimé!',
                text: 'employee a été bien récupéré',
                customClass: {
                  confirmButton: 'btn btn-success'
                }
              })
              this._getEmployee();
            }
          )
        )
      }
    })
  }

  public openEmployeeDialog(employee: Employee) {
    const modalRef = this._modalService.open(EmployeeDialogComponent,
      {
        scrollable: true,
        centered: true,
        size: 'lg',
        backdrop: 'static',
      });

    modalRef.componentInstance.employee = employee;
    modalRef.result.then(
      (employeeData) => {
        if (employeeData) {
          (employeeData.id) ? this._updateEmployee(employeeData) : this._addEmployee(employeeData);
        }
      }, (reason) => {
        console.log(reason);
      });
  }

  public onChangeView(view: string) {
    this.view = view;
    this._getEmployee();
  }

  public getCivility(civility: Civility) {
    if (civility == Civility.SIR.valueOf()) {
      return 'Monsieur'
    } else if (civility == Civility.MISS.valueOf()) {
      return 'Mademoiselle'
    } else if (civility == Civility.MRS.valueOf()) {
      return 'Madame'
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // Private Methods
  // -----------------------------------------------------------------------------------------------------

  private _getEmployee() {
    if (this.view == "not-archive") {
      this._subscription.push(this._employeeService.getEmployeeNotArchive().subscribe(response => {
        this.rows = response;
      }));
    } else if (this.view == "archive") {
      this._subscription.push(this._employeeService.getEmployeeArchive().subscribe(response => {
        this.rows = response;
      }));
    } else {
      this._subscription.push(this._employeeService.getEmployee().subscribe(response => {
        this.rows = response;
      }));
    }
  }

  private _addEmployee(employee: Employee) {
    this._subscription.push(this._employeeService.addEmployee(employee).subscribe(
      response => { },
      err => { this._toster.error(err.error.title, 'Ajout erreur: ' + err.status) },
      () => {
        this._toster.success(
          'Le employee est enregistré avec succès',
          'Ajout',
        );
        this._getEmployee()
      }
    )
    )
  }

  private _updateEmployee(employee: Employee) {
    this._subscription.push(this._employeeService.updateEmployee(employee).subscribe(
      response => { },
      err => { this._toster.error(err.error.title, 'Modification erreur: ' + err.status) },
      () => {
        this._toster.success(
          'Le employee est modifié avec succès',
          'Modification',
        );
        this._getEmployee()
      }
    )
    )
  }
}
