export const fetchData = (page, pageSize) => {
    const totalItems = 100;
    const data = Array.from({ length: pageSize }, (_, index) => ({
      id: page * pageSize + index + 1,
      title: `Item ${(page - 1) * pageSize + index + 1}`,
    }));
    const hasMore = page * pageSize < totalItems;
    return { data, hasMore };
  };
  