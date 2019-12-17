import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Mail } from 'src/app/class/mail/mail';
import { API_URL } from '../api.url.config';
import{Observable}   from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  constructor(private _http:HttpClient) { }
  private mail = new Mail();


  getMailsSend(id:number):Observable<any>{
    console.log("aaaaaaaaaaazz")
    return this._http.get(API_URL.URL+'/mails-send/'+id);
  } 
  getMails():Observable<any>{
    return this._http.get(API_URL.URL+'/mails');
  } 
  createMail(mail){
    console.log(mail);
    return this._http.post(API_URL.URL+'/send-mail',mail);
  }
  updateMail(mail){
    console.log(mail);
    return this._http.put(API_URL.URL+'/mail-lu',mail);

  }
  setter(mail:Mail){
    this.mail=mail;
  }

getter(){
   return this.mail;
 }

}
