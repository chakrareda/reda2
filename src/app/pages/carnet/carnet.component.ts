import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from 'src/app/_services/script-loader.service';
import { CarnetService } from 'src/app/shared_service/carnet/carnet.service';
import { Carnet } from 'src/app/class/carnet/carnet';
import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from 'src/app/class/contact/contact';



declare var $:any;
@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html'
})
export class CarnetComponent implements OnInit {
  private carnets:Carnet[] = [];
  private contacts:Contact[] = [];
  contact: any;
  id_User: string;

  constructor(private _script: ScriptLoaderService,private carnetService:CarnetService) { }
carnet : any
AddGroup = new FormGroup({
  name: new FormControl()
});
EditGroup = new FormGroup({
  name: new FormControl()
});
AddMail = new FormGroup({
  mail: new FormControl()
});
EditMail = new FormGroup({
  mail: new FormControl()
});

  ngOnInit() {
    this.getAllCarnets();
    this.id_User = localStorage.getItem('id_User');

   // this.getContacts();
  }
 /* public filterContactOfGroupe(){
    return this.contacts.filter(contact => contact.idgroupe == 2);
}
*/
  public getAllCarnets(){
    this.carnetService.getCarnets().subscribe(
      (res)=>{
        console.log(res);
        this.carnets=res;
    },
    (error)=>{
       console.log(error);
    })
  }

  public getCarnet(id){
    this.carnetService.getCarnet(id).subscribe(
      (res)=>{
        console.log(res);
        this.carnet=res;
    },
    (error)=>{
       console.log(error);
    })
  }
processForm(n){
  if(n==-1){
    this.carnet = this.AddGroup.getRawValue();
    this.carnet.user_id =localStorage.getItem('id_User');
     this.carnetService.createCarnet(this.carnet).subscribe((carnet)=>{
     
       console.log(carnet);
       this.getAllCarnets();
     },(error)=>{
       console.log(error);
     });
  }else{
    this.carnet = this.EditGroup.getRawValue();
    this.carnet.user_id =localStorage.getItem('id_User');

    this.carnet.id=n;
     this.carnetService.updateCarnet(this.carnet).subscribe((carnet)=>{
       console.log(carnet);
     },(error)=>{
       console.log(error);
     });
  }
  
}

deleteCarnet(carnet){
  console.log(carnet);
  this.carnetService.deleteCarnet(carnet.id).subscribe((data)=>{
      this.carnets.splice(this.carnets.indexOf(carnet),1);
      this.ngOnInit();      

  },(error)=>{
    console.log(error);
  });
}
public getContacts(){
  this.carnetService.getContacts().subscribe(
    (res)=>{
      console.log(res);
      this.contacts=res;
  },
  (error)=>{
     console.log(error);
  })
 }
 deleteContact(contact){
  console.log(contact);

  this.carnetService.deleteContact(contact.id).subscribe((data)=>{
    this.ngOnInit();    

  },(error)=>{
    console.log(error);
  });
}

processFormContacts(n,a){
  if(n==-1){
    this.contact = this.AddMail.getRawValue();
    this.contact.idcarnet = a;
    console.log( this.contact);
     this.carnetService.createContact(this.contact).subscribe((contact)=>{
       console.log(contact);
       this.ngOnInit()      
           },(error)=>{
       console.log(error);
     });
  }else{
    this.contact = this.EditMail.getRawValue();
    this.contact.id=n;
    this.contact.idcarnet = a;

     this.carnetService.updateContact(this.contact).subscribe((contact)=>{
       console.log(contact);
     },(error)=>{
       console.log(error);
     });
  }
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
