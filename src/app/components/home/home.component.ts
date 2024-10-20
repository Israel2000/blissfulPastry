import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NavigationsComponent } from "../navigations/navigations.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavigationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
    encapsulation: ViewEncapsulation.None  // Add this line to disable encapsulation

})
export class HomeComponent {

}
