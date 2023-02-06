import React, { useState } from 'react'
import './AddMovie.css'


const AddMovie = ({movies,ajou,}) => {

  const [isDone,setisDone]=useState(false)
  const add=()=>{
    setisDone({isDone :!isDone})
  }

  const [title,setTitle]=useState('')
  const [cover,setCover]=useState('')
  const [description,setDescription]=useState('')
  const [date,setDate]=useState('')
  const [trailer,setTrailer]=useState('')
  const [rate, setRate]=useState('')


  const handelSubmit=(e)=>{
    e.preventDefault();
    title.trim()=== "" ? alert("add new movie in the input"):
    title.ajou(title);
};

  return ( 
    <div className='AddMovie'>
      <button  onClick={add}>{isDone ?"Add movie":"Add movie"}</button>
       {isDone? (
        <div className='input'>
          <form action=''onSubmit={handelSubmit}>
          <h4>Title</h4>
          <input
           type="text"
           placeholder="Enter movie description"
           className='from-control'
           onChange={(e)=>setTitle(e.target.value)}
           value={title}
           >
            
          </input>
          <h4>Movie cover</h4>
          <input
           type="text"
           placeholder="Enter cover url"
           className='from-control'
           onChange={(e)=>setCover(e.target.value)}
           value={cover}>
          </input>
          <h4>Movie description</h4>
          <input
           type="text"
           placeholder="Enter movie description"
           className='from-control'
           onChange={(e)=>setDescription(e.target.value)}
           value={description}>
          </input>
          <h4>Realase date</h4>
          <input
           type="text"
           placeholder="Enter movie data"
           className='from-control'
           onChange={(e)=>setDate(e.target.value)}
           value={date}>
          </input>
          <h4>Movie trailer</h4>
          <input
           type="text"
           placeholder="Enter trailer url"
           className='from-control'
           onChange={(e)=>setTrailer(e.target.value)}
           value={trailer}>
          </input>
          <h4>Rating</h4>
          <input
           type="text"
           placeholder="0"
           className='from-control'
           onChange={(e)=>setRate(e.target.value)}
           value={rate}>
          </input>
          <div className='newmove'>
            <button type='Submit'>ADD new Movie</button>
            <hr></hr>
            <button>CLOSE</button>
          </div>
          </form>

        </div>): <></>
}

    </div>
      
  )
}

export default AddMovie