import React, { useState } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const renderProducts = () => {
    return products.map((product) => (
      <div className="col mb-5" key={product.id}>
        <div className="card h-100">
          <img className="card-img-top" src={product.image} alt={product.name} />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{product.name}</h5>
              <span>{product.price}</span>
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {isItemInCart(product) ? (
                <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product)}>
                  Remove from Cart
                </button>
              ) : (
                <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const isItemInCart = (item) => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };

  const products = [
    {
      id: 1,
      name: "Fancy Product 1",
      price: "$40.00 - $80.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id: 2,
      name: "Special Item",
      price: "$20.00 $18.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        id: 2,
        name: "Special Item",
        price: "$20.00 $18.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },{
        id: 3,
        name: "Sale Item",
        price: "$50.00 $25.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },{
        id: 4,
        name: "Popular Item",
        price: "$40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },{
        id: 5,
        name: "Sale Item",
        price: "$50.00 $25.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },
      {
        id: 6,
        name: "Fancy Product",
        price: "$120.00 - $280.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },
      {
        id: 7,
        name: "Special Item",
        price: "$20.00 $18.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      },
      

  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        {/* Header content */}
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {renderProducts()}
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Shop;
