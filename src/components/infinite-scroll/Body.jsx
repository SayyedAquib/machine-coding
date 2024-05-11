import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Body = () => {
  const [products, setProducts] = useState([]);

  const Products_API = "https://dummyjson.com/products";

  const fetchProducts = async () => {
    try {
      const response = await fetch(Products_API);
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
      const json = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...json.products]);
    } catch (error) {
      console.error("Failed to fetch memes:", error);
    }
  };

  const handleScroll = () => {
    // scrollY - how much I have scrolled
    // innerHeight - heigh of the window (visible section)
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Body;
