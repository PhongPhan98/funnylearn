import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro/ng-zorro-antd.module';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule
  ],
  exports: [LayoutComponent],
  providers: []
})
export class LayoutModule { }
