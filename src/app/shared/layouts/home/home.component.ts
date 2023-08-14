import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalSigninComponent } from '../../components/modal-signin/modal-signin.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ToastComponent } from '../../components/toast/toast.component';
import { slideUp } from '../../animations/slide-up';
import { NavigationEnd, Route, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ModalComponent,
    ToastComponent,
    ModalSigninComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideUp]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  topButton: boolean = false

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.onTopButton()
      }
    })
  }

  onTopButton(){
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView({behavior: "smooth"});
      top = null;
    }
  }

  onScroll(event: any): void {
    var scroll = event.srcElement.scrollTop
    var height = window.innerHeight
    if (scroll > height) {
      this.topButton = true
    } else {
      this.topButton = false
    }
  }

}
