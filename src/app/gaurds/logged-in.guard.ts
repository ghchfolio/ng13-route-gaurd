import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

    sub = this.us.signedIn$.subscribe(res => this.signedIn = res);
    signedIn?: boolean;

    constructor(private router: Router, private us: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.signedIn) return false;
        return true;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
// INFO https://www.tektutorialshub.com/angular/angular-route-guards/#angular-route-guards