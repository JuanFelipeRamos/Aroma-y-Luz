<script setup>
import NavbarLogoYTexto from '@/components/NavbarLogoYTexto.vue';

let texto = "Creemos que una vela puede ser mucho\n" +
"más que un simple accesorio. Nuestras velas\n" +
"aromáticas combinan diseño, aroma\n" +
"y calidad para llenar cualquier espacio de\n" +
"calidez y armonía.\n" +
"\n" +
"La idea nació del deseo de innovar en un\n" +
"producto cotidiano y hacerlo más\n" +
"accesible, original y especial. Por eso,\n" +
"cuidamos cada detalle: desde la elección de\n" +
"los materiales hasta la creación de\n" +
"diseños únicos y fragancias que transmiten\n" +
"sensaciones.\n" +
"Nuestro compromiso es ofrecerte velas que\n" +
"no solo iluminen, sino que\n" +
"acompañen momentos y transformen\n" +
"ambientes."
</script>


<template>
    <div>
        <NavbarLogoYTexto :txt="texto"/>
        <div class="misionYVision">
            <img src="/public/logo2.jpeg" alt="Imagen de fondo" class="fondo" />
            <div class="mision">
                <h2>MISIÓN</h2>
                <p>SER LA MARCA LIDER EN LA CREACION DE VELAS AROMATICAS Y</p>
                <p>OFRECER EXPERIENCIAS SENSORIALES UNICAS A TRAVEZ DE VELAS ARTESANALES QUE</p>
                <p>COMBINEN AROMAS NATURALES Y UNA LUZ CALIDA, CREANDO UN</p>
                <p>AMBIENTE ACOGEDOR QUE INVITE AL DESCANSO, LA CONEXIÓN Y EL BIENSTAR EMOCIONAL.</p>
            </div>
            <div class="vision">
                <h2>VISIÓN</h2>
                <p>SER UNA MARCA RECONOCIDA, TAMBIEN NOS PROPONEMOS A SER LA ELECCION</p>
                <p>PREFERIDA DE AQUELLOS QUE BUSCAN EXPERENCIAS SENSORIALES AUTENTICAS PAR</p>
                <p>TRANSFORMAR ESPACIOS COTIDIANOS EN REFUGIOS DE AROMA Y</p>
                <p>TRANQUILIDAD A TRAVES DE NUESTRA VELAS.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.misionYVision {
    width: 100%;
    height: 610px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.fondo {
    position: absolute;         /* Se coloca detrás del texto */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centra la imagen */
    width: 600px;
    object-fit: cover;          /* Ajusta la imagen sin deformarla */
    opacity: 0.3;
    z-index: -1;
}

.mision, .vision {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 30px 0px;
}

h2 {
    margin-bottom: 10px;
}

</style>