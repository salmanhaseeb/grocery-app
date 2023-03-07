import heartIcon from '../img/heart-Icon.png'
import buyButton from '../img/buy-button.png'

const ProductCard = (props) => {
  return (
    <div className="row box">
      <div className="col-7 d-flex justify-content-center align-items-center">
          <img src={props.product.img} width="200" alt="" />
      </div>
      <div className="col product-details">
          <h5 className="box-product-heading">{props.product.name}</h5>
          <p className="box-product-detail">{props.product.description}</p>
          <p className="availability-status">{props.product.available >= 10 ? "Available" : "Only 5 left"}</p>
          <div className="d-flex flex-row justify-content-between align-items-center">
              <p className="product-price mb-0">{props.product.price}</p>
              <div>
                  <img className="me-3" src={buyButton} width="28" alt="" />
                  <img src={heartIcon} width="32" alt="" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProductCard;