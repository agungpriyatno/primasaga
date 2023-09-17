import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-authorize',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  route = inject(ActivatedRoute)
  router = inject(Router)
  service = inject(AuthService)

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(res => {
      let token = res.get("token")
      if (!token) {
         this.router.navigateByUrl("")
         return
      }
      this.service.token = token
      this.router.navigateByUrl("")
    })
  }
}
