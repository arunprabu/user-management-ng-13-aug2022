import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/components/login/login.component';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { UsersModule } from './users/users.module';

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
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    LoginComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule, // {{}}, [], ()
    FormsModule, // [(ngModel)]
    AppRoutingModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule is bootstrapped with a comp - AppComponent
})
export class AppModule { }
