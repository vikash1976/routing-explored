import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, Router,
  CanActivateChild,
  CanLoad, Route
} from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private _router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let random = Math.random();
    if (random < 0.5) {
      console.info("Luck on your side, you get through the GUARD!");
      return true;
    }
    else {
      console.warn("Hard luck on your side, GUARD is not allowing you this time!");
      this._router.navigate(['not-found', { 'message': "Login required!!!" }]);
      return false;
    }
  }

  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
     let random = Math.random();
    if (random < 0.5) {
      console.info("Lucky Singh!!!");
      return true;
    }
    else {
      console.warn("UN-Lucky Singh!!!");
      this._router.navigate(['not-found', { 'message': "Login required!!!" }]);
      return false;
    }
     /* if(moment().date() === 20){
        return true;
      }
      return false;*/
  }
}
