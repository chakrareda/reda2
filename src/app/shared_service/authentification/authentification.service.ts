import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';
import { API_URL } from '../api.url.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

import {Md5} from 'ts-md5/dist/md5';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
user1:any
   public temoin = false;
   public temoinRegister = false;
mtp :any
  constructor(private http: HttpClient, public router: Router) {
  }
 
  authenticate(username, password,users) {
    const md5 = new Md5();
    this.mtp =md5.appendStr(password).end();
    console.log(username +" "+ this.mtp)
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
     
       if (username == element.username && element.password == this.mtp) {
        localStorage.setItem('name_User',element.username);
        localStorage.setItem('id_User',element.id);
        sessionStorage.setItem('username', username)
        return true;
      }
    }

      alert("a valid form was submitted");

      return false;
   
  }
  
 
  getUsers():Observable<any>{
    return this.http.get(API_URL.URL+'/users');
  } 
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
/*  isUserLogged(): boolean {  //

      if  (localStorage.getItem('token') !== null) {
        return true;
    }
      return false;
  }
  isUserLoggedAs(role:String): boolean {  //
    for (const   r of this.nettoyerRoles() ) {
      if  (r === role) {
        return true;
      }
    }
    return false;
  }

  login( user ) {
    console.log(user)

    return this.http.post(API_URL.URL+"/login", {
      username: user.username,
      password: user.password,
    }, { observe: 'response'}).subscribe(response => {

     let tokendecoded = jwt_decode(response.headers.get('Authorization')); 
      localStorage.setItem('token', response.headers.get('Authorization')); 
      localStorage.setItem('username', tokendecoded.sub);

      localStorage.setItem('roles', tokendecoded.roles);
      this.router.navigate(['index']);
    }, error  => {
      console.log(error);
      this.temoin = true;
    });

  }

  login(user): Observable<any> {
    return this.http.post<any>(API_URL.URL+"/login", user, httpOptions).pipe(
        tap((result) => this.save_token(result)),
        catchError(this.handleError<any>('login'))
    );
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
      return of(result as T);
  };
}
private save_token(data) {
  if (data.success) {
      localStorage.setItem('token', data.token);
      return;
  }
}*/
  createUser(user){
    this.temoin =false;
    console.log(user)

    return this.http.post(API_URL.URL+"/register",user);
  }
 
/*
  nettoyerRoles():string[]{  // katakhed les roles li mstokyine o kat
    let Roles: string[];
    Roles = new Array();

    localStorage.getItem('roles').toString().split(",").forEach( (a) => {
      Roles.push(a);
    });
    return Roles;

  }*/
}
