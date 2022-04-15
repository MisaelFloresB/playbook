// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = [1, 2, 3, 4]
const areAllStr = names10.every((name) => typeof name === 'number') // every
console.log("Ejemplo 10: Son todos los valores number: " + areAllStr)