import { products1 } from "../data/products1";
function CardCarousel() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4  g-4">
        {products1.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <img src={product.image} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title"> {product.description} </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
