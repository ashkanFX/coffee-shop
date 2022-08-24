import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { FooterComponent } from './footer/footer.component';
import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminProductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ImageModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
