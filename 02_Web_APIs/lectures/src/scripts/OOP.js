// const monsterOne = {
//     name: 'Monsti',
//     level: 0,
//     changeLevel: () => console.log('change level'),
// };

// const monsterTwo = {
//     name: 'Grizzlo',
//     level: 0,
//     changeLevel: () => console.log('change level'),
// };
//

class Monster {
    #name;
    constructor(name, color) {
        this.#name = name;
        this.level = 0;
        this.color = color;
    }

    changeLevel(newLevel) {
        this.level = newLevel;
    }

    changeName(newName) {
        // validation
        if (newName.length > 2) {
            this.#name = newName;
        }
    }

    attack() {
        console.log('attacking');
    }
}

const monsterOne = new Monster('Monsti', 'blue');
const monsterTwo = new Monster('Grizzlo', 'green');

monsterOne.attack()

console.log(monsterOne);

console.log(monsterOne.name);
monsterOne.changeLevel(10);
console.log(monsterOne.level);

console.log(monsterTwo.level);

console.log('start');
