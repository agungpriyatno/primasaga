import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/shared/layouts/auth/auth.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    AuthComponent
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  google = environment.api + "/auth/google"
  github = environment.api + "/auth/github"

}
