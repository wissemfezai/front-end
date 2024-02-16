import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { CreateComponent } from './create/create.component';
import { GetComponent } from './get/get.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdalComponent } from './mdal/mdal.component';


@NgModule({
  declarations: [CreateComponent, GetComponent, MdalComponent],
  exports: [],
  
  imports: [
    NgbModule,
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class AccountModule { }
