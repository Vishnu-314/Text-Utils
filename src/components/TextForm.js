import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("clicked UP")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase",'success')
    }

    const handleLoClick=()=>{
        console.log("clicked UP")
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase",'success')
    }

    const handleCapClick=()=>{
        console.log({text})
        let newText=text.split(" ")
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i][0].toUpperCase() + newText[i].substr(1);
        } 
        let cap=newText.join(" ")
        setText(cap)
        console.log(cap)
        props.showAlert("Text Capitalized",'success')
    }

    const handleClear=()=>{
        let newtext='';
        setText(newtext)
        props.showAlert("Text Cleared",'success')
    }

    const handleOnchange=(e)=>{
        setText(e.target.value)
    }

    

    const [text, setText] = useState("");
  return (
    <> 
    <div>
        <div className="mb-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>{props.heading}</h2>
        
        <textarea className="form-control"  style={{color:props.mode==="dark"?"white":"black", backgroundColor:props.mode==="dark"?"#042743":"white"}} value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" ></textarea>
        
        </div>

        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Conert to Uppercase</button>

        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Conert to Lowercase</button>

        <button className='btn btn-primary mx-1' onClick={handleCapClick}>Conert to Capatalize</button>

        <button className='btn btn-primary mx-1' onClick={handleClear}>Click To Clear</button>
    </div>

    <div className='container my-3' style={{color:props.mode==="dark"?"white":"black"}} >
        <h2 >Your text Summary</h2>
        <p>words {text.split(" ").length>0?(text.split(" ").length)-1:0} and charchters {text.length}</p>
        <p>{.008*text.split(" ").length} min to read </p>
        <h2></h2>
    </div>

    </>
    
  )
}
