
import { useState } from 'react'
import './App.css'
import CreateNote from './Component/CreateNote'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Note from './Component/Note'

function App() {

  const[additem,setadditem]=useState([]);

  function addnote(note){
    // alert("i am clicked")

    setadditem((olddata)=>{
      return[...olddata,note]
    })
  }
function ondelete(id){
  setadditem((olddata)=>{
     return olddata.filter((currndata,index)=>{
      return index!==id
    })
  })
}


  return (
    <>
      <Header/>
  
      <CreateNote passnote={addnote}/>
  

      {
        additem.map((val,index)=>{
          return(
            <Note 
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteitem={ondelete}
            />
          )
        })
      }
      <Footer/>
    </>
  )
}

export default App
