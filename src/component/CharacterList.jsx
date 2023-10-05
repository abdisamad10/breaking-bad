import React from 'react'
import CharacterListItem from './CharacterListItem';
function CharacterList({items}) {
  return (
   <section className='cards'>
        {items && items.map((item) => (
        <CharacterListItem item={item} key={item.char_id} />
      ))}
   </section>
  )
}

export default CharacterList