import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list';
  /**
   *
   */
  constructor(private oauthService: OAuthService) {
    // this.oauthService.redirectUri = window.location.origin;
    // this.oauthService.clientId = '0oafvsy65aRNcEBhN0h7';
    // this.oauthService.scope = 'karan.magdani@gmail.com';
    // this.oauthService.issuer = 'https://dev-678859.oktapreview.com/oauth2/default';
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.configure({
      redirectUri: 'http://localhost:4200',
      clientId: '0oafvsy65aRNcEBhN0h7',
      scope: 'openid profile email',
      issuer: 'https://dev-678859.oktapreview.com/oauth2/default'
      // ... etc
    });

    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }
}
