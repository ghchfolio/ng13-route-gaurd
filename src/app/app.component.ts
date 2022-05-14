import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private us: UserService) { }

    ngOnInit() { }

    logIn(f: any) {
        this.us.signIn()
    }

}
