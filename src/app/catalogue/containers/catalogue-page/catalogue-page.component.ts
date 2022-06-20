import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import { DoorDataService } from '../../door-data.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.scss'],
})
export class CataloguePageComponent implements OnInit {
  doors$!: Observable<IDoor[]>;
  searchPattern: string = '';
  category$!: Observable<string | null>;
  manufacturer$!: Observable<string | null>;
  min!: number;
  max!: number;

  constructor(
    private doorDataService: DoorDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.doors$ = this.doorDataService.getAll();
    this.category$ = this.route.queryParamMap.pipe(
      map((p) => p.get('category'))
    );

    this.manufacturer$ = this.route.queryParamMap.pipe(
      map((p) => p.get('manufacturer'))
    );
  }

  detailsHandler(id: string) {
    this.router.navigate([`/catalogue/${id}`]);
  }
}
