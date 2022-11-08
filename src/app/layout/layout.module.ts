import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
