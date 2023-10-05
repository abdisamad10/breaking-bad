import React, { useState } from 'react'

function SearchBar(setQuery) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        setQuery(e.target.value);
    }
  return (
    <div>
        <section>
            <form>
                <input
                className='form-control'
                placeholder='Search Character'
                autoFocus
                name='search'
                type='text'
                value={text}
                onChange={handleChange}
                id='search'
                />
            </form>
        </section>
    </div>
  )
}

export default SearchBar