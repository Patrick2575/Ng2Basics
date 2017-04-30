import { Component } from '@angular/core';
import {User} from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html' 
})
export class AppComponent{
    users: User[];
    activeUser: User;
    constructor()
    {
        this.users = [
            {id: 25, name:"Chris", userName:"Sevilayha"},
            {id: 26, name:"Nick",  userName:"Whatnicktweets"},
            {id: 27, name:"Holly", userName:"Hollylawly"},
        ]
    }

    setActiveUser(user: User)
    {
        this.activeUser = user;
    }

    onUserCreated(user: User)
    {
        console.log(user);
        this.users.push(user);
    }
}
