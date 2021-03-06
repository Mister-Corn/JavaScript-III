/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

// GameObject.prototype.destroy = function() {
//   return `Object was removed from the game.`;
// }

GameObject.prototype.destroy = () => `Object was removed from the game.`;

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.hp = attributes.hp;
  this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

const character = new CharacterStats(`4-18-18`, `3`, 100, "Merlin");

console.log(character);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}

console.log(character.takeDamage());
/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}
// Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

const humanAttributes = {
  "faction":'Stormwind',
  "weapons": 'Longsword', 
  "language": 'Common'};

const human = new Humanoid(humanAttributes);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting a in ${this.language}.`
}

console.log(human);

/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  

  // Stretch task: 
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  function Villain(attributes) {
    Humanoid.call(this, attributes);
  }

  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.unspeakableHorror = () => {
    Orchaldaer.hp -= 7;
    Orchaldaer.takeDamage();
    return "Take this Orchaldaer!"
  }

  function Hero(attributes) {
    Humanoid.call(this, attributes);
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.healing = () => {
    Orchaldaer.hp += 5; 
    return "Not this time Sir Mustachio!!"; 
  }

  Hero.prototype.fistOfLight = () => {
    swordsman2.hp -= 3;
    return  `A huge first of light smacks genericBadGuy in the face!`
  }
  
  const swordsman2 = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const Orchaldaer = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 8,
      width: 4,
      height: 10,
    },
    hp: 10,
    name: 'Orchaldaer',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(swordsman2);
  console.log(Orchaldaer);

  console.log(swordsman2.unspeakableHorror());
  console.log(Orchaldaer.hp);
  console.log(Orchaldaer.healing());
  console.log(Orchaldaer.hp);

  console.log(`\n-----------------------FIGHT----------------------\n`)
  function fight() {
    let randomNumber = null;
    while(Orchaldaer.hp > 0 && swordsman2.hp > 0){
      console.log(Orchaldaer.fistOfLight());
      console.log(Orchaldaer.healing());
      console.log(swordsman2.unspeakableHorror());
      if (Orchaldaer.hp < 8) {
        randomNumber = Math.floor(Math.random() * 11);
        if (randomNumber <= 2) {
          console.log(`Heavenly Light bathes the hero, reinvigorating him!`);
          Orchaldaer.hp += 15;
          console.log("Hero HP:", Orchaldaer.hp);
        }
      }
      if(Orchaldaer.hp <= 0) {
        console.log(`The forces of light tremble under the overpowering strength of darkness!!!`);
        return Orchaldaer.destroy();
      }
      else if (swordsman2.hp <= 0) {
        console.log(`The forces of light triump over darkness!`)
        return swordsman2.destroy();
      }
    }
  }

  fight();