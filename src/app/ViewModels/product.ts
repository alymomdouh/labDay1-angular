import { IProduct } from "./iproduct";

export class Product implements IProduct {
    constructor(public ID :number,public Name :string,public Quantity :number,public Price :number,
      public Img :string,public CateogryID:Number){ }
}
