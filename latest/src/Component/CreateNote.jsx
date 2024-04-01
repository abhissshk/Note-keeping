import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CreateNote(props) {
const [expand,setexpand]=useState(false);

  const [note, setnote] = useState({
    content: "",
    title: "",
  });

  function InputEvent(event) {
    const { name, value } = event.target;

    setnote((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
    console.log(note);
  }

  function addevent() {
    props.passnote(note);
    setnote({
      content: "",
      title: "",
    });
  }

  function expandit(){
    setexpand(true)
  }

  return (
    <div className="main_note">
      <form>

     { expand?
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="TITLE"
          autoComplete="off"
          onChange={InputEvent}
         
        />:null}

        <textarea
          name="content"
          value={note.content}
          cols=""
          rows=""
          placeholder="write a note....."
          onChange={InputEvent}
          onClick={expandit}
          
        ></textarea>

        {expand?
        <Button onClick={addevent}>
          <AddIcon className="plus_sign" />
        </Button>:null}
      </form>
    </div>
  );
}

export default CreateNote;
