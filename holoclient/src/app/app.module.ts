import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaItemsComponent } from './media-items/media-items.component';
import { MediaControllerComponent } from './media-controller/media-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemsComponent,
    MediaControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
