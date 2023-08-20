import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const data = await response.json();
  return data;
};

const DataFetcher = () => {
  const { data, isLoading, isError } = useQuery('exampleQueryKey', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>Example Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;