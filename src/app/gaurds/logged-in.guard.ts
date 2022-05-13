import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('canActivate');
        alert('You are not logged in.');
        this.router.navigate(['login']);
        return true;
    }

}
// INFO https://www.tektutorialshub.com/angular/angular-route-guards/#angular-route-guards