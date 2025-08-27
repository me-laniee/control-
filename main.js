import {header} from "./componentes/header/headerComponent.js";
import {seccion1} from "./componentes/seccion1/seccionComponent.js";
import {  } from "./componentes/nav/navComponent.js";

function seccion (){

    //document= objeto
    let seccion= document.createElement('seccion');

    seccion.appendChild(header());
    seccion.appendChild(seccion1());


    console.log("hola mundo");
    return seccion;
}

document.body.appendChild(seccion());