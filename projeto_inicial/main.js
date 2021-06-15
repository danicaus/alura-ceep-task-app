import {coletaInputs} from "./assets/js/criaTarefa.js"
import {carregaTarefa} from "./assets/js/carregaTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', coletaInputs)

carregaTarefa()