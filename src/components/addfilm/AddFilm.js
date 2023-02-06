import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddFilm.css'

function AddFilm({add, movies}) {
//     const [isDone,setisDone]=useState(false)
//   const add=()=>{
//     setisDone({isDone :!isDone})
//   }

  const [title,setTitle]=useState('')
  const [cover,setCover]=useState('')
  const [description,setDescription]=useState('')
  const [date,setDate]=useState('')
  const [trailer,setTrailer]=useState('')
  const [rate, setRate]=useState('')


  const handelSubmit=(e)=>{
    e.preventDefault();
    
    
    if (cover&&title&&rate&&date&&trailer&&description){
        add(cover, title, rate, date, trailer, description);
        handleClose()
    }
    else{alert("add information" )}
    
    
    
};
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <center>
      <Button className='bts'  variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
    </center>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
          
          <h4>Title</h4>
        <form action=''onSubmit={handelSubmit}>
          
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
         
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" type='Submit' onClick={handleClose}>
            Add new movie
          </Button>
        </form>
       
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddFilm;