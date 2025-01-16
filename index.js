import { generosMusicais } from "./lists.js"
const GLOBALOUTPUTNUMBER = 5;

export function randomPìcker(list = generosMusicais){
    let outputList = []; 
    for (let i = 0; i < GLOBALOUTPUTNUMBER; i++) {
        let randomNumber = getRandomNumber(list.length)
        if(!outputList.includes(randomNumber)){
            outputList.push(generosMusicais[randomNumber])  
        } else{
            i--;
        }  
    }
    return outputList;
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

randomPìcker(generosMusicais)