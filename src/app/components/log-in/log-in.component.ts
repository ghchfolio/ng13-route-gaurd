import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

    constructor() { }

    isLoggedIn?: boolean;
    user = {
        email: '',
        password: ''
    };

    ngOnInit(): void { }

    logIn(f: any) {
        // if (form.userName === 'test' && form.userPassword === 'test') this.isLoggedIn = true;
        console.log(f)
    }
}
