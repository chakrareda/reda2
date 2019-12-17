import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AuthentificationService } from 'src/app/shared_service/authentification/authentification.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  private user: any
  LoginUser = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
 user1 : any
  invalidLogin = false
  name: any;
  constructor(private authentificationService : AuthentificationService ,  public router: Router) {
 
  }

  ngOnInit() {
    $('body').addClass('empty-layout bg-silver-300');
    document.body.style.background = '#FFFF';
  /*  if(this.authentificationService.isUserLogged()) {
      this.router.navigate(['index']);
    }*/
    this.authentificationService.logOut();
    this.router.navigate(['login']);
    this.getAllComptes();
  }

  checkLogin(users) {
    this.user = this.LoginUser.getRawValue();
    this.name = this.user.username;
  
    if (this.authentificationService.authenticate(this.user.username, this.user.password,users)
    ) {
      this.router.navigate([''])
     

      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  private newMethod(): string {
    return null;
  }

  public getAllComptes(){
    this.authentificationService.getUsers().subscribe(
      (res)=>{
        console.log(res);
        this.user1=res;
    },
    (error)=>{
       console.log(error);
    })
  }
  ngAfterViewInit() {
    $('#login-form').validate({
        errorClass: "help-block",
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
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
 /* public login() {
    this.user = this.LoginUser.getRawValue();
    this.authentificationService.login(this.user);
  }
*/

  ngOnDestroy() {
    $('body').removeClass('empty-layout bg-silver-300');
  }

}
