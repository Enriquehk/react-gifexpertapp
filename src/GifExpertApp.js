import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['Naruto']);

//   const handleAdd = () => {
//     // setCategories( [...categories, 'Hunter X Hunter']);
//     setCategories( cats => [...cats, 'Hunter X Hunter']);
//   }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
            {
                categories.map(category => (
                    <GifGrid 
                      key={category}
                      category={category}
                    />
                ))
            }
        </ol>
    </>
  )
}

