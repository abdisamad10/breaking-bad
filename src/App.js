
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Searchbar from './component/SearchBar';
import CharacterList from './component/CharacterList';
function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  cont  [query, setQuery] = useState("");

  useEffect(()=> {
    const fetchItems = async () => {
      const result = await axios.get(`/characters?name=${query}`);
      setItems(result.data);
      setLoading(false)
    };
    fetchItems();
  }, [query]);
  return (
    <div className="App">
     <h1>Hello world</h1>
     <Navbar />
     <Searchbar setQuery={(query) => setQuery(query)}/>
     <CharacterList />
    </div>
  );
}

export default App;
