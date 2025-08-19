import {item} from "../modulos/itemModulos.js";
import { productos } from "../../database/productos.js";

export function seccion1(){

    let seccion=document.createElement('div');
    seccion.className = "div-1";

    productos.forEach(element => {
    seccion.appendChild(item(element.title, element.image, element.description));
});
    
    return seccion;
    
}