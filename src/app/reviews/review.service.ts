import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IReview } from '../shared/interfaces/review.interface';
import { CreateReviewDto } from './CreateReviewDto';

const RESOURCE_URL = environment.API_URL + 'reviews';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  review!: IReview;

  constructor(private http: HttpClient) {}

  getAllReviews() {
    return this.http.get<IReview[] | []>(RESOURCE_URL);
  }

  getUserReviews() {
    return this.http.get<IReview[] | []>(`${RESOURCE_URL}/my-reviews`);
  }

  getItemReviews(itemId: string) {
    return this.http.get<IReview[] | []>(
      `${RESOURCE_URL}/item-reviews/${itemId}`
    );
  }

  createReview(data: CreateReviewDto) {
    try {
      return this.http.post<IReview>(RESOURCE_URL, data);
    } catch (error) {
      console.log(error);
      return this.http.post<IReview>(RESOURCE_URL, data);

    }
  }

  deleteReview(reviewId: string) {
    return this.http.delete<IReview>(`${RESOURCE_URL}/${reviewId}`);
  }
}
