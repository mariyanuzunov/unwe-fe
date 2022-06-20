export interface IReview {
  _id: string;
  author: { _id: string; firstName: string; lastName: string };
  product: { _id: string; title: string; imgUrl: string };
  content: string;
  createdAt: string;
}
