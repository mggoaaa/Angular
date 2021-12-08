import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/users.interface';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  users: any;
  clickMessage = '';
  selectedUser?: User;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    return this.userService.getAllUsers()
    .subscribe(user => {
      this.users = user;
      console.log(user)})
    
  }
  
  selectUser(user: User): void {
    this.selectedUser = user;
  }
}
