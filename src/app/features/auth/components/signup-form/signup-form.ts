import { HttpErrorResponse } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthServices } from "../../services/auth.services";
import { ErrorMessage } from "../error-message/error-message";
import { IRegisterUserResponse } from "../../interfaces/IRegisterUserResponse";
import { ActivatedRoute, Router } from "@angular/router";
import { interval, take } from "rxjs";

@Component({
  selector: "app-signup-form",
  imports: [ReactiveFormsModule, ErrorMessage],
  templateUrl: "./signup-form.html",
  styleUrl: "./signup-form.css",
})
export class SignupForm implements OnInit {
  // Inject Services
  private readonly authServices = inject(AuthServices);
  private readonly router = inject(Router);

  // Variables
  errorMessage!: string | undefined;
  successMessage!: string | undefined;
  isLoading = false;

  timer: number = 5;

  isShowPassword: boolean = false;

  togglePassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  ngOnInit(): void {
    // this.registerForm.setValue({
    //   name: "Muhamed Haji",
    //   email: "muhamedHajajii@gmail.com",
    //   password: "Aa1234567849",
    //   rePassword: "Aa1234567849",
    //   phone: "01002821458",
    // });
  }

  registerForm = new FormGroup(
    {
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z][0-9]{8,}$/),
      ]),
      rePassword: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z][0-9]{8,}$/),
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    { validators: this.passwordMissMatch }
  );

  passwordMissMatch(formGroup: any) {
    const password = formGroup.get("password")?.value;
    const rePassword = formGroup.get("rePassword")?.value;
    return password === rePassword ? null : { missMatch: true };
  }

  onSubmit() {
    this.handleBeforeSubmit();
    // Check Is Valid Form
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.authServices.registerUser(userData).subscribe({
        next: (response) => {
          this.handleSuccessResponse(response);
        },
        error: (err: HttpErrorResponse) => {
          this.handleErrorResponse(err);
        },
      });
    }
  }

  handleBeforeSubmit(): void {
    this.registerForm.markAllAsTouched();
    this.errorMessage = undefined;
    this.isLoading = true;
  }

  handleSuccessResponse(response: IRegisterUserResponse): void {
    console.log(response);
    this.registerForm.reset();
    this.successMessage = response.message;
    this.isLoading = false;

    // this.router.navigate(["/", "signin"]);
    // takeUtil
    interval(1000)
      .pipe(take(5))
      .subscribe(() => {
        console.log("Hello");

        this.timer--;

        if (this.timer === 0) {
          this.router.navigateByUrl("/signin");
        }
      });
  }

  handleErrorResponse(err: HttpErrorResponse): void {
    this.errorMessage = err.error.message;
    this.isLoading = false;
  }
}
