import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent {
  @Input() user!: IUser;
}
