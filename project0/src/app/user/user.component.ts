import { Component, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  user = input.required<User>();
  select = output<string>();
  selected = input.required<boolean>();

  get imagePath() {
    return 'assets/users/' + this.user().avatar;
  }
  onSelectUser(userId: string): boolean {
    if (this.user().id === userId) {
      return true;
    }
    return false;
  }
}
