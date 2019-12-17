import { Injectable } from '@angular/core';
import{Observable}   from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { Carnet } from 'src/app/class/carnet/carnet';
import { API_URL } from '../api.url.config';
import { Contact } from 'src/app/class/contact/contact';
@Injectable()
export class CarnetService {
 

  private carnet = new Carnet();
  constructor(private _http:HttpClient) { }
 
  getCarnets():Observable<any>{
    return this._http.get(API_URL.CARNET_URL+'s');

  } 

deleteCarnet(id:Number){
    return this._http.delete(API_URL.CARNET_URL+'/'+id);
  }
getCarnet(id:Number){
    return this._http.get(API_URL.CARNET_URL+'/'+id);
  }
    
updateCarnet(carnet:Carnet){
    return this._http.put(API_URL.CARNET_URL,carnet);
}
  
createCarnet(carnet:Carnet){
  return this._http.post(API_URL.CARNET_URL,carnet);
}
errorHandler(error:Response){
     return Observable.throw(error||"SERVER ERROR");
  }

setter(carnet:Carnet){
     this.carnet=carnet;
   }

getter(){
    return this.carnet;
  }
  
   getContacts():Observable<any>{
    return this._http.get(API_URL.CONTACT_URL+"s");
  } 
  deleteContact(idcontact:Number){
    return this._http.delete(API_URL.CONTACT_URL+'/'+idcontact);
  }
  updateContact(contact:Contact){
    return this._http.put(API_URL.CONTACT_URL,contact);
}
  
createContact(contact:Contact){
  return this._http.post(API_URL.CONTACT_URL,contact);

}
}
