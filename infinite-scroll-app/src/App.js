import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchData } from './data';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMoreData = () => {
    const pageSize = 20;
    const { data, hasMore } = fetchData(page, pageSize);
    setItems((prevItems) => [...prevItems, ...data]);
    setHasMore(hasMore);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <h1>Infinite Scroll Demo</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>All items loaded</p>}
      >
        {items.map((item) => (
          <div key={item.id} className="item">
            {item.title}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
