const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

console.log(explorers)
explorers.forEach(studentsName => console.log(studentsName.name))
explorers.forEach(studentsStack => console.log(studentsStack.stack))

// Se mapea la lista con map y se le indica que acomode una nueva lista unicamente 
//con lo que tenga el elemento stack de cada explorer
const newListStacks = explorers.map(newStack => newStack.stack)
console.log(newListStacks)

const filterList = explorers.filter(jsList => jsList.stack.includes("js"))
console.log(filterList)

console.log("FIND Explorers in CDMX")
const findList = explorers.find(newFindList => newFindList.city == "CDMX")
console.log(findList)

console.log("Reduce Explorers Exercises")
//  variable acomulador toma el valor indicado al ultimo, en este caso 0 se va acumulando y sumando al valor de newreduceExercise.exercises_completed
const reduceExercise =  explorers.reduce((acomulador, newreduceExercise) => acomulador + newreduceExercise.exercises_completed, 0)
console.log(reduceExercise)

console.log("Uso de Some")
const finishedTrue = explorers.some((finishEx) => finishEx.missions.frontend.exercisesFinished === true)
console.log(finishedTrue)

console.log("Uso de EVERY")
const everyFinished = explorers.every((finishedEvery) => finishedEvery.missions.onboarding.isFinished === true)
console.log(everyFinished)