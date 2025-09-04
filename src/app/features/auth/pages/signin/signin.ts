import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { ErrorMessage } from "../../components/error-message/error-message";
import { AuthServices } from "../../services/auth.services";
import { HttpErrorResponse } from "@angular/common/http";
import { timer } from "rxjs";

@Component({
  selector: "app-signin",
  imports: [RouterLink, ReactiveFormsModule, ErrorMessage],
  templateUrl: "./signin.html",
  styleUrl: "./signin.css",
})
export class Signin {
  // Injected Services
  private readonly auth = inject(AuthServices);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  // variables
  errorMessage!: string | undefined;
  successMessage!: string | undefined;

  // syntax
  // singInForm = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required]),
  // });

  singInForm: FormGroup;
  isLoading = false;

  constructor() {
    this.singInForm = this.fb.group({
      email: [
        "muhamedhajajii@gmail.com",
        [Validators.required, Validators.email],
      ],
      password: ["Aa123456789", [Validators.required]],
    });
  }

  onSubmit(): void {
    this.handleBeforeSubmit();

    if (this.singInForm.valid) {
      console.log("Valid");
      const userData = this.singInForm.value;
      this.auth.signInUser(userData).subscribe({
        next: (response) => {
          console.log(response);
          this.singInForm.reset();
          this.successMessage = response.message;
          this.isLoading = false;
          console.log(response.token);
          localStorage.setItem("token", response.token);
          timer(3000).subscribe(() => {
            this.router.navigateByUrl("/home");
          });
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          this.errorMessage = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }

  handleBeforeSubmit(): void {
    this.errorMessage = undefined;
    this.singInForm.markAllAsTouched();
    this.isLoading = true;
  }
}
