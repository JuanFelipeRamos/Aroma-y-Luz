import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; //Librería para íconos

// Importar íconos de marcas (brands)
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Importar íconos sólidos (ejemplo: envelope para Gmail)
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Agregar los íconos a la librería
library.add(faWhatsapp, faEnvelope, faInstagram, faFacebook);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')
