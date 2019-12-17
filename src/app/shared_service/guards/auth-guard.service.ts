import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authentificationService: AuthentificationService, public router: Router) {
  }

  canActivate(): boolean {
    if (this.authentificationService.isUserLoggedIn() === false) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
