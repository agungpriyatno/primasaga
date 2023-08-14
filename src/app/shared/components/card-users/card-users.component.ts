import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../models/response';
import { usersDummy } from '../../dummy/user';

@Component({
  selector: 'app-card-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-users.component.html',
  styleUrls: ['./card-users.component.css']
})
export class CardUsersComponent implements OnInit {

  list: IUser[] = []
  status: "loading" | "initial" = "initial"

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.status = "loading"
    setTimeout(() => {
      this.status = "initial"
      this.list = usersDummy(5)
    }, 500)
  }

}
