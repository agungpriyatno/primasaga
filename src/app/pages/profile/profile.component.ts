import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListPostComponent } from 'src/app/shared/components/list-post/list-post.component';
import { postsDummy, postsProfileDummy } from 'src/app/shared/dummy/post';
import { USER } from 'src/app/shared/dummy/user';
import { IPost, IUser } from 'src/app/shared/models/response';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ListPostComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  list: IPost[] = []
  users: IUser[] = []
  user: IUser = USER
  status: "initial" | "loading" = "initial"

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.status = "loading"
    setTimeout(() => {
      this.list = postsProfileDummy(5)
      this.status = "initial"
    }, 500)
  }
}
