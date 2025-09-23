<script setup>
import { ref } from 'vue';

const props = defineProps({
    imageUrl: {
        type: String,
        required: true
    },
    name: String,
    precio: String,
    numVela: Number
})

//lista de pedidos
const a = "la vela de Dulces pinos";
const b = "la vela de Vida marina";
const c = "la vela de Destello de rosas";
const d = "la vela de Aurora de cristal";
const e = "las velas de Moldes 1";
const f = "las velas de Moldes 2";
const g = "la vela de Jardin de luz";
const h = "la vela de Aromaterapia";
const i = "el Combo iluminación";

let velaSeleccionada = ref(props.numVela);
let velaAMostrar = ref('')

function openWhatsApp() {
    switch (velaSeleccionada.value) {
        case 1:
            velaAMostrar.value = a
            break;
        case 2:
            velaAMostrar.value = b
            break;
        case 3:
            velaAMostrar.value = c
            break;
        case 4:
            velaAMostrar.value = d
            break;
        case 5:
            velaAMostrar.value = e
            break;
        case 6:
            velaAMostrar.value = f
            break;
        case 7:
            velaAMostrar.value = g
            break;
        case 8:
            velaAMostrar.value = h
            break;
        case 9:
            velaAMostrar.value = i
            break;
        default:
            console.log("Error.")
            break;
    }
    const phone = "573248428754";
    const message = encodeURIComponent(`¡Hola! Estoy interesado en ${velaAMostrar.value}!`);
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank"); // abre en nueva pestaña
}

</script>


<template>
    <div class="container">
        <div class="img">
            <img :src="imageUrl" alt="Vela" />
        </div>
        <hr>
        <div class="nameYPrecio">
            <h2>{{ name }}</h2>
            <p>${{ precio }}</p>
        </div>
        <div class="btn">
            <button @click="openWhatsApp">Me interesa</button>
        </div>
    </div>
</template>


<style scoped>
.container {
    border: solid rgb(37, 37, 37) 1px;
    border-radius: 15px;
    width: 200px;
    padding: 10px 0px;
    transition: 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.301);
}

.container:hover {
    width: 202px;
    border: solid black 1.5px;
    background-color: rgba(214, 194, 194, 0.281);
}

.img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
}

img {
    width: 90%;
    border-radius: 15px;
}

hr {
    background-color: rgb(37, 37, 37);
    height: 1px;
    border: none;
}

.nameYPrecio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
}

button {
    padding: 4px 18px;
    border: solid black 1px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.185);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.301);
    transition: 0.3s;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.897);
    cursor: pointer;
}

</style>