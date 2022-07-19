import React from 'react'
import Content from './Content'

const Genre = () => {
     const categories = ["tech","sports","physics","chem","math"]
  return (
    <>
    {categories.map(element=>{
        return(
            <div key={element}>
                <Content search={element}/>
            </div>
        )
    })}
    </>
  )
}

export default Genre