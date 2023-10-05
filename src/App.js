

import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Searchbar from './component/SearchBar';
import CharacterList from './component/CharacterList';
import axios from './component/api';
import Spinner from './component/Spinner';

function App() {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios.get(`/characters?name=${query}`);
      setItems(results.data);
      setLoading(false);
      console.log({ results });
    };
    fetchItems();
  }, [query]);
  return (
    <div className="App">
     <Navbar />
     <Searchbar setQuery={(query) => setQuery(query)}/>
     {loading ? <Spinner /> :   <CharacterList items={items}/>} 
   
    </div>
  );
}

export default App;
