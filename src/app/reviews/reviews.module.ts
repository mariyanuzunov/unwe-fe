import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { reviewReducer } from './state/review.reducer';
import { ReviewEffects } from './state/review.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReviewComponent } from './components/review/review.component';
import { MaterialModule } from '../material.module';
import { CoreModule } from '../core/core.module';
import { ReviewsListComponent } from './containers/reviews-list/reviews-list.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReviewComponent, ReviewsListComponent, AddReviewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    StoreModule.forFeature({
      name: 'review',
      reducer: reviewReducer,
    }),
    EffectsModule.forFeature([ReviewEffects]),
  ],
  exports: [ReviewsListComponent, AddReviewComponent],
})
export class ReviewsModule {}
