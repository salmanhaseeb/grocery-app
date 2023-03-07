import { useState, useEffect } from "react";
import ProductCard from './ProductCard'

const API_URL = 'https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=drinks'

const Drinks = () => {

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, [])


  return (
    <div className="tab-pane fade" id="drinks" role="tabpanel" aria-labelledby="drinks-tab">
        <h3 className="trending-items mb-5">Trending Items</h3>
        <div className="box-main d-flex flex-row flex-wrap">
            {
              products.length > 0 ? (
                  products.map((product) => {
                    return (
                      <ProductCard product={product}/>  
                    )})
                
              ) : (
                <div>No products available</div>
              )
            }
        </div>
    </div>
  );
}

export default Drinks;
