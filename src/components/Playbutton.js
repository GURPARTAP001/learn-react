import "./Playbutton.css"

function Playbutton({children,onPlay,onPause,msg}){

    let status=false;//this approch is not advisable
    function click(e){
        e.stopPropagation();//this will prevent the event bubbling;
        if(status){
            onPlay(msg);
        }
        else{
            onPause(msg);
        }
        status=!status;   
    }

    return(
        
            <button className="btn" onClick={click}>{children}</button>
        
    )

   
}

export default Playbutton