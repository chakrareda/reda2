import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/class/mail/mail';
import { ActivatedRoute } from '@angular/router';
import { MailService } from 'src/app/shared_service/mail/mail.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
})
export class MailDetailComponent implements OnInit {
  id_user: number;

  constructor(private _Activatedroute:ActivatedRoute,private mailService:MailService) { }
  id:number;
  mails_send: Mail[]= [];
  mail:Mail
  ngOnInit() {
    let i=parseInt(this._Activatedroute.snapshot.paramMap.get('id'));
    this.id = i;
    this.getMailsSend();
  }
  public getMailsSend(){
    this.mailService.getMails().subscribe(
      (res)=>{
        console.log(res);
        res.forEach(mail => {
          if(mail.id == this.id)
          this.mails_send = mail;
        });
        console.log(this.mails_send);
    },
    (error)=>{
       console.log(error);
    })
  }
  
  ngAfterViewInit() {}


}
