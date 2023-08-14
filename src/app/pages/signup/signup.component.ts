import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/shared/layouts/auth/auth.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    AuthComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private service: AuthService,
    private router: Router,
    private toast: ToastService,
    private fb: FormBuilder
  ) { }

  isLoading: boolean = false

  form: FormGroup = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required]],
  })

  submit() {
    if (this.form.invalid) return this.form.markAllAsTouched()
    this.isLoading = true
    this.service.signUp(this.formData).subscribe({
      next: (_) => {
        this.toast.push({
          content: "Berhasil mendaftarkan akun!",
          type: "success"
        })
        this.isLoading = false
        this.router.navigateByUrl("/signin")
      },
      error: (err) => {
        this.isLoading = false
        this.toast.push({
          content: "Gagal mendaftarkan akun",
          type: "error"
        })
        console.log(err);

      }
    })
  }

  get name() {
    return this.form.get("name")
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
