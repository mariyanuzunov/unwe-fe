import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateReviewDto } from 'src/app/reviews/CreateReviewDto';
import { ReviewActions } from 'src/app/reviews/state';
import { IReviewState } from 'src/app/reviews/state/review.reducer';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent {
  @Input() userId!: string | undefined;
  @Input() itemId!: string | undefined;

  content = new FormControl('', [
    Validators.required,
    Validators.maxLength(500),
  ]);

  constructor(private store: Store<IReviewState>) {}

  submitHandler() {
    const content = this.content.value;

    if (this.userId && this.itemId && content) {
      const data: CreateReviewDto = {
        author: this.userId,
        product: this.itemId,
        content: this.content.value,
      };

      this.store.dispatch(ReviewActions.createReview({ data }));
      this.content.reset();
    }
  }
}
