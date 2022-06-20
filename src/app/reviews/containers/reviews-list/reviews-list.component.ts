import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DialogConfirmComponent } from 'src/app/core/components/dialog-confirm/dialog-confirm.component';
import { IReview } from 'src/app/shared/interfaces/review.interface';
import { ReviewActions } from '../../state';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
})
export class ReviewsListComponent {
  @Input() reviews!: IReview[] | [] | null;

  constructor(private store: Store, public dialog: MatDialog) {}

  deleteReviewHandler(id: string) {
    this.openDialog(id);
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(ReviewActions.deleteReview({ reviewId: id }));
      }
    });
  }
}
