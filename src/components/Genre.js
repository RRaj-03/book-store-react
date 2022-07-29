import React from 'react'
import Content from './Content'

const Genre = () => {
     const categories = ["tech","sports","physics","chem","math"]
  return (
    <>
    {categories.map((element,index)=>{
        return(
            <div key={element} className='container m-auto'>
                <Content search={element}/>
            </div>
        )
    })}
    </>
  )
}

export default Genre