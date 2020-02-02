export class Book {

  constructor(id: number, price: number, name: string, author: string, photoUrl: string)
  {
    this.id = id;
    this.price = price;
    this.name = name;
    this.authorName = author;
    this.photoUrl = photoUrl;
  }

  id: number;
  price: number;
  name: string;
  authorName: string;
  photoUrl: string;
}
