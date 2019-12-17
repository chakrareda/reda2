import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MailService } from 'src/app/shared_service/mail/mail.service';
import { Mail } from 'src/app/class/mail/mail';
import { ScriptLoaderService } from 'src/app/_services/script-loader.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
})
export class MailViewComponent implements OnInit, AfterViewInit {
   
  
  mail: any;
  id : number
  mails_send: Mail[]= [];
  constructor(private router:Router ,private mailService:MailService,private _script: ScriptLoaderService) { }

  ngOnInit() {
    this.getMailsSend();
  }
  
  public getMailsSend(){
    this.id = parseInt(localStorage.getItem('id_User'));
    this.mailService.getMails().subscribe(
      (res)=>{
        console.log(res);
       this.mails_send = res ;
    },
    (error)=>{
       console.log(error);
    })
  }
  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/mailbox.js');

  }
  onSelect(m){
    this.MarkLu(m);
    this.router.navigate(['mail_detail',m.id]);
  }
  MarkLu(m){
    this.mailService.updateMail(m).subscribe((m)=>{
    },(error)=>{
      console.log(error);
    });
  }
}
