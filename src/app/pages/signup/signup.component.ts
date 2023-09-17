import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/shared/layouts/auth/auth.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    AuthComponent,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private service: AuthService,
    private toast: ToastService,
    private router: Router,
    private fb: FormBuilder
  ){}

  isLoading: boolean = false

  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    name: ["", [Validators.required]],
    username: ["", [Validators.required]],
  })

  get email() {
    return this.form.get("email")
  }

  get password() {
    return this.form.get("password")
  }

  get name() {
    return this.form.get("name")
  }

  get username() {
    return this.form.get("username")
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
    formData.append("name", this.name?.value ?? "")
    formData.append("username", this.username?.value ?? "")

    this.service.signUp(formData).subscribe({
      next: (res) => {
        this.isLoading = false
        this.toast.push({
          content: "Berhasil didaftarkan",
          type: "success"
        })
        this.router.navigateByUrl("/signin")
      },
      error: (err) => {
        this.isLoading = false
        console.log(err);
        this.toast.push({
          content: "Email atau username sudah digunakan",
          type: "error"
        })
      }
    })
  }
}
