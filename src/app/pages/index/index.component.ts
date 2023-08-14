import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { AuthService } from 'src/app/core/services/auth.service';

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

  constructor(
    private createPost: ModalCreatePostService,
    private auth: AuthService,
  ){}

  list: IPost[] = []
  users: IUser[] = []
  user: IUser = USER
  status: "initial" | "loading" = "initial"

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.status = "loading"

  }

  openModalCreate(){
    this.createPost.open()
  }

}
