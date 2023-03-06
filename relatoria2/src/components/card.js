function Card(props) {
  return (
    <div className="container text-center simple_card">
      <div className="row">
        <h2 className="subtitle">{props.title}</h2>
      </div>
      <div className="row align-items-center">
        {!props.col && (
          <div className="col align-middle">
            {props.video && (
              <iframe
                width="560"
                height="315"
                src={props.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )}
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
          {props.paragraphs.map((p) => (
            <p className="text">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
