import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MailService } from 'src/app/shared_service/mail/mail.service';
import { Mail } from 'src/app/class/mail/mail';

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
})
export class AppHeader implements OnInit, AfterViewInit {
  mails_recive: Mail[]= [];

  constructor(private router:Router ,private mailService:MailService) { }
 
  ngOnInit() {
    
}

  ngAfterViewInit()  {
	}
 
}
