var imagenes =['img/carrousel-img1.webp','img/carrousel-img2.webp','img/carrousel-img3.webp','img/carrousel-img4.webp',
'img/carrousel-img5.webp','img/carrousel-img6.webp'];
    cont=0;

    function carrousel(contenedor){
        contenedor.addEventListener('click',e=> {
            let atras=contenedor.querySelector('.btn-back'),
            adelante=contenedor.querySelector('.btn-forth'),
            img= contenedor.querySelector('  img'),
            tgt=e.target;

            if(tgt==atras){
                if(cont > 0){
                    img.src = imagenes[cont-1];
                    cont--;
                }else{
                    img.src= imagenes[imagenes.length -1];
                    cont = imagenes.length -1;
                }
            }else if(tgt == adelante){
                if(cont < imagenes.length -1){
                    img.src = imagenes[cont + 1];
                    cont++;
                }else{
                    img.src = imagenes[0];
                    cont=0;
                }

            }
        })

    }

    document.addEventListener("DOMContentLoaded",() =>{
        let contenedor= document.querySelector('.div-carrousel');

        carrousel(contenedor);
    })