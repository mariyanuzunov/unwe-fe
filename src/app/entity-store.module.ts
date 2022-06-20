import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDataServiceConfig } from '@ngrx/data';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000',
  timeout: 5000,
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],
})
export class EntityStoreModule {}
