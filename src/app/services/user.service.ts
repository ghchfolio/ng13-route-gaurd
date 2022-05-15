import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private bsubj = new BehaviorSubject<boolean>(false);
    signedIn$ = this.bsubj.asObservable();

    constructor(private router: Router) { }

    signIn() {
        this.bsubj.next(true);
        this.router.navigate(['/home'])
    }

    signOut() {
        this.bsubj.next(false);
        this.router.navigate(['/login']);
    }
}
