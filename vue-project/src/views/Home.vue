<script setup>
import NavbarLogoYTexto from '@/components/NavbarLogoYTexto.vue';
import TargetaProducto from '@/components/TargetaProducto.vue';
import rosa from '../assets/rosa.jpeg'
import mar from '../assets/mar.jpeg'
import pinos from '../assets/pinos.jpg'
import aurora from '../assets/aurora.jpg'
import moldes1 from '../assets/moldes1.jpeg'
import moldes2 from '../assets/moldes2.jpg'
import jardin from '../assets/jardin.jpg'
import aromaterapia from '../assets/aromaterapia.jpg'
import combo from '../assets/combo.jpg'
import ComoSurgimos from '@/components/ComoSurgimos.vue';
import Footer from '@/components/Footer.vue';

let texto = "Bienvenido a  aroma y luz  donde\n" +
"cada vela es una invitación a conectar\n" +
"con tus sentidos y transformar tu\n" +
"espacio en un santuario de\n" +
"paz y armonía.\n" +
"\n" +
"Nuestras velas artesanales, hechas\n" +
"con amor y esmero,\n" +
"combinan fragancias naturales que\n" +
"despiertan emociones,\n" +
"calman la mente y llenan tu hogar de\n" +
"calidez. Más que una vela,\n" +
"es una experiencia que ilumina tus\n" +
"momentos más especiales\n" +
"y te acompaña en tu camino hacia el\n" +
"bienestar."

let textoFinal = "La idea nació de esas ganas\n" +
"de crear algo propio y diferente, algo\n" +
"que no se viera todos los días.\n" +
"Siempre me ha llamado la atención cómo objetos\n" +
"simples pueden transformarse\n" +
"en algo especial con\n" +
"un poco de creatividad. Así\n" +
"surgió la pregunta: “¿y si las velas no\n" +
"solo sirvieran para iluminar, sino también para decorar\n" +
"y transmitir sensaciones únicas?\n" +
"\n" +
"A partir de ahí empecé a experimentar\n" +
"con diseños y fragancias,\n" +
"buscando que cada vela tuviera un\n" +
"estilo propio y un olor que la\n" +
"hiciera memorable. Quería que fueran\n" +
"más que un accesorio: que\n" +
"representaran innovación y detalle en\n" +
"un producto cotidiano. Esa fue la\n" +
"chispa que encendió este\n" +
"emprendimiento."

</script>


<template>
    <div>
        <NavbarLogoYTexto :txt="texto" />
        <hr>
        <div class="nuestrosProducts">
            <h2>NUESTROS PRODUCTOS PRINCIPALES</h2>
        </div>
        <div class="tarjetas">
            <div class="containerProducts">
                <TargetaProducto :imageUrl="pinos" name="Dulces pinos" precio="18,000" />
                <TargetaProducto :imageUrl="mar" name="Vida marina" precio="15,000" />
            </div>
            <div class="containerProducts2">
                <TargetaProducto :imageUrl="rosa" name="Destello de rosas" precio="25,000" />
                <TargetaProducto :imageUrl="aurora" name="Aurora de cristal" precio="20,000" />
            </div>
        </div>
        <div class="nuestrosProducts">
            <h2>MOLDES QUE OFRECEMOS</h2>
        </div>
        <div class="tarjetas2">
            <div class="containerProducts">
                <TargetaProducto :imageUrl="moldes1" name="Moldes 1" precio="7,000" class="tarjetaModelo1" />
                <TargetaProducto :imageUrl="moldes2" name="Moldes 2" precio="5,000" class="tarjetaModelo2" />
            </div>
        </div>
        <div class="nuestrosProducts">
            <h2>VELAS DECORATIVAS</h2>
        </div>
        <div class="tarjetas3">
            <div class="containerProducts">
                <TargetaProducto :imageUrl="jardin" name="Jardin de luz" precio="15,000" class="jardin" />
                <TargetaProducto :imageUrl="aromaterapia" name="Aromaterapia" precio="15,000" class="aromaterapia" />
            </div>
            <div class="containerProducts">
                <TargetaProducto :imageUrl="combo" name="Combo iluminación" precio="30,000 x 3" class="comboIlumin" />
            </div>
        </div>
        <div class="info">
            <h2>¿CÓMO SURGIMOS?</h2>
        </div>
        <ComoSurgimos :txt="textoFinal" />
        <Footer />
    </div>
</template>


<style scoped>
hr {
  border: 0;
  height: 8px;
  background-color: white;
  width: 100%;
}

.nuestrosProducts, .info {
    background-color: rgb(139, 100, 13);
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    color: white;
    font-weight: bold;
    font-size: 30px;
}

.containerProducts {
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    gap: 70px;
}

.containerProducts2 {
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    gap: 70px;
}

.containerProducts, .containerProducts2, h2 {
  position: relative;
  z-index: 2;
}

.tarjetas, .tarjetas2, .tarjetas3 {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
}

.tarjetas {
    background-image: url('/public/velas-aromaticas-caseras.jpg');
}

.tarjetas2 {
    background-image: url('/public/fondoMoldes.jpg');
}

.tarjetas3 {
    background-image: url('/public/fondoDecorativas.jpg');
}

.tarjetas::before, .tarjetas2::before, .tarjetas3::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(175, 152, 152, 0.6);
    z-index: 1;
}

.tarjetaModelo1 {
    width: 250px;
}

.tarjetaModelo2, .jardin {
    width: 400px;
}

.aromaterapia {
    width: 268px;
}

.comboIlumin {
    width: 300px;
}

.comboIlumin:hover {
    width: 302px;
}

.aromaterapia:hover {
    width: 270px;
}

.tarjetaModelo1:hover {
    width: 252px;
}

.tarjetaModelo2:hover, .jardin:hover {
    width: 402px;
}

</style>