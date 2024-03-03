import { products2 } from "../data/products2";
import "./cards.css";
function Card() {
  return (
    <div className="container">
      <h1> BEST SELLERS </h1>
      <div className="row row-cols-1 row-cols-md-4  g-4">
        {products2.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <img src={product.image} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  {" "}
                  {product.title}{" "}
                  <span class="badge bg-secondary">{product.price}</span>
                  {/* <div className="priceClass">{product.price}</div>{" "} */}
                </h4>
                <p className="card-text">{product.description}</p>
                <button type="button" class="btn btn-success">
                  {" "}
                  Add to cart{" "}
                </button>
                <button type="button" class="btn btn-danger">
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
