const uber ={
    user: "Misael Flores",
    qualification: 4.93,
    uberRewards: "786",
    lastTravel: "21/1/22",

    getQualification: function(){

        return `${this.user} have ${this.qualification} qualification`

    },

    getRewards: function(){

        return `${this.user} have ${this.uberRewards} Points and his last trip was in ${this.lastTravel}`

    }
}

console.log(uber)
console.log(uber.getQualification())
console.log(uber.getRewards())