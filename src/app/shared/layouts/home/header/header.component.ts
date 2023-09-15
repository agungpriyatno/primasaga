import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/core/data/menu';

import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { fade } from 'src/app/shared/animations/fade';
import { sidebar } from 'src/app/shared/animations/sidebar';
import { IUser } from 'src/app/shared/models/response';
import { USER } from 'src/app/shared/dummy/user';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    sidebar,
    fade
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ){}

  currentUrl: string = ""
  user?: IUser = USER
  list = MENU
  search = false
  profile = false

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.currentUrl = res.url
      }
    })
    this.getUser()
  }

  onProfile() {
    this.profile = !this.profile
  }

  onSearch() {
    this.search = !this.search
  }

  navigateTo(path: string){
    this.router.navigateByUrl(path).then((res) => {
      if(res){
        this.profile = false
      }
    })
  }

  getUser(): void {
    this.auth.session().subscribe({
      next: (res) => {
        this.user = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
