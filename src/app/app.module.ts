import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublishingComponent } from './publishing/publishing.component';
import { FrontendComponent } from './frontend/frontend.component';
import { HeaderComponent } from './header/header.component';
import { LearningComponent } from './learning/learning.component';

@NgModule({
  declarations: [
    AppComponent,
    PublishingComponent,
    FrontendComponent,
    HeaderComponent,
    LearningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
