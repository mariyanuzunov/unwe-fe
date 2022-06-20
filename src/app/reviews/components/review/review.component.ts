import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IReview } from 'src/app/shared/interfaces/review.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() review!: IReview;
  @Output() deleteReview = new EventEmitter();
}
