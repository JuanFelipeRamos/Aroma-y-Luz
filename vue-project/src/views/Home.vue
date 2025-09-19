<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';

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
        <NavbarComponent :txt="texto"/>
    </div>
</template>


<style>

</style>