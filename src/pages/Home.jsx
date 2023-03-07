import AllItems from '../components/AllItems'
import Drinks from '../components/Drinks'
import Fruits from '../components/Fruits'
import Bakery from '../components/Bakery'
import { useOutletContext } from "react-router-dom";

const Home = (props) => {
  const [searchQuery, setSearchQuery] = useOutletContext();
  return (
    <div className="tabs-main">
    <h1>{props.query}</h1>
      <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="all-items-tab" data-bs-toggle="pill" data-bs-target="#all-items" type="button" role="tab" aria-controls="all-items" aria-selected="true">All items</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="drinks-tab" data-bs-toggle="pill" data-bs-target="#drinks" type="button" role="tab" aria-controls="drinks" aria-selected="false">Drinks</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="fruit-tab" data-bs-toggle="pill" data-bs-target="#fruit" type="button" role="tab" aria-controls="fruit" aria-selected="false">Fruit</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="bakery-tab" data-bs-toggle="pill" data-bs-target="#bakery" type="button" role="tab" aria-controls="bakery" aria-selected="false">Bakery</button>
          </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
          <AllItems query={searchQuery}/>
          <Drinks />
          <Fruits />
          <Bakery />
      </div>
  </div>
  )
}

export default Home;