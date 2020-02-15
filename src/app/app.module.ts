import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublishingComponent } from './publishing/publishing.component';
import { FrontendComponent } from './frontend/frontend.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    PublishingComponent,
    FrontendComponent,
    HeaderComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
