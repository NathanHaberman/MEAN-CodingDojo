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
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"