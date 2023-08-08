import { useState } from "react";
import "./Playbutton.css"

function Playbutton({children,onPlay,onPause,msg}){

    const [status,setStatus]=useState(false) ;//this approch is not advisable
    function click(e){
        e.stopPropagation();//this will prevent the event bubbling;
        if(status){
            onPlay(msg);
        }
        else{
            onPause(msg);
        }
        setStatus(!status);   
    }

    return(
        
            <button className="btn" onClick={click}>{children}:{status?"▶":"⏸"}</button>
        
    )

   
}

export default Playbutton