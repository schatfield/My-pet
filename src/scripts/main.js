const jackTheDog = {
    name: "Jack",
    species: "mutt",
    nicknames: ["Tippy Tap", "Tippy Tap Jack", "crunchy crust"],
    age: 10,
    favoriteToys: [],
    play: function (toy) {

        if (toy === "bone") {
            this.favoriteToys.push(toy)
            console.log(this.favoriteToys)

        } else if (toy === "tennis ball") {            
            this.favoriteToys.push(toy)
            console.log(this.favoriteToys)

        } else {
            console.log("not my toy")
        }
    },
    jump: function (something) {
        return `Jack jumps on ${something}`
    } ,
    bark: function (someone) {
        return `Jack barks at ${someone}`
    } ,
    spin: function (somewhere) {
        return `Jack spins on the ${somewhere}`
    },
    eat: function (food) {
        window.alert(`Jack loves to eat ${food}`)
    }
}


console.log(`Once a week ${jackTheDog.bark("the neighbor")}`)
console.log(`In the mornings ${jackTheDog.spin("couch")}`)
console.log(`Everyday ${jackTheDog.jump("Eddy")}`)
console.log(`${jackTheDog.eat("pizza")}`)
console.log(`Ol' ${jackTheDog.nicknames[2]} is at it again`)
jackTheDog.play("bone")
jackTheDog.play("tennis ball")
jackTheDog.play("frisbee")


// Practice: My Pet "This"

// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

// const rufusTheDog = {
//     age: 4,
//     species: "Dalmatian",
//     contentsOfStomach: [],
//     eat: function (item) {
//         this.contentsOfStomach.push(item)
//     },
//     puke: function () {
//         this.contentsOfStomach.length = 0
//     },
//     bark: function (something) {
//         window.alert(`Rufus barks 'WOOF!' at ${something}`)
//     }
// }
// The variable rufusTheDog contains an object, and two of the methods use the this keyword. In this content this is rufusTheDog. Now you can invoke the eat method for Rufus a few times.

// rufusTheDog.eat("leftovers")
// rufusTheDog.eat("treat")
// rufusTheDog.eat("bunny")
// Now that Rufus has eaten some food, you can inspect his belly.

// console.log(rufusTheDog.contentsOfStomach)

// > [ 'leftovers', 'treat', 'bunny' ]​​​​​
// Since this === rufusTheDog, why don't we just use rufusTheDog inside the object? In the code below, this has been replaced the the variable name.

// const rufusTheDog = {
//     age: 4,
//     species: "Dalmatian",
//     contentsOfStomach: [],
//     eat: function (item) {
//         rufusTheDog.contentsOfStomach.push(item)
//     },
//     puke: function () {
//         rufusTheDog.contentsOfStomach.length = 0
//     },
//     bark: function (something) {
//         window.alert(`Rufus barks 'WOOF!' at ${something}`)
//     }
// }