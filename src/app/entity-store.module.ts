import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDataServiceConfig } from '@ngrx/data';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://unwe-blindoor-api.herokuapp.com/',
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
