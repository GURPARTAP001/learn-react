import "./Playbutton.css"

function Playbutton({children,onClick}){

    function click(){
        onClick();
    }

    return(
        
            <button className="btn" onClick={click}>{children}</button>
        
    )

   
}

export default Playbutton