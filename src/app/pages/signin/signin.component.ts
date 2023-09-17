import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/shared/layouts/auth/auth.component';
import { environment } from 'src/environments/environment.development';
import { AuthService } from 'src/app/core/service/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Router } from '@angular/router';

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
    private toast: ToastService,
    private router: Router,
    private fb: FormBuilder
  ){}

  isLoading = false
  google = environment.api + "/auth/google"
  github = environment.api + "/auth/github"

  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  })

  get email() {
    return this.form.get("email")
  }

  get password() {
    return this.form.get("password")
  }


  submit() {
    if (this.form?.invalid) return this.toast.push({
      content: "Konten harus di isi",
      type: "error"
    })
    this.isLoading = true

    let formData = new FormData()
    formData.set("email", this.email?.value ?? "")
    formData.append("password", this.password?.value ?? "")

    this.service.signIn(formData).subscribe({
      next: (res) => {
        this.isLoading = false
        this.service.token = res
        this.router.navigateByUrl("")
      },
      error: (err) => {
        this.isLoading = false
        console.log(err);
        this.toast.push({
          content: "Email atau password salah",
          type: "error"
        })
      }
    })
  }
}
