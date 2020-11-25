import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RecommendedVideoComponent } from './recommended-video/recommended-video.component';
import { RouterModule } from '@angular/router';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    RecommendedVideoComponent
  ],
  imports: [
    BrowserModule,
    // MatIconModule,
    RouterModule.forRoot([
      {
        path: "header",
        component: HeaderComponent
      },
      {
        path: "side-bar",
        component: SideBarComponent
      },
      {
        path: "recommended-video",
        component: RecommendedVideoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
