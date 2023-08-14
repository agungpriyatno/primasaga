import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/shared/layouts/auth/auth.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    AuthComponent,
    ReactiveFormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(
    private service: AuthService,
    private router: Router,
    private toast: ToastService,
    private fb: FormBuilder
  ) { }

  isLoading: boolean = false

  form: FormGroup = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required]],
  })

  submit() {
    if (this.form.invalid) return this.form.markAllAsTouched()
    this.isLoading = true
    this.service.signIn(this.formData).subscribe({
      next: (res) => {
        this.service.token = res.data
        this.router.navigateByUrl("/")
        this.isLoading = false
      },
      error: (err) => {
        this.toast.push({
          content: "Gagal masuk",
          type: "error"
        })
        this.isLoading = false
        console.log(err);

      }
    })
  }

  get email() {
    return this.form.get("email")
  }

  get password() {
    return this.form.get("password")
  }

  get formData() {
    var data: FormData = new FormData()
    data.append("email", this.email?.value)
    data.append("password", this.password?.value)
    return data
  }

}
