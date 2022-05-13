import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

    constructor(private router: Router, private us: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.us.isSignedIn()) {
            window.alert('You are not logged in.');
            return false;
        }
        return true;
    }

}
// INFO https://www.tektutorialshub.com/angular/angular-route-guards/#angular-route-guards