import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupForm } from "../../components/signup-form/signup-form";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-signup",
  imports: [ReactiveFormsModule, SignupForm, RouterLink],
  templateUrl: "./signup.html",
  styleUrl: "./signup.css",
})
export class Signup {}
