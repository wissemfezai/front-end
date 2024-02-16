import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@app/_services'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private AccountService: AccountService,
) {


   }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      username: ['', Validators.required],
      web_password: ['', Validators.required],
      authname: ['', Validators.required],
      voip_password: ['', Validators.required],
      i_tariff: ['', Validators.required],
      i_time_zone: ['', Validators.required],
      i_lang: ['', Validators.required],
      balance: ['', Validators.required],
      credit_limit: ['', Validators.required],
      blocked: ['', Validators.required],
      max_sessions: ['', Validators.required],
      max_credit_time: ['', Validators.required],
      translation_rule: ['', Validators.required],
      cli_translation_rule: ['', Validators.required],
      cpe_number: ['', Validators.required],
      i_export_type: ['', Validators.required],
      reg_allowed: ['', Validators.required],
      trust_cli: ['', Validators.required],
      disallow_loops: ['', Validators.required],
      vm_enabled: ['', Validators.required],
      vm_password: ['', Validators.required],
      vm_notify_emails: ['', Validators.required],
      vm_forward_emails: ['', Validators.required],
      vm_del_after_fwd: ['', Validators.required],
      company_name: ['', Validators.required],
      salutation: ['', Validators.required],
      first_name: ['', Validators.required],
      mid_init: ['', Validators.required],
      last_name: ['', Validators.required],
      street_addr: ['', Validators.required],
      state: ['', Validators.required],
      postal_code: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      contact: ['', Validators.required],
      phone: ['', Validators.required],
      fax: ['', Validators.required],
      alt_phone: ['', Validators.required],
      alt_contact: ['', Validators.required],
      email: ['', Validators.required],
      cc: ['', Validators.required],
      bcc: ['', Validators.required],
      payment_currency: ['', Validators.required],
      payment_method: ['', Validators.required],
      on_payment_action: ['', Validators.required],
      min_payment_amount: ['', Validators.required],
      lifetime: ['', Validators.required],
      preferred_codec: ['', Validators.required],
      use_preferred_codec_only: ['', Validators.required],
      welcome_call_ivr: ['', Validators.required],
      i_billing_plan: ['', Validators.required],
      i_media_relay_type: ['', Validators.required],
      i_password_policy: ['', Validators.required],
      i_routing_group: ['', Validators.required],
      i_account_class: ['', Validators.required],
      vm_timeout: ['', Validators.required],
      vm_check_number: ['', Validators.required],
      i_commission_agent: ['', Validators.required],
      commission_size: ['', Validators.required],
      lan_access: ['', Validators.required],
      batchTag: ['', Validators.required],
      i_provisioning: ['', Validators.required],
      invoicing_enabled: ['', Validators.required],
      i_invoice_template: ['', Validators.required],
      i_caller_name_type: ['', Validators.required],
      caller_name: ['', Validators.required],
      followme_enabled: ['', Validators.required],
      vm_dialin_access: ['', Validators.required],
      hide_own_cli: ['', Validators.required],
      block_incoming_anonymous: ['', Validators.required],
      dnd_enabled: ['', Validators.required],
      description: ['', Validators.required],
      p_assrt_id_translation_rule: ['', Validators.required],
      pass_p_asserted_id: ['', Validators.required],
      dncl_lookup: ['', Validators.required],
      generate_ringbacktone: ['', Validators.required],
      max_calls_per_second: ['', Validators.required],
      allow_free_onnet_calls: ['', Validators.required],
      start_page: ['', Validators.required],
      trust_privacy_hdrs: ['', Validators.required]
  });

  }

  get f() { return this.createForm.controls; }

  onSubmit() {
      this.submitted = true;
      
     /* if (this.createForm.invalid) {
          return ;

      }*/

      this.loading = true;
      let dataAccount = {  
        username : this.f.username.value ,
        web_password: this.f.web_password.value ,
        authname : this.f.authname.value ,
        voip_password : this.f.voip_password.value ,
        i_tariff : this.f.i_tariff.value ,
        i_time_zone : this.f.i_time_zone.value ,
        i_lang : this.f.i_lang.value ,
        balance : this.f.balance.value ,
        credit_limit : this.f.credit_limit.value ,
        blocked : this.f.blocked.value ,
        max_sessions : this.f.max_sessions.value ,
        max_credit_time : this.f.max_credit_time.value ,
        translation_rule : this.f.translation_rule.value ,
        cli_translation_rule : this.f.cli_translation_rule.value ,
        cpe_number : this.f.cpe_number.value ,
        i_export_type : this.f.i_export_type.value ,
        reg_allowed : this.f.reg_allowed.value ,
        trust_cli : this.f.trust_cli.value ,
        disallow_loops : this.f.disallow_loops.value ,
        vm_enabled : this.f.vm_enabled.value ,
        vm_password : this.f.vm_password.value ,
        vm_notify_emails : this.f.vm_notify_emails.value ,
        vm_forward_emails : this.f.vm_forward_emails.value ,
        vm_del_after_fwd : this.f.vm_del_after_fwd.value ,
        company_name : this.f.company_name.value ,
        salutation : this.f.salutation.value ,
        first_name : this.f.first_name.value ,
        mid_init : this.f.mid_init.value ,
        last_name : this.f.last_name.value ,
        street_addr : this.f.street_addr.value ,
        state : this.f.state.value ,
        postal_code : this.f.postal_code.value ,
        city : this.f.city.value ,
        country : this.f.country.value ,
        contact : this.f.contact.value ,
        phone : this.f.phone.value ,
        fax : this.f.fax.value ,
        alt_phone : this.f.alt_phone.value ,
        alt_contact : this.f.alt_contact.value ,
        email : this.f.email.value ,
        cc : this.f.cc.value ,
        bcc : this.f.bcc.value ,
        payment_currency : this.f.payment_currency.value ,
        payment_method : this.f.payment_method.value ,
        on_payment_action : this.f.on_payment_action.value ,
        min_payment_amount : this.f.min_payment_amount.value ,
        lifetime : this.f.lifetime.value ,
        preferred_codec : this.f.preferred_codec.value ,
        use_preferred_codec_only : this.f.use_preferred_codec_only.value ,
        welcome_call_ivr : this.f.welcome_call_ivr.value ,
        i_billing_plan : this.f.i_billing_plan.value ,
        i_media_relay_type : this.f.i_media_relay_type.value ,
        i_password_policy : this.f.i_password_policy.value ,
        i_routing_group : this.f.i_routing_group.value ,
        i_account_class : this.f.i_account_class.value ,
        vm_timeout : this.f.vm_timeout.value ,
        vm_check_number : this.f.vm_check_number.value ,
        i_commission_agent : this.f.i_commission_agent.value ,
        commission_size : this.f.commission_size.value ,
        lan_access : this.f.lan_access.value ,
        batchTag : this.f.batchTag.value ,
        i_provisioning : this.f.i_provisioning.value ,
        invoicing_enabled : this.f.invoicing_enabled.value ,
        i_invoice_template : this.f.i_invoice_template.value ,
        i_caller_name_type : this.f.i_caller_name_type.value ,
        caller_name : this.f.caller_name.value ,
        followme_enabled : this.f.followme_enabled.value ,
        vm_dialin_access : this.f.vm_dialin_access.value ,
        hide_own_cli : this.f.hide_own_cli.value ,
        block_incoming_anonymous : this.f.block_incoming_anonymous.value ,
        dnd_enabled : this.f.dnd_enabled.value ,
        description : this.f.description.value ,
        p_assrt_id_translation_rule : this.f.p_assrt_id_translation_rule.value ,
        pass_p_asserted_id : this.f.pass_p_asserted_id.value ,
        dncl_lookup : this.f.dncl_lookup.value ,
        generate_ringbacktone : this.f.generate_ringbacktone.value ,
        max_calls_per_second : this.f.max_calls_per_second.value ,
        allow_free_onnet_calls : this.f.allow_free_onnet_calls.value ,
        start_page : this.f.start_page.value ,
        trust_privacy_hdrs : this.f.trust_privacy_hdrs.value 

        
 
      
                        }
                        console.log(dataAccount);
                        
      this.AccountService.createacccount(dataAccount)
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
