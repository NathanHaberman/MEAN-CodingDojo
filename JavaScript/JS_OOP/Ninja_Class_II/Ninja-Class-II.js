function Ninja(name,health=100,speed=3,strength=3){
    var speed = speed;
    var strength = strength;

    this.name = name;
    this.health = health;

    this.sayName = function(){
        console.log('Hello my name is ' + this.name);
        return this;
    }

    this.showStats = function(){
        console.log('Health: ' + this.health);
        console.log('Speed: ' + speed);
        console.log('Strength: ' + strength);
        return this;
    }

    this.drinkShake = function(){
        this.health += 10;
        return this;
    }

    this.punch = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(this.name + ' punched ' + ninja.name);
            return this;
        }
        else{
            console.log('This is not a Ninja');
        }
    }
    
    this.kick = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= (15 * speed);
            console.log(this.name + ' kicked ' + ninja.name);
            return this;
        }
        else{
            console.log('This is not a Ninja');
        }
    }
}

// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
var notNinja = 2;
red_ninja.punch(blue_ninja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

blue_ninja.kick(red_ninja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"

blue_ninja.kick(notNinja);