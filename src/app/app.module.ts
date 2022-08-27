import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { FooterComponent } from './footer/footer.component';
import {ImageModule} from 'primeng/image';
import { ProductComponent } from './product/product.component';
import {BadgeModule} from 'primeng/badge';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminProductComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    BadgeModule,
    BrowserModule,
    ImageModule,
    InputNumberModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
