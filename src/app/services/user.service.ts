import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private signedIn = false;

    constructor(private router: Router) { }

    isSignedIn() {
        return this.signedIn;
    }

    signIn() {
        this.signedIn = true;
        this.router.navigate(['/fruits'])
    }

    signOut() {
        this.signedIn = false;
        return this.signedIn
    }
}
