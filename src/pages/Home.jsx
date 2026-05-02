import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);

        // pick 4 random for carousel
        const shuffled = [...data.products].sort(() => 0.5 - Math.random());
        setBanners(shuffled.slice(0, 4));
      });
  }, []);

  // carousel auto slide
  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners]);

  return (
    <div>

      {/* 🔥 CAROUSEL */}
      {banners.length > 0 && (
        <div className="carousel">
          <Link to={`/product/${banners[current].id}`}>
            <img src={banners[current].images[0]} alt="" />
          </Link>

          <button
            className="prev"
            onClick={() =>
              setCurrent(current === 0 ? banners.length - 1 : current - 1)
            }
          >
            ◀
          </button>

          <button
            className="next"
            onClick={() =>
              setCurrent((current + 1) % banners.length)
            }
          >
            ▶
          </button>
        </div>
      )}

      {/* 🔥 ALL PRODUCTS */}
      <div className="container">
        <h2>All Products</h2>

        <div className="grid">
          {products.map(p => (
            <div className="card" key={p.id}>
              <img src={p.thumbnail} alt="" />
              <h3>{p.title}</h3>
              <p>₹{p.price}</p>

              <Link to={`/product/${p.id}`}>
                View
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;