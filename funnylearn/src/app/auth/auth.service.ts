import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth2: any;

  constructor() { }

  // tslint:disable-next-line: typedef
  callLoginButton() {
    this.auth2.attachClickHandler((googleAuthUser) => {
      const profile = googleAuthUser.getBasicProfile();
      console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    }, (error) => {
      alert(JSON.stringify(error, undefined, 2));
    });

  }
  // tslint:disable-next-line: typedef
  googleAuthSDK() {
    // window['googleSDKLoaded'] = () => {
    //   window['gapi'].load('auth2', () => {
    //     this.auth2 = window['gapi'].auth2.init({
    //       client_id: '370048962443-t3nngmt4bfgnrhsiqmqm91tv25ltcl5i.apps.googleusercontent.com',
    //       cookiepolicy: 'single_host_origin',
    //       scope: 'profile email'
    //     });
    //     this.callLoginButton();
    //   });
    // }
    // (function (d, s, id) {
    //   let js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) { return; }
    //   js = d.createElement(s); js.id = id;
    //   js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'google-jssdk'));

    console.log('phong');
  }
}
