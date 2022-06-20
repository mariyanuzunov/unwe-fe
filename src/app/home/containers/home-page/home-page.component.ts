import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoorDataService } from 'src/app/catalogue/door-data.service';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  doors$!: Observable<IDoor[]>;
  constructor(
    private doorDataService: DoorDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.doors$ = this.doorDataService.getAll();
  }

  detailsHandler(id: string) {
    this.router.navigate([`/catalogue/${id}`]);
  }
}
