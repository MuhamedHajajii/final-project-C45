import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  GoogleSigninButtonDirective,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Footer } from './core/components/footer/footer';
import { ImagePlaceHolder } from './shared/directives/image-place-holder';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    NgxSpinnerModule,
    GoogleSigninButtonDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private authService: SocialAuthService) {}

  ngOnInit(): void {}

  signInWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((response) => {
        console.log(response);
      });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
