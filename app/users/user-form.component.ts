import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-form',
    templateUrl: './app/users/user-form.component.html',
    styleUrls: ['./app/users/user-form.component.css']
})
export class UserFormComponent{
    newUser: User;
    active: boolean;
    @Output() userCreated: EventEmitter<User>;
    constructor()
    {
        this.newUser = new User;
        this.active = true;
        this.userCreated = new  EventEmitter;
    }
    onSubmit()
    {
        this.userCreated.emit(this.newUser);
        this.active = false;
        this.newUser = new User;
        setTimeout(()=>{this.active = true}, 0);
    }
}