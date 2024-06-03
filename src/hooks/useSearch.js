import { useEffect, useState } from "react";

const useSearch = (data, searchQuery) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = data.filter(
      (item) => item.title.toLowerCase().includes(query) || item.genre.toLowerCase().includes(query),
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

  return filteredData;
};

export default useSearch;
