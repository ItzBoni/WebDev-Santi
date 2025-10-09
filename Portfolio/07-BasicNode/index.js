//I couldn't get "require" to work with superheroes and supervillains 
//so I used import. 

import {randomSuperhero} from 'superheroes';
import {randomSupervillain} from 'supervillains';
import sw from 'star-wars-quotes';
import fs from 'node:fs';

//starwars quote
console.log(sw());

//epic battle
let superHero = randomSuperhero();
let superVillain = randomSupervillain();

console.log(superHero, " is facing with ", superVillain," who will win?");

//extracting data from folder
fs.readFile('./data/input.txt','utf-8', (err,data) => {
    if(err){
        console.error('Error reading file', err);
        return
    }
    console.log(data);
});