import { useEffect, useState } from "react";
import "./styles.css";

export default function () {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const responce = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await responce.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data please wait !</div>;
  }

  return (
    <div className="container">
      <div className="container-item">
        {products && products.length
          ? products.map((item) => (
              <div key={item.di} className="products">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <button onClick={() => setCount(count + 1)}>Load more products</button>
    </div>
  );
}
