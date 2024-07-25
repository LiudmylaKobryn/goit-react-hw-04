const LoadMoreBtn = ({ setPage, page }) => {
  return (
    <div>
      <button type="button" onClick={() => setPage((prev) => prev + 1)}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
