class Ninja{
    constructor(name, health=100, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log('Hello my name is ' + this.name);
    }
    showStats(){
        console.log('Health: ' + this.health);
        console.log('Speed: ' + this.speed);
        console.log('Strength: ' + this.strength);
    }
    drinkShake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10){
        super(name,health,speed,strength);
    }

    speakWisdom(){
        super.drinkShake();
        console.log('Wisdom!!!!')
    }
}

// example output
let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();
