import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardUsersComponent } from 'src/app/shared/components/card-users/card-users.component';
import { ListPostComponent } from 'src/app/shared/components/list-post/list-post.component';
import { ModalCreatePostComponent } from 'src/app/shared/components/modal-create-post/modal-create-post.component';
import { postsDummy } from 'src/app/shared/dummy/post';
import { USER } from 'src/app/shared/dummy/user';
import { IPost, IUser } from 'src/app/shared/models/response';
import { TimeAgoPipe } from 'src/app/shared/pipes/time-ago.pipe';
import { ModalCreatePostService } from 'src/app/shared/services/modal-create-post.service';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CardCompaniesComponent } from 'src/app/shared/components/card-companies/card-companies.component';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    TimeAgoPipe,
    RouterLink,
    ModalCreatePostComponent,
    CardUsersComponent,
    CardProfileComponent,
    CardCompaniesComponent,
    ListPostComponent,
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  service = inject(AuthService)

  constructor(
    private createPost: ModalCreatePostService,
  ){}

  users: IUser[] = []
  user?: IUser
  status: "loading" | "initial" | "error" = "initial"

  ngOnInit(): void {
    this.getUser()
  }

  openModalCreate(){
    this.createPost.open()
  }

  getUser(): void {
    this.status = "loading"
    this.service.session().subscribe({
      next: (res) => {
      this.status = "initial"
        this.user = res
      },
      error: (err) => {
      this.status = "error"
        console.log(err);
      }
    })
  }

}
