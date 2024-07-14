import { Component } from '@angular/core';
import { Item } from './home.model';
import { UserService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items!: Item[];

  constructor(private UserService: UserService) {}

  async ngOnInit() {
    try {
      this.items = await this.UserService.GetItems();
      console.log(this.items);
    } catch (error) {
      console.log(error);
    }
  }
}
