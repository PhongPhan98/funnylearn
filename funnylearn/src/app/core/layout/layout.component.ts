import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: SocialUser;
  isSignedin: boolean;

  inputValue?: string;
  suggestions: string[] = [];
  users = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  tags = ['1.0', '2.0', '3.0'];
  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
    });
  }

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    console.log('nzOnSearchChange', value, prefix);
    this.suggestions = prefix === '@' ? this.users : this.tags;
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): void {
    this.socialAuthService.signOut();
  }
}
