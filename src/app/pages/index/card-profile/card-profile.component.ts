import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from 'src/app/shared/models/response';
import { USER } from 'src/app/shared/dummy/user';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

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

  service = inject(AuthService)
  data?: IUser
  status: "loading" | "initial" | "error" = "initial"

  ngOnInit(): void {
    this.getData()
  }

  logout(): void {
    this.service.token = ""
    window.location.reload()
  }

  getData(): void {
    this.status = "loading"
    this.service.session().subscribe({
      next: (res) => {
      this.status = "initial"
        this.data = res
      },
      error: (err) => {
      this.status = "error"
        console.log(err);
      }
    })
  }
}
