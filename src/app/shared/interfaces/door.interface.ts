export interface IDoor {
  _id: string;
  category: 'входна врата' | 'интериорна врата';
  title: string;
  manufacturer: string;
  description: string;
  price: number;
  imgUrl: string;
  rating: number;
}
