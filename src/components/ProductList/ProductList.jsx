import React from 'react';
import "../ProductList/ProductList.css";
import Product from './Product';
import c19 from "../../img/covid-19 tracker.png";
import algogram from "../../img/algogram.png";
import restaurant from "../../img/restaurant.png";
import coffeshop from "../../img/coffeshop.png";
import rehashcraft from "../../img/rehashcraft.png";
import rps from "../../img/rps.png";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-header">Create & Inspire. It's Shazid</h1>
                <p className="pl-desc">These are some of my projects using React js and JavaScript! I believe technology can change the world! </p>
            </div>
             <div className="pl-list">
                 <Product id="1" src={c19} link="https://covid-19-tracker-14.web.app/"/>
                 <Product id="2" src={algogram} link="https://shazidmorshed14.github.io/Algogram/"/>
                 <Product id="3" src={restaurant} link=""/>
                 <Product id="4" src={coffeshop} link="https://shazidmorshed14.github.io/coffe_shop_project/"/>
                 <Product id="5" src={rehashcraft} link="https://shazidmorshed14.github.io/RehashCraft/"/>
                 <Product id="6" src={rps} link="https://shazidmorshed14.github.io/RPS/"/>
                  

             </div>
        </div>
    );
};

export default ProductList;