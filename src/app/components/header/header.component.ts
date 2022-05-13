import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    signedIn: boolean | undefined;
    constructor(private us: UserService) { }

    ngOnInit(): void {
        this.signedIn = this.us.isSignedIn();
    }

}
