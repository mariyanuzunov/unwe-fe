import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { IDoor } from '../shared/interfaces/door.interface';
@Injectable({
  providedIn: 'root',
})
export class DoorDataService extends EntityCollectionServiceBase<IDoor> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Door', serviceElementsFactory);
  }
}
