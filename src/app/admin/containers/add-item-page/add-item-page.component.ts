import { Component } from '@angular/core';
import { DoorDataService } from 'src/app/catalogue/door-data.service';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.scss'],
})
export class AddItemPageComponent {
  constructor(private doorDataService: DoorDataService) {}

  addItemHandler(item: IDoor) {
    item.price = Number(item.price);
    this.doorDataService.add(item);
  }
}
