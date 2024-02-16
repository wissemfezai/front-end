import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@app/_services';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {

  getForm: FormGroup;
  getForm1: FormGroup;
  getForm2: FormGroup;
  getForm3: FormGroup;
  getForm4: FormGroup;
  rate : any ;
  name : string = '' ;
  web_login : string = '' ;
  base_currency : string = '' ;
  balance : string = '' ;
  i_customer : string = '' ;
  description : string = '' ;
  loading = false;
  submitted = false;
  error = '';
  closeResult = '';
  i = 2;
  test = {
    name : '' ,
    base_currency : ''
  };
  
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private AccountService: AccountService,
    private modalService: NgbModal
) {


   }
   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }



  ngOnInit(): void {
    console.log("ffff");
    this.AccountService.getaccountlistAccounts()
    .subscribe({ next: (data) => {this.test = data[0]}});

  }

  


  fclick(content) {
    this.submitted = false;
    
   /* if (this.createForm.invalid) {
        return ;

    }*/

    this.loading = true;
    console.log("fff");

                      
    this.AccountService.getaccountlistAccounts()
        .subscribe({
            next: (data) => {
             //console.log(data);
              console.log(this.name);
              this.i_customer =   data[0].i_customer;
              this.name =   data[0].name;
              this.web_login =   data[0].web_login;
              this.base_currency =   data[0].base_currency;
              this.balance =   data[0].balance;
              this.description =   data[0].description;
             
              this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
              this.i_customer = '';
              this.name = '';
              this.web_login = '';
              this.base_currency = '';
              this.balance = '';
              this.description = '';
              

              });

               // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                //this.router.navigate([returnUrl]);
            },
            error: error => {
                this.error = error;
                this.loading = false;
                
            }
        });

        
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
           // console.log(data);
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
                   // console.log(dataAccount);
                    
  this.AccountService.block(this.i)
      .subscribe({
          next: (data) => {
            //console.log(data);
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
                   // console.log(dataAccount);
                    
  this.AccountService.delete(this.i)
      .subscribe({
          next: (data) => {
           // console.log(data);
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
