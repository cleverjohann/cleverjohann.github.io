import React from "react";
import '../hojas-estilo/testimonio.css'; 
function Testimonio (){
  return(
    <div className="contenedor-testimonio">
      <img className="image-testimonio" 
      src="../imagenes"
      alt="foto de enma"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Enma bostienda de suecia</p>
        <p className="cargo-testimonio">Ingenieria de software de spotifi</p>
        <p className="texto-testimonio">"Siempre he tenido problemas para aprender JavaScript. He tenido muchos cursos
        pero el curso de freeCodeCamp fue el que se quedo. Estudiar JavaScrip, asi como la estructura de los datos 
        y algoritmos en freeCodeCamp me dio habilidades y la confianza que necesitaba para conseguir el trabajo de mis
        sueños como ingeniero de software"</p>
      </div>

    </div>
  );
}
export default Testimonio;