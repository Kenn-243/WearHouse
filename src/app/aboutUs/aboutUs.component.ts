import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutUs',
  standalone: true,
  imports: [],
  templateUrl: './aboutUs.component.html',
  styleUrl: './aboutUs.component.css',
})
export class AboutUsComponent {
  email: string = 'support@wearhouse.com';
}
