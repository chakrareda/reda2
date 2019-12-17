import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { Mail } from 'src/app/class/mail/mail';
import { Router } from '@angular/router';
import { MailService } from 'src/app/shared_service/mail/mail.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
})
export class MailboxComponent implements OnInit, AfterViewInit {

  
  mail: any;
  id : number
  mails_recive: Mail[]= [];
  constructor(private router:Router ,private mailService:MailService,private _script: ScriptLoaderService) { }

  ngOnInit() {
    this.getMailsSend();
  }
  
  public getMailsSend(){
    this.id = parseInt(localStorage.getItem('id_User'));
    this.mailService.getMailsSend(this.id).subscribe(
      (res)=>{
       this.mails_recive = res ;
       console.log(this.mails_recive);

    },
    (error)=>{
       console.log(error);
    })
  }

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/mailbox.js');
  }
  onSelect(m){
    console.log("aaaaaaaaaaaaaaaa")
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
