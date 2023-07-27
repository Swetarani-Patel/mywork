function Pagination({ page,limit,totalTodo, setPage }) {
  
  const handleNextPage = async () => {
    await setPage(page + 1);
  };

  const handlePrevPage = async () => {
    await setPage(page - 1);
  };
 
   
  const totalPages = Math.ceil(totalTodo / limit);  

  return (
    <div data-testid="pagination" className="pagination">
      <button disabled={page === 1} onClick={handlePrevPage}>
        PREVIOUS
      </button>
      <div>{page}</div>
      <button onClick={handleNextPage} disabled={page===totalPages}>NEXT</button>
    </div>
  );
}

export default Pagination;