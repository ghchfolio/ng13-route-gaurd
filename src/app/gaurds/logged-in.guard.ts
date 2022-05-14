import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

    sub = new Subscription();
    signedIn?: boolean;

    constructor(private router: Router, private us: UserService) {
        this.sub = this.us.signedIn$$.subscribe(res => {
            this.signedIn = res;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.signedIn) {
            window.alert('You are not logged in.');
            return false;
        }
        return true;
    }

}
// INFO https://www.tektutorialshub.com/angular/angular-route-guards/#angular-route-guards