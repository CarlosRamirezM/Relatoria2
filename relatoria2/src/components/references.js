function References(props) {

    function redirectToPage(url) {
        if(url) {
            window.location.assign(url)
        } else {
            console.log('Empty URL, cannot redirect to page')
        }
    }

    return (
        <div className="container">
        {props.refs.map( ref => <div className="row p-6"> 
            <div className="col-6 d-flex justify-content-center align-self-center text-center"> <p> {ref.apa} </p>  </div>
            {ref.url && <div className="col-6 d-flex justify-content-center align-self-center"> <button type="button" className="btn btn-dark" onClick={(e) => redirectToPage(ref.url)}>Ver más</button> </div>}
        </div>)}
        </div>
    )
}

export default References