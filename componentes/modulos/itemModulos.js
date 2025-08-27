export function item(){
    let item=document.createElement('div');

    item.className="item";
 
     // título
    let titulo = document.createElement("h3");
    titulo.className="title";
    titulo.textContent = title;

    // imagen
    let img = document.createElement("img");
    img.className="img1";
    img.src = image;
    img.alt = title;

    // descripción
    let desc = document.createElement("p");
    desc.textContent = description;
    desc.className="desc";

    // precio
    let precio = document.createElement("p");
    precio.textContent = `Precio: $${price}`;
    precio.className="price";


    item.appendChild(titulo);
    item.appendChild(img);
    item.appendChild(desc);
    item.appendChild(precio);

    return item;
}
