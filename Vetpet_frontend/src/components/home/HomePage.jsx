import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";
import PlaceHolderContainer from "../ui/PlaceHolderContainer";
import Error from "../ui/Error";
import { randomValue } from "../../GenerateCardCode";
// import whyVetpet from "../ui/whyVetpet";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("cart_code") == null) {
      localStorage.setItem("cart_code", randomValue);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    api
      .get("/products")
      .then((res) => {
        const data = res.data;
        console.log(data);
        setProducts(data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      {error && <Error error={error} />}
      {loading && <PlaceHolderContainer />}
      {!loading && !error && <CardContainer products={products} />}

      {/* Changed section */}

      <div className="container my-5 bg-light">
        <div className="row align-items-center g-4">
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src="#"
              alt="VetPet"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-7">
            <h1 className="fw-bold mb-4">
              Why Choose{" "}
              <span className="bg-info px-3 py-1 rounded-pill">Vetpet</span>
            </h1>

            <p className="fs-5">
              VetPet Central connects pet owners with top-tier veterinarians
              nationwide. With our extensive Vet Clinic Directory, Access to
              Specialist, Appointment Scheduling, and Virtual Vet Consultations;
              VetPet Central can provide you and your pet with Flexible & Expert
              Care.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-3">
                <h5 className="fw-bold">1. To buy the pets</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  nostrum quisquam, aut impedit exercitationem vitae? Ipsam modi
                  molestias officia fuga eos quo? Nobis, dicta ipsam dolorum
                  voluptas et voluptatem nostrum.
                </p>
              </li>

              <li className="mb-3">
                <h5 className="fw-bold">2. To buy the pets</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  nostrum quisquam, aut impedit exercitationem vitae? Ipsam modi
                  molestias officia fuga eos quo? Nobis, dicta ipsam dolorum
                  voluptas et voluptatem nostrum.
                </p>
              </li>

              <li>
                <h5 className="fw-bold">3. To buy the pets</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  nostrum quisquam, aut impedit exercitationem vitae? Ipsam modi
                  molestias officia fuga eos quo? Nobis, dicta ipsam dolorum
                  voluptas et voluptatem nostrum.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next section */}
      <div className="bg-light py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold fs-2">Services</h1>
          <p className="mt-3 mb-0">
            Empower your pet care journey with our comprehensive suite of <br />
            services designed to support you and your furry companion.
          </p>
        </div>

        {/* Card Section */}
        <div className="d-flex flex-wrap justify-content-center align-items-stretch gap-4 px-3">
          {/* Card 1 */}
          <div
            className="card bg-light border rounded-4 p-3 shadow-sm d-flex flex-column"
            style={{
              width: "20rem",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div className="card-body text-center d-flex flex-column flex-grow-1">
              <h5 className="card-title fw-semibold mb-3">Buy Your Pet</h5>
              <p className="card-text flex-grow-1 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nam, officiis expedita debitis voluptates ad harum dicta
                voluptas tenetur ut. Tempore dolorem deserunt facilis dolore
                veritatis maxime, aliquid mollitia! Doloribus.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card bg-light border rounded-4 p-3 shadow-sm d-flex flex-column"
            style={{
              width: "20rem",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div className="card-body text-center d-flex flex-column flex-grow-1">
              <h5 className="card-title fw-semibold mb-3">Pet Grooming</h5>
              <p className="card-text flex-grow-1 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nam, officiis expedita debitis voluptates ad harum dicta
                voluptas tenetur ut. Tempore dolorem deserunt facilis dolore
                veritatis maxime, aliquid mollitia! Doloribus.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card bg-light border rounded-4 p-3 shadow-sm d-flex flex-column"
            style={{
              width: "20rem",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div className="card-body text-center d-flex flex-column flex-grow-1">
              <h5 className="card-title fw-semibold mb-3">Pet Care Service</h5>
              <p className="card-text flex-grow-1 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nam, officiis expedita debitis voluptates ad harum dicta
                voluptas tenetur ut. Tempore dolorem deserunt facilis dolore
                veritatis maxime, aliquid mollitia! Doloribus.
              </p>
            </div>
          </div>
          <div
            className="card bg-light border rounded-4 p-3 shadow-sm d-flex flex-column"
            style={{
              width: "20rem",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div className="card-body text-center d-flex flex-column flex-grow-1">
              <h5 className="card-title fw-semibold mb-3">Pet Care Service</h5>
              <p className="card-text flex-grow-1 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nam, officiis expedita debitis voluptates ad harum dicta
                voluptas tenetur ut. Tempore dolorem deserunt facilis dolore
                veritatis maxime, aliquid mollitia! Doloribus.
              </p>
            </div>
          </div>
          <div
            className="card bg-light border rounded-4 p-3 shadow-sm d-flex flex-column"
            style={{
              width: "20rem",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div className="card-body text-center d-flex flex-column flex-grow-1">
              <h5 className="card-title fw-semibold mb-3">Pet Care Service</h5>
              <p className="card-text flex-grow-1 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nam, officiis expedita debitis voluptates ad harum dicta
                voluptas tenetur ut. Tempore dolorem deserunt facilis dolore
                veritatis maxime, aliquid mollitia! Doloribus.
              </p>
            </div>
          </div>
          <div
            className="card bg-light border rounded-4 p-3 shadow-sm d-flex flex-column"
            style={{
              width: "20rem",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div className="card-body text-center d-flex flex-column flex-grow-1">
              <h5 className="card-title fw-semibold mb-3">Pet Care Service</h5>
              <p className="card-text flex-grow-1 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nam, officiis expedita debitis voluptates ad harum dicta
                voluptas tenetur ut. Tempore dolorem deserunt facilis dolore
                veritatis maxime, aliquid mollitia! Doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
