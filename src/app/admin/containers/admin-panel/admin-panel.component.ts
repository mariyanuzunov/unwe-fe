import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  links = [
    { url: 'all-orders', text: 'Управление на поръчките' },
    { url: 'all-reviews', text: 'Управление на потребителските отзиви' },
    { url: 'add-item', text: 'Добавяне на нов продукт' },
  ];
  activeLink: any = this.links[0];

  constructor() {}

  ngOnInit(): void {}

  changeActiveLink() {}
}
