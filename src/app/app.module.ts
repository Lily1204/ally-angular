import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountUpModule } from 'countup.js-angular2';
import { InViewportModule } from '../app/directives/in-viewport/in-viewport.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FragmentScrollModule } from './directives/fragment-scroll/fragment-scroll.module';
import { CounterModule } from './directives/counter/counter.module';

import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CountUpModule,
    BrowserAnimationsModule,
    FragmentScrollModule.forRoot(),
    CounterModule,
    InViewportModule,
    FooterModule,
    NavbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
