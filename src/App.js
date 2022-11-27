import { useState } from 'react';
import './App.css';

function App() {
  let itemsList = [{ itemId: 1, image: "https://picsum.photos/300/200", name: "Fancy Product", rating: 5, old_price: 500, new_price: 10 },
  { itemId: 2, image: "https://picsum.photos/300/200", name: "Fancy Product2", rating: 3.1, old_price: 500, new_price: 20 },
  { itemId: 3, image: "https://picsum.photos/300/200", name: "Fancy Product3", rating: 2.5, old_price: 500, new_price: 30 },
  { itemId: 4, image: "https://picsum.photos/300/200", name: "Fancy Product4", rating: 5, old_price: 500, new_price: 40 },
  { itemId: 5, image: "https://picsum.photos/300/200", name: "Fancy Product5", rating: 1.9, old_price: 500, new_price: 50 },
  { itemId: 6, image: "https://picsum.photos/300/200", name: "Fancy Product6", rating: 4.7, old_price: 500, new_price: 60 },
  { itemId: 7, image: "https://picsum.photos/300/200", name: "Fancy Product7", rating: 2.5, old_price: 500, new_price: 30 },
  { itemId: 8, image: "https://picsum.photos/300/200", name: "Fancy Product8", rating: 5, old_price: 500, new_price: 40 },
  { itemId: 9, image: "https://picsum.photos/300/200", name: "Fancy Product9", rating: 1.9, old_price: 500, new_price: 50 },
  { itemId: 10, image: "https://picsum.photos/300/200", name: "Fancy Product10", rating: 4.7, old_price: 500, new_price: 60 }];

  const [cartList, setCartList] = useState([]);


  return (
    <div className="project-container">
      <Header cartList={cartList} />
      <Ad />
      <div className="items-wrapper">
        {itemsList.map((item, index) => <ItemCard index={index} itemObj={item} cartList={cartList} setCartList={setCartList} />)}
      </div>
    </div>


  );
}



function Header({ cartList }) {

  const cart_count = cartList.length;
  const [showCart, setShowCart] = useState(false);

  const cart_list_style = showCart ? { display: "block" } : { display: "none" };

  function showDropDown() {
    let menuEl = document.getElementById("drop-down-menu");
    menuEl.style.display = menuEl.style.display === "none" ? "block" : "none";
  }


  function ToggleCart() {
    setShowCart(!showCart);
  }

  return (<div className='header'>

    <ul className='nav-menu'>
      <li className='nav-item'><a className='nav-link' href="#">Home</a></li>
      <li className='nav-item'><a className='nav-link' href="#">About</a></li>
      <li onClick={showDropDown} className='nav-item drop-down '><a className='nav-link drop-down-logo' href="#">Shop</a>
        <ul id="drop-down-menu" className='drop-down-menu drop-down-switch'>
          <li className='drop-down-item'><a href="#" >All Products</a></li>
          <li className='drop-down-item'><a href="#" >Popular Items</a></li>
          <li className='drop-down-item'><a href="#" >New Arrivals</a></li>
        </ul>
      </li>
    </ul>

    <div onClick={ToggleCart} className="cart">
      <span className="material-symbols-outlined">
        shopping_cart
      </span>Cart <span className='cart_count'>{cart_count}</span>
    </div>

    <div id="cart-list" style={cart_list_style} className="cart-list">
      <h3 className="cart-close-icon" onClick={ToggleCart}>X</h3>
      <div className="cart-items-wrapper">
        {cartList.map((itemObj) => <CartItem item={itemObj} />)}
        <button className='check-out-btn'>Checkout {cartList.length} items</button>
      </div>
    </div>

  </div>

  );
}

function CartItem({ item }) {
  console.log(item);
  return (
    <div className="cart-item-wrapper">
      <img className='cart-item-logo' src={item.image} alt="cart-item" />
      <div className="content">
        <h3>{item.name}</h3>
        <h4>&#x20B9; {item.new_price}</h4>
      </div>

    </div>
  );
}


function Ad() {
  return (
    <div className="ad-container">
      <div className="content-wrapper">
        <h1>Shop in style</h1>
        <p>With this shop homepage template</p>
      </div>
    </div>
  );
}

function ItemCard({ itemObj, index, cartList, setCartList }) {

  let { image, name, rating, old_price, new_price } = itemObj;
  // console.log(image, name, rating, old_price, new_price);
  const [cartBtn, setCartBtn] = useState(true);

  function AddToCartList(newItemObj) {
    setCartList([...cartList, newItemObj]);
    // console.log(cartList);

  }

  function RemoveFromCartList(removeObj) {
    const newFilteredList = cartList.filter((obj) => obj.itemId !== removeObj.itemId);
    setCartList([...newFilteredList]);

    // console.log("remove item is", removeObj);

  }

  return (
    <div key={index} className="item-wrapper">
      <img src={image} alt="item-logo" />
      <div className="content-w">
        <h4 className='item-name'>{name}</h4>
        <div className='rating-w'>
          <StarRating count={rating} />
        </div>
        <p><span className="old-price">&#x20B9; {old_price}</span> - <span className="new-price">&#x20B9; {new_price}</span></p>
        {cartBtn ? <button onClick={() => { setCartBtn(!cartBtn); AddToCartList(itemObj); }} className='cart-btn add-cart-button'>Add to cart</button>
          : <button onClick={() => { setCartBtn(!cartBtn); RemoveFromCartList(itemObj) }} className='cart-btn remove-cart-button'>Remove from cart</button>}
      </div>
    </div >
  );
}

function StarRating({ count }) {

  return (<div>
    {[...Array(Math.floor(count))].map((a, index) => (<span key={index} className="material-symbols-outlined star-logo">star_rate</span>))}
  </div>
  );

}
export default App;
