import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { ErrorMessage } from "../../components/error-message/error-message";
import { AuthServices } from "../../services/auth.services";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-signin",
  imports: [RouterLink, ReactiveFormsModule, ErrorMessage],
  templateUrl: "./signin.html",
  styleUrl: "./signin.css",
})
export class Signin {
  // Injected Services
  private readonly auth = inject(AuthServices);

  // variables
  errorMessage!: string | undefined;
  successMessage!: string | undefined;

  singInForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

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
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          this.errorMessage = err.error.message;
        },
      });
    }
  }

  handleBeforeSubmit(): void {
    this.errorMessage = undefined;
    this.singInForm.markAllAsTouched();
  }
}
