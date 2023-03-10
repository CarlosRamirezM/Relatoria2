function Card(props) {
  return (
    <div className="container text-center simple_card">
      <div className="row">
        <h2 className="subtitle">{props.title}</h2>
      </div>
      <div className="row align-items-center">
        {!props.col && (
          <div className="col align-middle">            
            {props.img && (
              <img
                src={props.img}
                className="rounded mx-auto d-block card_image"
                alt={props.alt}
              />
            )}
          </div>
        )}
        <div className="col">
        {props.video && (
              <iframe
                className="object-fit-cover border rounded"
                width="50%"
                height="100%"
                src={props.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )}
          {props.paragraphs.map((p) => (
            <p className="text">{p}</p>
          ))}          
        </div>
      </div>
    </div>
  );
}

export default Card;
