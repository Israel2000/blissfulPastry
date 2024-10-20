import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { NavigationsComponent } from "./components/navigations/navigations.component";
import { PaymentPageComponent } from "./payment-page/payment-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavigationsComponent, PaymentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blissfulpastry.com';
}
