import React, { Component } from "react";
import {ProductList} from "./ProductList";
import {CategorieNavigation} from "./CategorieNavigation";


export class Shop extends Component{
    render(){
        return  <div className="constainer-fluid">
                    <div className="row">
                        <div className="col bg-dark text-white">
                            <div className="navbar-brand">SPORTS STORE</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 p-2">
                            <CategorieNavigation baseUrl="/shop/products"
                                  categories={this.props.categories}/>
                        </div>
                        <div className="col-9 p-2">
                            <ProductList  products={this.props.products}/>
                        </div>
                    </div>
                </div>
    }
}