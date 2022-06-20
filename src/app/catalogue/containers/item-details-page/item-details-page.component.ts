import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/auth/state';
import { CartActions } from 'src/app/cart/state';
import { DialogConfirmComponent } from 'src/app/core/components/dialog-confirm/dialog-confirm.component';
import { ReviewActions, ReviewSelectors } from 'src/app/reviews/state';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import { IReview } from 'src/app/shared/interfaces/review.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { DoorDataService } from '../../door-data.service';

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.scss'],
})
export class ItemDetailsPageComponent implements OnInit {
  id!: string;
  item$!: Observable<IDoor>;
  reviews$!: Observable<IReview[] | []>;
  user$!: Observable<IUser | null | undefined>;

  constructor(
    private doorDataService: DoorDataService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(AuthSelectors.selectAuthUser);
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.item$ = this.doorDataService.getByKey(this.id);
    this.store.dispatch(ReviewActions.fetchItemReviews({ itemId: this.id }));
    this.reviews$ = this.store.pipe(select(ReviewSelectors.selectItemReviews));
  }

  addToCartHandler(item: IDoor) {
    this.store.dispatch(CartActions.addToCart({ item }));

    const notificationRef = this._snackBar.open(
      'Продуктът е добавен във вашата количка!',
      'Преглед',
      {
        duration: 2500,
      }
    );

    notificationRef.onAction().subscribe(() => {
      this.router.navigateByUrl('/cart');
      notificationRef.dismiss();
    });
  }

  editHandler(item: IDoor) {
    this.router.navigateByUrl('/admin-panel/edit-item/' + item._id);
  }

  deleteDoorHandler(id: string) {
    this.openDialog(id);
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.doorDataService
          .delete(id)
          .subscribe({ next: () => this.router.navigateByUrl('/catalogue') });
      }
    });
  }
}
