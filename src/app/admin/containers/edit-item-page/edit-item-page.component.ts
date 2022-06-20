import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoorDataService } from 'src/app/catalogue/door-data.service';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Component({
  selector: 'app-edit-item-page',
  templateUrl: './edit-item-page.component.html',
  styleUrls: ['./edit-item-page.component.scss'],
})
export class EditItemPageComponent implements OnInit {
  id!: string;
  item$!: Observable<IDoor>;

  constructor(
    private doorDataService: DoorDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.item$ = this.doorDataService.getByKey(this.id);
  }
  editItemHandler(item: IDoor) {
    item._id = this.id;
    this.doorDataService
      .update(item)
      .subscribe({
        next: () => this.router.navigateByUrl('/catalogue/' + item._id),
      });
  }
}
