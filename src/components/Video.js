import "./Video.css"

// here we have assigned the default prop to the channel
function Video({title,views,time,channel="Legend_Coder"}){
    let bg="theme"//we are passing the "theme" as a class 
    return(
        <>
        <div className="main_container"> 
        <img src="https://th.bing.com/th/id/OIP.ltDHZ8lneQpt_US317rdSwHaEK?w=252&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="phone" />
        <div className={bg}>{title}</div>
        <div className={bg}>{views} views . <span>{time}</span></div>
        <div className={bg}>{channel}</div>
        </div>
        </>
    )
}

export default Video;