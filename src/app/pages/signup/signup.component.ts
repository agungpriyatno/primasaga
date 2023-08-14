import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/shared/layouts/auth/auth.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    AuthComponent
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

}
