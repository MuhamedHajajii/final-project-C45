import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  GoogleSigninButtonDirective,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Footer } from './core/components/footer/footer';
import { ImagePlaceHolder } from './shared/directives/image-place-holder';
declare const google: any;

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
export class App implements OnInit {
  constructor(private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        console.log('User signed in:', user);
      } else {
        console.log('User signed out');
      }
    });
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngAfterViewInit(): void {
    console.log(google);
  }
}
