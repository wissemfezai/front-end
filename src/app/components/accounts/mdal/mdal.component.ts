import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@app/_services';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mdal',
  templateUrl: './mdal.component.html',
  styleUrls: ['./mdal.component.scss']
})
export class MdalComponent implements OnInit {
  closeResult = '';
  loading = false;
  submitted = false;
  error = '';
  i = 2 ;

  constructor(private modalService: NgbModal , private AccountService: AccountService,) { }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }
  onClickunBlock() {
    this.submitted = true;
    
   /* if (this.createForm.invalid) {
        return ;
  
    }*/
  
    this.loading = true;
    let dataAccount = {  
      
  
    
                      }
                      console.log(dataAccount);
                      
    this.AccountService.unBlock(this.i)
        .subscribe({
            next: (data) => {
              console.log(data);
               // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                //this.router.navigate([returnUrl]);
            },
            error: error => {
                this.error = error;
                this.loading = false;
            }
        });
  
  
  }

  onClickBlock() {
    this.submitted = true;
    
   /* if (this.createForm.invalid) {
        return ;
  
    }*/
  
    this.loading = true;
    let dataAccount = {  
      
  
    
                      }
                      console.log(dataAccount);
                      
    this.AccountService.block(this.i)
        .subscribe({
            next: (data) => {
              console.log(data);
               // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                //this.router.navigate([returnUrl]);
            },
            error: error => {
                this.error = error;
                this.loading = false;
            }
        });
  
  
  }

  onClickDelete() {
    this.submitted = true;
    
   /* if (this.createForm.invalid) {
        return ;
  
    }*/
  
    this.loading = true;
    let dataAccount = {  
      
  
    
                      }
                      console.log(dataAccount);
                      
    this.AccountService.delete(this.i)
        .subscribe({
            next: (data) => {
              console.log(data);
               // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                //this.router.navigate([returnUrl]);
            },
            error: error => {
                this.error = error;
                this.loading = false;
            }
        });
  
  
  }

}
