import React from 'react'

const StartRating = ({rate, handeleRating}) => {
    function stars(rate){
    let star = [];
    for (let i=1; i<=5; i++){
    if (i<=rate){
        star.push(<span onClick={()=>handeleRating(i)} style={{color:"gold", fontSize:"20px", cursor:"pointer"}}>★</span>);
         } else
     star.push (<span onClick={()=>handeleRating(i)} style={{color:"black", fontSize:"20px",cursor:"pointer"}}>★</span>);
    }
    return star

    }
  return (
    <div>{stars(rate)}</div>
  )
}

export default StartRating