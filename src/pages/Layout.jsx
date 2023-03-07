import Wishlist from '../img/Wishlist.png'
import Avatar from '../img/Avatar-1.png'
import Cart from '../img/Cart.png'
import FilterIcon from '../img/filter-Icon.png'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

const Layout = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    
  }

  return (
    <div className="container py-5">
        <div className="row header-main mb-5">
            <div className="col-md-9 col-sm-12">
                <div className="d-flex flex-column flex-sm-row align-items-center">
                    <Link style={{textDecoration: 'none'}} to="/"><h3 className="groceries mb-0 me-4">GROCERIES</h3></Link>
                    <div className="search-main px-4 py-1 w-100 d-flex flex-row align-items-center">
                      <input 
                        placeholder="Search" 
                        className="search-input border-0 w-100 bg-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                      <img 
                        src={FilterIcon} 
                        width="33"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-12">
                <ul className="nav-icon-list p-0 m-0 d-flex flex-column flex-sm-row justify-content-evenly align-items-center">
                    <li className=""><img src={Wishlist} width="69" /></li>
                    <li className=""><img src={Avatar} width="58" /></li>
                    <li className=""><Link to="/checkout"><img src={Cart} width="69" /></Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>
            </div>
        </div>

        <Outlet context={[searchQuery, setSearchQuery]}/>
    </div>
  )
}

export default Layout;