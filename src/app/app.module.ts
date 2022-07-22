import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, Routes } from '@angular/router';
import { FirstComponent } from './MyComponent/first/first.component';
import { SecondComponent } from './MyComponent/second/second.component';

const routes:Routes = [
  {path:"first",component:FirstComponent},
  {path:"second",component:SecondComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }