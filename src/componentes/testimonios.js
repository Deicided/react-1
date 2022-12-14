import react from "react";
import "../hojas-de-estilo/Testimonio.css"


function Testimonio(props) {
return(
  <div className="contenedor-testimonio"  >
    <img className="imagen-testimonio"
     src= {require(`../imagenes/foto-${props.imagen}.jpg`)}   
     alt="foto de emma"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}  {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo}  {props.empresa}</p>
        <p className="texto-testimonio">"{props.Testimonio}"</p>
             </div>
  </div>

);

} 
export default Testimonio;