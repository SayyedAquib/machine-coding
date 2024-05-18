import React, { useEffect, useState } from "react";
import QueryList from "./QueryList";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showQueryList, setShowQueryList] = useState(false);
  const [cache, setCache] = useState({});

  const API =
    "http://suggestqueries.google.com/complete/search?client=firefox&q=";

  const fetchData = async () => {
    if (cache[searchQuery]) {
      setSearchList(cache[searchQuery]);
    } else {
      const response = await fetch(`${API}${searchQuery}`);
      const json = await response.json();
      setSearchList(json[1]);
      console.log("API call - " + searchQuery);
      setCache((prevCache) => ({ ...prevCache, [searchQuery]: json[1] }));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="w-full h-screen flex flex-col items-center list-none">
      <h1 className="my-5 font-semibold text-2xl">
        Autocomplete & Search Bar
      </h1>
      <input
        className="p-2 px-5 w-1/3 rounded-full text-lg border-2 border-black focus:outline-none focus:border-blue-500"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowQueryList(true)}
        onBlur={() => setShowQueryList(false)}
      />
      {showQueryList &&
        searchQuery &&
        searchList.map((item, index) => (
          <QueryList key={index} setData={setSearchQuery} data={item} />
        ))}
    </div>
  );
};

export default SearchBar;
