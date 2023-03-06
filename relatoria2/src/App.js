import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/card";

// Card 1

const title1 = "¿Quién fue Lucho Bermudez?";
const img1 =
  "http://2.bp.blogspot.com/-vl-cwfO1Its/Vo17NEjNAJI/AAAAAAAAC5E/WBsB-af-L5U/s1600/LUCHO%2BBERMUDEZ.jpg";
const alt1 = "Imagen de Lucho";
const p11 =
  "Fue uno de los compositores e intérpretes más reconocidos de la música colombiana. Nacido el 25 de enero de 1912 en Carmen de Bolivar, Lucho aprende a tocar el flautín en medio de una infancia dificil al haber perdido a su padre. Su carrera musical tiene su primer éxito con Prende la Vela.";
const p12 =
  "En el año 1947 lanza oficialmente la Orquesta de Lucho Bermúdez con la que llevaría cumbias y porros a nivel internacional. Su legado se ha mantenido a pesar de su muerte el 23 de abril de 1994 de la mano de su orquesta que hoy dirigida por su hija sigue recorriendo el mundo.";

// Card 2

const title2 = "Primeros Años"
const video2 =
  "https://www.youtube-nocookie.com/embed/EkL4ljHduZE";
const p21 =
  "El video muestra el primer éxito de Lucho: Prende la Vela. Esta canción se acerca bastante a la cumbia tradicional gracias a la presencia marcada de la percusión.";
const p22 =
  "Con este éxito, fue invitado a Bogotá en donde las élites despreciaban la música torpical: era considerada de negros e indígenas e incitaba además al desorden. Ante esta situación, Lucho transforma su música para poder hacerla encajar entre las élites del centro del país.";


  // Card 2

const title3 = "Auge Musical"
const video3 =
  "https://www.youtube-nocookie.com/embed/SNh6ql5QFQw";
const p31 =
  "Una de las canciones más reconocidas de Lucho. Una canción ampliamente aceptada en el país, y que no solo se popularizó entre las élites andinas; sino que llegó a tener reconocimiento internacional. Está canción se convirtió en una cara de Colombia hacia el exterior.";
const p32 =
  "Específicamente, aquí se puede contrastar con la composición \"Prende la vela\". Se observa que la percusión ya no es tan marcada y se hace uso de instrumentos más sofisticados como el clarinete y una voz principal separada de un coro.";

// Card 4

const title4 = "El Debate: ¿Se \"enblanqueció\" la música de Lucho?";
const p41 =
  "Es evidente que hubo una transformación en la música de Lucho causada por su contacto con la cultura andina y sus élites. Sin embargo, antes de precipitarnos al debate sobre si esta transformación se trata de un \"emblaquecimiento\" u otro tipo, debemos defniir el verbo \"emblanquecer\". Como comúnmente se usa este verbo, se refiere a la inclusión de característcas en algún sector de costumbres y tradiciones de las sociedades blancas europeas o norteamericanas.";
const p42 =
  "Bajo esta definición y soportado por Wade (2002) la orquesta de Lucho sufrió una transformación en su paso por la zona Andina. Según afirma Wade, Lucho reclutó músicos locales (de Bogotá) que tenian una apariencia más \"blanca\" que los miembros de la orquesta original de Lucho. Sin embargo, aquí no se ve la inclusión de caracteristicas europeas, por lo que hay un \"enblaquecimiento\" en un sentido de cambio de los orígenes etnicos de los miembros de la orquesta de Lucho.";
const p43 = 
  "Ahora bien, el estilo de música de Lucho si incorporó estilos foráneos como el Jazz evidenciado en el formato de \"big band\" que tomó su orquesta. Según Ojaba (2012) el nuevo estilo de Lucho se alejó del estilo tradicional de los campesinos de la costa. Esto, en mi opinión si es una muestra más fuerte de \"emblanquecimiento\". Adicionalmente, la inclusión del clarinete en su orquesta y la pérdida de la gaita también son ";
  const p44 = 
  "Finalmente, si bien concluimos que hubo un \"emblaquecimiento\" de la música de Lucho, es importante no ignorar las razones de ello. Lucho Bermudez se expuso a un contexto cultural muy diferente al llegar a Bogotá. Más allá de rechazar sus origenes, en mi opinión los adaptó para poder darles mayor popularidad nacional e internacional. Esto es un debate que aún sigue sinedo discutido, pero considero peritnente redirigirlo hacia las intenciones más allá de si hubo o no transformación (porque para mí es muy claro que la hubo).";
  
function App() {
  return (
    <>
      <Navbar/>
      <div className="container text-center">
        <h1 className="heading"> ¿"Enblanquecer" la música tradicional?: La obra de Lucho Bermudez </h1>
      </div>
      <Card title={title1} img={img1} alt={alt1} paragraphs={[p11, p12]}/>
      <hr/>
      <div className="container">
        <h2 className="subtitle"> El formato de Lucho </h2>
        <div className="row">
          <div className="col-6">
            <Card title={title2} video={video2} paragraphs={[p21, p22]}/>
          </div>
          <div className="col-6">
            <Card title={title3} video={video3} paragraphs={[p31, p32]}/>
          </div>
        </div>
      </div>
      <hr/>
      <Card col="1" title={title4} paragraphs={[p41, p42, p43, p44]}/>
    </>
  );
}

export default App;
