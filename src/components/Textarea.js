import React,{useState} from 'react'

export default function Textarea(props) {
const[text,Usetext]=useState("")
const handleclick = ()=>{
    let newtext=text.toUpperCase();
    Usetext(newtext)
}
const handlechange = (event)=>{
    Usetext(event.target.value)
}
const handlelclick = ()=>{
    let new1=text.toLowerCase();
    Usetext(new1)
}
const handlellclick = ()=>{
    let n=text.split(/[ ]+/)
    Usetext(n.join(" "))
}

  return (
   
   
      
    <div className="container">
    <div className="mb-3">
    <h3 className="container my-3">Enter the text to analyze</h3>
    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
    <textarea className="form-control" value={text} id="exampleFormControlTextarea1"rows="7" style= {{backgroundColor : props.mode === 'light' ?'white' :'grey' }} onChange={handlechange}></textarea>
   
    <button type="button" className="btn btn-primary my-2"  onClick={handleclick}>Covert to Uppercase</button>
    <button type="button" className="btn btn-primary mx-1 my-2"  onClick={handlelclick}>Covert to Lowercase</button>
    <button type="button" className="btn btn-primary mx-1 my-2"  onClick={handlellclick}>Remove White Spaces</button>
    <div className="container my-3">
        <h3>Your text Summary </h3>
        <h6>{text.split(" ").length - 1} Words and {text.length} Chracters</h6>
        <h6>
            {0.008*text.split(" ").length - 0.008 } minutes needed to read the paragraph
        </h6>
        <h2>Preview</h2>
        <h6>{text.length > 0 ? text : "Enter the text to Preview"}</h6>
    </div>
    </div>        
    </div>


  )

  }
