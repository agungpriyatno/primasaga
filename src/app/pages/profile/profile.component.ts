import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
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
  service = inject(AuthService)
  
  list: IPost[] = []
  users: IUser[] = []
  user?: IUser
  status: "initial" | "loading" = "initial"

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.status = "loading"
    this.service.session().subscribe({
      next: (res) => {
      this.status = "initial"
        this.user = res
      },
      error: (err) => {
      this.status = "initial"
        console.log(err);
      }
    })
  }
}
