export class Book {

  constructor(id:number,photoUrl: string, name: string, author: string, price: number)
  {
    this.id = id;
    this.price = price;
    this.name = name;
    this.author = author;
    this.photoUrl = photoUrl;
  }

  id: number;
  price: number;
  name: string;
  author: string;
  photoUrl: string;
}
