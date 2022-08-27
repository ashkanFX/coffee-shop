import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path :'',redirectTo:'Home',pathMatch:'full'},
  {path :'Home',component:AdminProductComponent},
  {path:'Home/product',component:ProductComponent},
  {path:'**',redirectTo:'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
