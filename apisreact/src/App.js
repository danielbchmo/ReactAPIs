import './App.css';
import { useFetch } from './useFetch';

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div className="App">
      <h1>Fetch like a Pro</h1>

       <button onClick={handleCancelRequest}>Cancel Request</button>
       <ul className="card">
         {error && <li>Error: {error}</li>}
         {loading && <li>Loading...</li>}
         {data?.map((item) => (
           <li key={item.id}>{item.title}</li>
         ))}
       </ul>
     </div>
   );
}

export default App;
