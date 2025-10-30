import React, { useEffect, useState } from "react";
import api, { BASE_URL } from "../../api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("products/") // ✅ Adjust if your endpoint differs, e.g. 'product_list/'
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError("Failed to load products.");
        toast.error("Failed to load products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Loading products...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="text-center mb-4">Shop</h1>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                {/* Product image */}
                <img
                  className="card-img-top"
                  src={`${BASE_URL}${product.image}`}
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />

                {/* Product details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    ${product.price}
                  </div>
                </div>

                {/* Product actions */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link
                      className="btn btn-outline-dark mt-auto"
                      to={`/products/${product.slug}`} // ✅ links to ProductPage
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
