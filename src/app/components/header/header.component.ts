import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    sub = new Subscription();
    signedIn = false;

    constructor(private us: UserService) { }

    ngOnInit(): void {
        this.sub = this.us.signedIn$.subscribe(res => this.signedIn = res);
    }

    signIn() {
        this.us.signIn();
    }

    signOut() {
        this.us.signOut();
    }

    onDestroy() {
        this.sub.unsubscribe();
    }
}
