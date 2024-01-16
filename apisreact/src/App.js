/*import './App.css';

BEGINING METHOD

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

export default App;*/

//PROFESSIONAL METHOD
import { fetchData } from "./fetchData";
import { Suspense } from "react";

const apiData = fetchData("https://jsonplaceholder.typicode.com/todos");

function App(){ 
  const data = apiData.read();

  return (
    <div>
      <h1>API'S React</h1>
      <Suspense>
        <ul>
          {data?.map((user) => (
            <li key={user.id}> {user.name} </li>
          ))}
          
        </ul>
      </Suspense>
    </div>
  )
}

export default App;
