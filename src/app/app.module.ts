import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';

// Decorator 
/* Main Switching Box */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    UsersComponent,
    AboutComponent,
    CpbComponent
  ],
  imports: [
    BrowserModule, // {{}}, [], ()
    FormsModule, // [(ngModel)]
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule is bootstrapped with a comp - AppComponent
})
export class AppModule { }
