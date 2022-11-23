import './App.css';

function App() {
  let itemsList = [{ image: "https://picsum.photos/300/200", name: "Fancy Product", rating: 5, old_price: 40, new_price: 30 }];

  return (
    <div className="project-container">
      <Header />
      <Ad />
      <div className="items-wrapper">
        {itemsList.map((item) => <ItemCard itemObj={item} />)}
      </div>
    </div>


  );
}



function Header() {

  let cart_count = 25;

  function showDropDown() {
    let menuEl = document.getElementById("drop-down-menu");
    menuEl.style.display = menuEl.style.display === "none" ? "block" : "none";
  }


  return (<div className='header'>

    <ul className='nav-menu'>
      <li className='nav-item'><a className='nav-link' href="#">Home</a></li>
      <li className='nav-item'><a className='nav-link' href="#">About</a></li>
      <li onClick={showDropDown} className='nav-item drop-down '><a className='nav-link drop-down-logo' href="#">Shop</a>
        <ul id="drop-down-menu" className='drop-down-menu drop-down-switch'>
          <li className='drop-down-item'><a href="" >All Products</a></li>
          <li className='drop-down-item'><a href="" >Popular Items</a></li>
          <li className='drop-down-item'><a href="" >New Arrivals</a></li>
        </ul>
      </li>
    </ul>

    <div className="cart">
      <span class="material-symbols-outlined">
        shopping_cart
      </span>Cart <span className='cart_count'>{cart_count}</span>
    </div>

  </div>
  );
}



function Ad() {
  return (
    <div className="add-container">
      <div className="content-wrapper">
        <h1>Shop in style</h1>
        <p>With this shop homepage template</p>
      </div>
    </div>
  );
}

function ItemCard({ itemObj }) {

  let { image, name, rating, old_price, new_price } = itemObj;

  console.log(image, name, rating, old_price, new_price);
  return (
    <div className="item-wrapper">
      <img src={image} alt="item-logo" />
      <div className="content-w">
        <h4 className='item-name'>{name}</h4>
        <div className='rating-w'>
          {/* <GetStar count={rating} /> */}
        </div>
        <p><span class="old-price">&#x20B9; {old_price}</span> - <span class="new-price">&#x20B9; {new_price}</span></p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

function GetStar({ count }) {

  var returnstar = [];
  for (var i = 0; i < (parseInt(count)); count++) {
    returnstar.push(<span class="material-symbols-outlined star-logo">
      star_rate
    </span>);
  }
  // console.log(returnstar);
  return ({ returnstar });
}
export default App;
