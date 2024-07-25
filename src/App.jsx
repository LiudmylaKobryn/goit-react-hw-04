import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query.trim() === "") return;

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchImages(query, page);

        setData((prev) => [...prev, ...response]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ImageGallery items={data} />
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  );
}

export default App;
