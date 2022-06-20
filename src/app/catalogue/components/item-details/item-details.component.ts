import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import {
  faEdit,
  faCartPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent {
  @Input() item!: IDoor | null;
  @Input() user!: IUser | null | undefined;
  @Output() addToCart = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  faEdit = faEdit;
  faCartPlus = faCartPlus;
  faTrashAlt = faTrashAlt;
}
