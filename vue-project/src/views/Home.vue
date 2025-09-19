<script setup>
import NavbarLogoYTexto from '@/components/NavbarLogoYTexto.vue';

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
</script>


<template>
    <div>
        <NavbarLogoYTexto :txt="texto"/>
        <hr>
        <div class="nuestrosProducts">
            <h2>NUESTROS PRODUCTOS</h2>
        </div>
    </div>
</template>


<style scoped>
hr {
  border: 0;
  height: 8px;
  background-color: white;
  width: 100%;
}

.nuestrosProducts {
    background-color: rgb(139, 100, 13);
    padding: 25px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    color: white;
    font-weight: bold;
    font-size: 30px;
}

</style>