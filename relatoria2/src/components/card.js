function Card(props) {
  return (
      <div className="container text-center">
        <div className="row simple_card align-items-center">
          <div className="col align-middle">
            <img
              src="http://2.bp.blogspot.com/-vl-cwfO1Its/Vo17NEjNAJI/AAAAAAAAC5E/WBsB-af-L5U/s1600/LUCHO%2BBERMUDEZ.jpg"
              className="rounded mx-auto d-block card_image"
              alt="Imagen de Lucho"
            />
          </div>
          <div className="col">
            <p className="text">
              Fue uno de los compositores e intérpretes más reconocidos de la
              música colombiana. Nacido el 25 de enero de 1912 en Carmen de
              Bolivar, Lucho aprende a tocar el flautín en medio de una infancia
              dificil al haber perdido a su padre. Su carrera musical tiene su
              primer éxito con Prende la Vela.
            </p>
            <p className="text">
              En el año 1947 lanza oficialmente la Orquesta de Lucho Bermúdez
              con la que llevaría cumbias y porros a nivel internacional.
            </p>
          </div>
        </div>
      </div>
  );
}

export default Card
