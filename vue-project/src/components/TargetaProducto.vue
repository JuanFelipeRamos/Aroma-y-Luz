<script setup>
defineProps({
    imageUrl: {
        type: String,
        required: true
    },
    name: String,
    precio: String
})

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

</style>