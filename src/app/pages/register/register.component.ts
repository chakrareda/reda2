import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AuthentificationService } from 'src/app/shared_service/authentification/authentification.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit, OnDestroy {

  private userRegiter:any

  public temoin = false;
  public temoinRegister = false;
  constructor(private authentificationService : AuthentificationService ,  public router: Router) {

  }
  AddUser = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  ngOnInit() {
    $('body').addClass('empty-layout bg-silver-300');
  }
 enregistrer() {
    this.userRegiter = this.AddUser.getRawValue();
    this.authentificationService.createUser(this.userRegiter).subscribe((user)=>{
      console.log(user);
     },(error)=>{
       console.log(error);
     });
  }
  
  ngAfterViewInit() {
    $('#register-form').validate({
        errorClass: "help-block",
        rules: {
            first_name: {
                required: true,
                minlength: 2
            },
            last_name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            'password': {
                required: true,
                confirmed: true
            },
            password_confirmation: {
                equalTo: 'password'
            }
        },
        highlight: function(e) {
            $(e).closest(".form-group").addClass("has-error")
        },
        unhighlight: function(e) {
            $(e).closest(".form-group").removeClass("has-error")
        },
    });
  }

  ngOnDestroy() {
    $('body').removeClass('empty-layout bg-silver-300');
  }

}
