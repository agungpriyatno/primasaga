import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from 'src/app/shared/models/response';
import { USER } from 'src/app/shared/dummy/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {

  data?: IUser
  status: "loading" | "initial" | "error" = "initial"

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.status = "loading"
    setTimeout(() => {
      this.status = "initial"
      this.data = USER
    }, 500)
  }
}
