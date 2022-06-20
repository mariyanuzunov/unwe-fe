import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent {
  @Input() item!: IDoor;
  @Output() details = new EventEmitter();
}
