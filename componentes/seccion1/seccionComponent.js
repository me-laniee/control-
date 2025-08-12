import {item} from "../modulos/itemModulos.js";

export function seccion1(){

    let seccion=document.createElement('div');
    seccion.className = "div-1"

    let snoopy = [
    ["José", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Id6dHJFbbFq0p5ldmm_58gHaFj%3Fpid%3DApi&f=1&ipt=667bc6a9d0c276899df1c1b69314e4e0320c31e0718360d249b3e0b655abd740&ipo=images"],
    ["Mia", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthfvnext.bing.com%2Fth%2Fid%2FOIP.qaZQgm1E1_zfY6QQdtpl5gHaFj%3Fcb%3Dthfvnext%26pid%3DApi&f=1&ipt=b57391eb1ebeb7998f78bae201db2cd282af25515eb05740761363ee0b3c0836&ipo=images"],
    ["Lejo", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthfvnext.bing.com%2Fth%2Fid%2FOIP.mxa1It8hBtpZUR-inkT4gwHaFj%3Fcb%3Dthfvnext%26pid%3DApi&f=1&ipt=fbcce3346de46996ddf15317872967a4863e4dbfea81ca863f455255fbb79e1c&ipo=images"],
    ["Juan", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.bkYo8Ocs-4QMzoJdUhU43wHaFj%3Fpid%3DApi&f=1&ipt=379572baf9b03f3676bac6ca4a68302aabbdb98482ab6d1c4015bbbdfc148db0&ipo=images"]
];

    snoopy.forEach(element => {
    seccion.appendChild(item(element[0], element[1]));
});

    
    return seccion;
    
}