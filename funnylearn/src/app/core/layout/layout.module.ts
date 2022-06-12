import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro/ng-zorro-antd.module';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    SocialLoginModule
  ],
  exports: [LayoutComponent],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '370048962443-t3nngmt4bfgnrhsiqmqm91tv25ltcl5i.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class LayoutModule { }
