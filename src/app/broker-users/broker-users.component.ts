import { Component } from '@angular/core';

@Component({
  selector: 'app-broker-users',
  templateUrl: './broker-users.component.html',
  styleUrls: ['./broker-users.component.scss']
})
export class BrokerUsersComponent {
  users = [
    {id: 1, username:"test", password:"123456", created: new Date()},
    {id: 2, username:"test2", password:"123456", created: new Date()},
    {id: 3, username:"test3", password:"123456", created: new Date()},
  ]

}
