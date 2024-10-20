import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { NgModule } from '@angular/core';

// Define the routes for your application
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'payment-page', component: PaymentPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }  // Wildcard route to handle undefined paths
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
