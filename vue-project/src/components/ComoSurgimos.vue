<script setup>
const props = defineProps({
  txt: String
})

</script>


<template>
    <div class="divPadre">
        <div class="container-left">
            <img src="../assets/UltimaImg.png" alt="Logo velas" class="imgLogo">
        </div>
        <div class="container-right">
            <p v-html="txt"></p>
        </div>
    </div>
</template>


<style scoped>
.divPadre {
    display: flex;
    justify-content: space-between;
    height: 100vh;
}

.container-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(139, 100, 13);
    width: 50%;
}

.container-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgLogo {
    width: 400px;
}

p {
    white-space: pre-line;
    color: white;
    text-align: center;
    font-size: 24px;
}

@media (max-width: 768px) {
  .divPadre {
    flex-direction: column;
    height: auto;
  }

  .container-left, 
  .container-right {
    width: 100%;
    padding: 20px;
  }

  .imgLogo {
    width: 250px;
    max-width: 100%;
    height: auto;
  }

  p {
    font-size: 18px;
  }
}

</style>