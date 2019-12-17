import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Compte } from 'src/app/class/compte/compte';
import { FormGroup, FormControl } from '@angular/forms';
import { ScriptLoaderService } from 'src/app/_services/script-loader.service';
import { CompteService } from 'src/app/shared_service/compte/compte.service';
declare var $:any;

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
})
export class CompteComponent implements OnInit , AfterViewInit {
  private comptes:Compte[] = [];

 AddCompte = new FormGroup({
  id: new FormControl(),
  name: new FormControl(),
  mail: new FormControl(),
  smtpServer: new FormControl(),
  smtpPort: new FormControl(),
  imapServer: new FormControl(),
  mtp: new FormControl()

});
Editcompte = new FormGroup({
  id: new FormControl(),
  name: new FormControl(),
  mail: new FormControl(),
  smtpServer: new FormControl(),
  smtpPort: new FormControl(),
  imapServer: new FormControl(),
  mtp: new FormControl()
});
  compte: any;
  id_User: string;
 constructor(private _script: ScriptLoaderService,private compteService:CompteService) { }
  ngOnInit() {
    this.getAllComptes();
    this.id_User = localStorage.getItem('id_User');

  }
 
  public getAllComptes(){
    this.compteService.getComptes().subscribe(
      (res)=>{
        console.log(res);
        this.comptes=res;
    },
    (error)=>{
       console.log(error);
    })
  }

  public getCompte(id){
    this.compteService.getCompte(id).subscribe(
      (res)=>{
        console.log(res);
        this.compte=res;
    },
    (error)=>{
       console.log(error);
    })
  }
processForm(n){
 
  
  if(n==-1){
    this.compte = this.AddCompte.getRawValue();
    this.compte.user_id = localStorage.getItem('id_User');
    console.log( this.compte);
     this.compteService.createCompte(this.compte).subscribe((compte)=>{
       console.log(compte);
       this.getAllComptes();
     },(error)=>{
       console.log(error);
     });
  }else{
    this.compte = this.Editcompte.getRawValue();
    this.compte.user_id = localStorage.getItem('id_User');
    this.compte.id=n;
     this.compteService.updateCompte(this.compte).subscribe((compte)=>{
       console.log(compte);
     },(error)=>{
       console.log(error);
     });
  }
  
}

deleteCompte(compte){
  console.log(compte);
  this.compteService.deleteCompte(compte.id).subscribe((data)=>{
      this.comptes.splice(this.comptes.indexOf(compte),1);
  },(error)=>{
    console.log(error);
  });
}

  
  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/form-plugins.js');

    $("#form-sample-1").validate({
        rules: {
            name: {
                minlength: 2,
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            url: {
                required: !0,
                url: !0
            },
            number: {
                required: !0,
                number: !0
            },
            min: {
                required: !0,
                minlength: 3
            },
            max: {
                required: !0,
                maxlength: 4
            },
            password: {
                required: !0
            },
            password_confirmation: {
                required: !0,
                equalTo: "#password"
            }
        },
        errorClass: "help-block error",
        highlight: function(e) {
            $(e).closest(".form-group.row").addClass("has-error")
        },
        unhighlight: function(e) {
            $(e).closest(".form-group.row").removeClass("has-error")
        },
    });
  }
}

