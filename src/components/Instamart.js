import React, { useState } from 'react'


const Section=({title,description,isVisible,setIsVisible})=>{
  //const [isVisible,setIsVisible]=useState(false)
  return(
    <div className='border border-black p-2 m-2'>
      <h2>{title}</h2>{
       isVisible?(       <div>  <button onClick={()=>setIsVisible(null)}>hide</button>
       <p>{description} </p></div>):(
        <button onClick={()=>setIsVisible(true)}>show</button>
  )
      }
    </div>
  )
}

function Instamart() {
  const [visibleSection,setVisibleSection]=useState("about")
  return (
    <div>
      <h1 className='text-3xl p-2 m-2 font-bold'>Instamart</h1>
      <Section title={"This is the page for about instamart"} description={"This is the description page for about page"}
       isVisible={visibleSection==='about'}
       setIsVisible={(isVisible)=>setVisibleSection(isVisible?'about':null)}
    />
      <Section title={"This is the page for Team instamart"} description={"This is the description page for Team page"}
                 isVisible={visibleSection==='team'}
                 setIsVisible={(isVisible)=>setVisibleSection(isVisible?'team':null)}   
                    />
                    
      <Section title={"This is the page for career instamart"} description={"This is the description page for career page"}
             isVisible={visibleSection==='career'}
             setIsVisible={(isVisible)=>setVisibleSection(isVisible?'career':null)}
             />

    </div>
  )
}

export default Instamart
