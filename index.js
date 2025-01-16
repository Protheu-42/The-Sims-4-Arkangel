import { generosMusicais } from "./lists.js"
import { caracteristicasDosSims } from "./lists.js";
import { topicosDeConversa } from "./lists.js";

const GLOBALOUTPUTNUMBER = 5;

export function randomPìcker(list = generosMusicais){
    let outputList = []; 
    for (let i = 0; i < GLOBALOUTPUTNUMBER; i++) {
        let randomNumber = getRandomNumber(list.length)
        if(!outputList.includes(randomNumber)){
            outputList.push(list[randomNumber])  
        } else{
            i--;
        }  
    }
    return outputList;
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function resultGiver(){
    const music = randomPìcker(generosMusicais);
    const characteristcs = randomPìcker(caracteristicasDosSims);
    const conversation = randomPìcker(topicosDeConversa);

    console.log(music);
    console.log(characteristcs);
    console.log(conversation);
}

resultGiver()