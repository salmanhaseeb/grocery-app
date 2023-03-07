const Checkout = () => {
  return (
    <div class="container py-5">
        <div class="row header-main mb-5">
            <div class="col-md-9 col-sm-12">
                <div class="d-flex flex-column flex-sm-row align-items-center">
                    <h3 class="groceries mb-0 me-4">GROCERIES</h3>
                    <div class="search-main px-4 py-1 w-100 d-flex flex-row align-items-center"><input placeholder="Search" class="search-input border-0 w-100 bg-transparent" /> <img src="./img/filter-Icon.png" width="33" /></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12">
                <ul class="nav-icon-list p-0 m-0 d-flex flex-column flex-sm-row justify-content-evenly align-items-center">
                    <li class=""><img src="./img/Wishlist.png" width="69" /></li>
                    <li class=""><img src="./img/Avatar-1.png" width="58" /></li>
                    <li class=""><img src="./img/Cart.png" width="69" /></li>
                </ul>
            </div>
        </div>
        <div class="tabs-main">
            <h3 class="trending-items mb-5">Checkout</h3>
            <div class="box-main d-flex flex-row flex-wrap">
                <div class="checkout-bar w-75 border-0 alert alert-warning alert-dismissible fade show pe-3  m-0 mb-4" role="alert">
                    <div class="d-flex flex-row justify-content-between row">
                        <div class="d-flex flex-row align-items-center col-7">
                            <img src="./img/mango.jpeg" width="80" alt="" class="me-4" />
                            <div>
                                <h5 class="box-product-heading mb_20px">Sweetest® Mango</h5>
                                <p class="box-product-detail mb-0">Product code: 239JU13</p>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="d-flex flex-row align-items-center mb_20px">
                                <img src="./img/Minus.png" alt="" />
                                <span class="mx-3">2</span>
                                <img src="./img/Plus.png" alt="" />
                            </div>
                            <p class="availability-status mb-0">Only 5 left</p>
                        </div>
                        <div class="col-2"><p class="bar-product-price mb-0">£1.70</p></div>
                        <div class="col-1 text-end">
                            <button type="button" class="btn-close position-relative" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                <div class="checkout-bar w-75 border-0 alert alert-warning alert-dismissible fade show pe-3  m-0 mb-4" role="alert">
                    <div class="d-flex flex-row justify-content-between row">
                        <div class="d-flex flex-row align-items-center col-7">
                            <img src="./img/mango.jpeg" width="80" alt="" class="me-4" />
                            <div>
                                <h5 class="box-product-heading mb_20px">Sweetest® Mango</h5>
                                <p class="box-product-detail mb-0">Product code: 239JU13</p>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="d-flex flex-row align-items-center mb_20px">
                                <img src="./img/Minus.png" alt="" />
                                <span class="mx-3">2</span>
                                <img src="./img/Plus.png" alt="" />
                            </div>
                            {/* <p class="availability-status mb-0">Only 5 left</p> */}
                        </div>
                        <div class="col-2"><p class="bar-product-price mb-0">£1.70</p></div>
                        <div class="col-1 text-end">
                            <button type="button" class="btn-close position-relative" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="w-75" />
            <div class="w-75">
                <div class="row py-3">
                    <div class="col-6"></div>
                    <div class="col"><h5 class="box-product-heading mb-0">Subtotal</h5></div>
                    <div class="col"><p class="checkout-final-amount mb-0">£4.70</p></div>
                    <div class="col"></div>
                </div>
            </div>
            <hr class="w-75" />
            <div class="w-75">
                <div class="row py-3">
                    <div class="col-6"></div>
                    <div class="col"><h5 class="box-product-heading mb-0">Discount</h5></div>
                    <div class="col"><p class="checkout-final-amount mb-0">£0.00</p></div>
                    <div class="col"></div>
                </div>
            </div>
            <hr class="w-75" />
            <div class="w-75">
                <div class="row py-3">
                    <div class="col-6"></div>
                    <div class="col"><h5 class="box-product-heading mb-0">Total</h5></div>
                    <div class="col"><p class="checkout-final-amount mb-0">£4.70</p></div>
                    <div class="col text-end"><button class="checkout-btn btn px-4">Checkout</button></div>
                </div>
            </div>
            <hr class="w-75" />
        </div>
    </div>
  )
}