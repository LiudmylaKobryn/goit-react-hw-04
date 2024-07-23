import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === "") return;

    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchImages(query);

        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ImageGallery items={data} />
      {isLoading && <h1>Loading data...</h1>}
    </>
  );
}

export default App;
