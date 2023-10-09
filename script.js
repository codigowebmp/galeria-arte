function cambiarArtista(artista){
    if(artista==1){
        document.getElementById("descripcion").innerHTML = "Leonardo da Vinci fue un polímata florentino del Renacimiento italiano. Fue a la vez pintor, anatomista, arquitecto, paleontólogo, botánico, escritor, escultor, filósofo, ingeniero, inventor, músico, poeta y urbanista. Falleció acompañado de Francesco Melzi, a quien legó sus proyectos, diseños y pinturas";
        document.getElementById("foto-artista").src = "img/leonardo.jpg"
        document.getElementById("op1").className = "selected";
        document.getElementById("op2").className = "";
        document.getElementById("op3").className = "";
    }
    if(artista==2){
        document.getElementById("descripcion").innerHTML = "Vincent Willem van Gogh fue un pintor neerlandés, uno de los principales exponentes del postimpresionismo. Pintó unos 800 cuadros y realizó más de 1600 dibujos. Una figura central en su vida fue su hermano menor Theo, marchante de arte en París, quien le prestó apoyo financiero de manera continua y desinteresada.";
        document.getElementById("foto-artista").src = "img/vincent.jpg"
        document.getElementById("op1").className = "";
        document.getElementById("op2").className = "selected";
        document.getElementById("op3").className = "";
    }
    if(artista==3){
        document.getElementById("descripcion").innerHTML = "(Pablo Ruiz Picasso; Málaga, 1881 - Moulins, Francia, 1973) Pintor español. La trascendencia de Picasso no se agota en la fundación del cubismo, revolucionaria tendencia que rompió definitivamente con la representación tradicional al liquidar la perspectiva y el punto de vista único.";
        document.getElementById("foto-artista").src = "img/picasso.jpg"
        document.getElementById("op1").className = "";
        document.getElementById("op2").className = "";
        document.getElementById("op3").className = "selected";
    }
}