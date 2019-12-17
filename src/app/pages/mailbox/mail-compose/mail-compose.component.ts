import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MailService } from 'src/app/shared_service/mail/mail.service';
import { ScriptLoaderService } from 'src/app/_services/script-loader.service';
import { CompteService } from 'src/app/shared_service/compte/compte.service';
import { Compte } from 'src/app/class/compte/compte';
import { CarnetService } from 'src/app/shared_service/carnet/carnet.service';
import { Carnet } from 'src/app/class/carnet/carnet';

declare var $:any;

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
})
export class MailComposeComponent implements OnInit, AfterViewInit {
  comptes:Compte[] = [];
  carnets:Carnet[] = [];
  contacts =  [];
  contact: any;

 SendMail = new FormGroup({
    id: new FormControl(),
    mail_recepteur: new FormControl(),
    mail_emetteur: new FormControl(),
    object: new FormControl(),
    contents: new FormControl(),
    mtp: new FormControl()
  });
  
  constructor(private mailService:MailService,private compteService:CompteService,private _script: ScriptLoaderService,private carnetService:CarnetService) { }
  mail: any;
  car :any;
  con : any;
  maild :any

    ngOnInit() {
     
      this.getAllComptes();
      this.getAllCarnets();
      this.getContacts();
    
    }

    function() {  
     var array = [1, 2];  
       for (var v in array) // for acts as a foreach  
       {  
           alert(array[v]);  
       }  
       for(var i=0 ;i< this.contacts.length;i++){
         alert(i); 
       }
   }  
    public  getAllComptes(){
      this.compteService.getComptes().subscribe(
        (res)=>{
         
          this.comptes=res;
      },
      (error)=>{
         console.log(error);
      })
    }
    procesForm(){
      this.mail = this.contact = this.SendMail.getRawValue();

      this.mail.user_id =  parseInt(localStorage.getItem('id_User'));

      console.log(this.mail);
      if(this.mail.id==undefined){
         this.mailService.createMail(this.mail).subscribe((mail)=>{
           console.log(mail);
         },(error)=>{
           console.log(error);
         });
      }
      
    }
    public getContacts(){
      this.carnetService.getContacts().subscribe(
        (res)=>{
          this.contacts=res;
          console.log(this.contacts)
      },
      (error)=>{
         console.log(error);
      })
     }
    public getAllCarnets(){
      this.carnetService.getCarnets().subscribe(
        (res)=>{
          this.carnets=res;
      },
      (error)=>{
         console.log(error);
      })
    }
  ngAfterViewInit() {
    $('#contents').summernote();
    $('.note-popover').css({
        'display': 'none'
    });
    $('[data-provide="markdown"]').markdown({autofocus:false,savable:false});
    this._script.load('./assets/js/scripts/form-plugins.js');

  }
 
}
