import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListPostComponent } from 'src/app/shared/components/list-post/list-post.component';
import { postsDummy } from 'src/app/shared/dummy/post';
import { USER } from 'src/app/shared/dummy/user';
import { IPost, IUser } from 'src/app/shared/models/response';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    ListPostComponent,
  ],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  list: IPost[] = []
  user: IUser = USER
  status: "initial" | "loading" = "initial"

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.status = "loading"
    setTimeout(() => {
      this.list.push(...postsDummy(5))
      this.status = "initial"
    }, 200)
  }
}
