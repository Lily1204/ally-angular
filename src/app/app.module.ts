import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountUpModule } from 'countup.js-angular2';
// import { FooterModule } from './components/footer/footer.module';
// import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
