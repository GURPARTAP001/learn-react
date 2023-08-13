import "./Video.css"

// here we have assigned the default prop to the channel
function Video({ title, views, time, channel = "Legend_Coder", verified, id, children, dispatch = { dispatch }, editVideo }) {
    let bg = "theme"//we are passing the "theme" as a class 

    function deleteVd() {
        dispatch({ type: "DELETE", paylaod: id })
    }
    function editVd() {
        editVideo(id);
    }
    return (
        <>
            <div className="main_container">
                <button className="close" onClick={deleteVd}>X</button>
                <button className="edit" onClick={editVd}>Edit</button>
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/200/200`} alt="phone" />
                </div>
                <div className={bg}>{title}</div>
                {/* below is the example of the conditional rendering */}
                <div className={bg}>{channel} {verified ? "✅" : null}</div>
                <div className={bg}>{views} views . <span>{time}</span></div>
                <div className="btn1">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Video;