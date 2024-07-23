import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";

function App() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchImages("cat");
        setQuery(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery items={query} />
    </>
  );
}

export default App;
