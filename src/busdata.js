import Vue from 'vue'
// Un bus de eventos es un canal en el que todos los componentes suscritos a este pueden reaccionar a los eventos que se publican por otros
// Viene a solucionar que componentes que no son hijos directos de otro, puedan recibir eventos de tal
const bus = new Vue()

export default bus
