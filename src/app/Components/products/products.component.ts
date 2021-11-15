import { Component, OnInit ,Input, ViewChild } from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Product } from 'src/app/ViewModels/product';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //constructor(public store: Store,public Discount:DiscountOffers,public ClientName:string,public ProductList:IProduct[]) { }
//@ViewChild('myname') inputName:any; // accessing the reference element
  store: Store;
  Discount:DiscountOffers;
  public ClientName:string="";
  ProductList:IProduct[];
  public newProductList:IProduct[];
  //x:number=0;
  showtable:Boolean=true;
public categories:ICategory[]=[{ID:1,Name:"cat1"},{ID:2,Name:"cat2"},{ID:3,Name:"cat3"},{ID:4,Name:"cat4"}];
  constructor()
    {
        this.store=new Store("new Store name","logo.png",["branch1","branch2"]);
        this.Discount=DiscountOffers['15%'];
        this.ClientName="new Client Name";
        this.ProductList=[
                    new Product(1,"p1 name",1,11,"prod img",1),new Product(2,"p name",11,11,"prod img",1),
                    new Product(3,"p3 name",1,11,"prod img3",2),new Product(4,"p4 name",11,11,"prod img",2),
                    new Product(5,"p5 name",11,11,"prod img5",3),new Product(6,"p6 name",1,11,"prod img6",4),
                    new Product(7,"p71 name",0,11,"prod img",1),new Product(8,"p8 name",0,11,"prod img",1),
                        ];
        this.newProductList=this.ProductList.filter(i=>i.CateogryID==1);
        //this.x=this.ProductList.length;
    }
  ngOnInit() { }

    onOptionsSelected(value:string){
      console.log("the selected value is " + value);
      if(!isNaN(Number(value))&&Number(value)>=1){
        console.log("before"+this.ProductList.length)
          this.newProductList=this.ProductList.filter(i=>  i.CateogryID==Number(value) );
          console.log("the selected value is after convert " +this.ProductList.length);
          //window.location.reload()
          //this.x=this.ProductList.length;//Number(value);
      }
    }
    ToggleTable(){
      this.showtable=!this.showtable;
    }
    increasQuantity(product: Product){
      //var pro=this.newProductList.find(i=>i.ID==Number("2"));
      if(product.Quantity>0){
          product.Quantity--;
      }

    }
}
