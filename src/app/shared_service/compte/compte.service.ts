import { Injectable } from '@angular/core';
import{Observable}   from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { Compte } from 'src/app/class/compte/compte';
import { API_URL } from '../api.url.config';
@Injectable()
export class CompteService {
  
  private compte = new Compte();
  constructor(private _http:HttpClient) { }
 
  getComptes():Observable<any>{
    return this._http.get(API_URL.COMPTE_URL+'s');
  } 
deleteCompte(id:Number){
    return this._http.delete(API_URL.COMPTE_URL+'/'+id);
  }
getCompte(id:Number){
    return this._http.get(API_URL.COMPTE_URL+'/'+id);
  }
    
updateCompte(compte:Compte){
    return this._http.put(API_URL.COMPTE_URL,compte);
}
  
createCompte(compte:Compte){
  return this._http.post(API_URL.COMPTE_URL,compte);
}
errorHandler(error:Response){
     return Observable.throw(error||"SERVER ERROR");
  }

setter(compte:Compte){
     this.compte=compte;
   }

getter(){
    return this.compte;
  }
 
}
