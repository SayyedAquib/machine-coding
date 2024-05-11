import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "../shimmer-ui/Shimmer";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const Products_API = "https://dummyjson.com/products";

  const fetchProducts = async () => {
    try {
      setShowShimmer(true);
      const response = await fetch(Products_API);
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
      const json = await response.json();
      setShowShimmer(false);
      setProducts((prevProducts) => [...prevProducts, ...json.products]);
    } catch (error) {
      console.error("Failed to fetch memes:", error);
      setShowShimmer(false);
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

      {showShimmer && <Shimmer />}

    </div>
  );
};

export default Body;
