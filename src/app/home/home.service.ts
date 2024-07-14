import { Injectable } from '@angular/core';
import { Item } from './home.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://localhost:7209/GetItem';

  async GetItems(): Promise<Item[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('HTTP Error!');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
      throw new Error('Error Fetching Data!');
    }
  }
}
