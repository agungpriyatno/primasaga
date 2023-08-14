import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modal } from '../../animations/modal';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [modal]
})
export class AuthComponent implements OnInit {
  constructor(
    private router: Router
  ){}

  current: string = ""

  ngOnInit(): void {
    this.current = this.router.url
    this.router.events.subscribe((res) => {
      if(res instanceof NavigationEnd) {
        this.current = res.url
      }
    })
  }
}
