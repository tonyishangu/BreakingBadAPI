import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Headers from './components/ui/Headers'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect (() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
      console.log(result.data)
    }
    fetchItems()
  },[query])

  return (
    <div className="container">
      <Headers />
      < Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
