import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeDialogComponent implements OnInit {

  @Input() public employee: Employee;

  // Public
  public form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.form = this.fb.group({
      id: null,
      civility: null,
      firstName: null,
      lastName: null,
      email: [null, [Validators.email]],
      phone: null,
      createdBy: null,
      createdDat: null,
      lastModifiedBy: null,
      lastModifiedDate: null,
      isArchived: null,
      archivedDate: null,
      version: null,
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    if (this.employee) {
      this.form.setValue(this.employee);
    } else {
      this.employee = new Employee();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reset Form With Default Values
   */
  public resetFormWithDefaultValues() {
    this.form.reset();
  }

  public close(employee: Employee): void {
    this.activeModal.close(employee);
  }

  public get f() {
    return this.form.controls;
  }

}
