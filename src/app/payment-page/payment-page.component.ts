import { Component } from '@angular/core';
import { NavigationsComponent } from "../components/navigations/navigations.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [NavigationsComponent, FooterComponent],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {

}
