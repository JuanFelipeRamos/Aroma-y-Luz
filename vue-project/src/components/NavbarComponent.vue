<script setup>
const props = defineProps({
  txt: String
})

</script>


<template>
    <div class="divPadre">
        <div class="container-left">
            <div class="options">
                <ul>
                    <li id="home">HOME</li>
                    <li id="contact">CONTACTO</li>
                    <li id="sobreNos">SOBRE NOSOTROS</li>
                </ul>
            </div>
            <div class="linea">
                <hr>
            </div>
            <div class="containerTexto">
                <p>{{ txt }}</p>
            </div>
        </div>
        <div class="container-right">
            <img src="/public/logo.jpg" alt="Logo Aroma y Luz" class="imgLogo">
        </div>
    </div>
</template>


<style scoped>
.divPadre {
    display: flex;
    justify-content: space-between;
    height: 100vh;
}

.container-left {
    display: flex;
    flex-direction: column;
    background-color: rgb(139, 100, 13);
}

.options {
    flex-direction: row;
    margin-top: 15px;
    margin-left: 30px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    font-family: 'Playfair Display', serif;
    font-size: 25px;
    font-weight: bold;
    display: inline-block;
    margin-right: 70px;
    color: white;
    transition: 0.5s;
}

#home:hover {
    margin-right: 76px;
    font-size: 23px;
}

#contact:hover {
    margin-right: 81px;
    font-size: 23px;
}

#sobreNos:hover {
    margin-right: 88px;
    font-size: 23px;
}

li:hover {
    color: rgb(238, 208, 151);
}

hr {
  border: 0;
  height: 2px;
  background-color: white;
  width: 100%;
  margin-top: 20px;
}

.containerTexto, .container-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgLogo {
    width: 410px;
}

p {
    white-space: pre-line;
    color: white;
    text-align: center;
    font-size: 24px;
}

</style>