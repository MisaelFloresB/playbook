const twitter = {
    user: "Misael Flores",
    userName: "MisaelFloresB",
    bio: "Ingeniero Informatico",
    location: "Mexico",
    birthDate: "June 8, 1994",
    joined: " May 2010",
    followers: "70",
    following: "676",
    trendingTopic: 0,
    hashtags: [" VideoGames", " Movies", " Music", " Coding"],

    getTradingTopic: function(){

        return `This user ${this.userName} has a ${this.trendingTopic} Trading Topic`

    },

    getHashTags: function(){
        return `this user ${this.userName} use ${this.hashtags } Hashtags`
    }
}
console.log("Nombre del usuario " + twitter.userName)
console.log("Numero de seguidores " + twitter.followers)
console.log("Ubicacion " + twitter.location)
console.log("Fecha de Nacimientos " + twitter.birthDate)
console.log(twitter.getTradingTopic())
console.log(twitter.getHashTags())