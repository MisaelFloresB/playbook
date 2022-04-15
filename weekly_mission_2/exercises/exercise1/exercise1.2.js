const Facebook = {
    user: " Misael Flores",
    friends: 665,
    joined: "March 2010",
    maritalStatus: "Single",
    presentation: "None",

    getMaritalStatus: function(){

        return `${this.user} is ${this.maritalStatus} `
    },

    getJoinedFriends: function(){

        return `${this.user} joined on ${this.joined} and have ${this.friends} `
    }

}

console.log(Facebook)
console.log(Facebook.getMaritalStatus())
console.log(Facebook.getJoinedFriends())