import { generosMusicais } from "./lists.js"
import { caracteristicasDosSims } from "./lists.js";
import { topicosDeConversa } from "./lists.js";
import { atividades } from "./lists.js";
import { lModosDeVida } from "./lists.js";
import { lCaracteristicas } from "./lists.js";
import { lcoresDeCabelo } from "./lists.js";

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
    function likesAndDislikes() {
        const music = randomPìcker(generosMusicais);
        const characteristcs = randomPìcker(caracteristicasDosSims);
        const conversation = randomPìcker(topicosDeConversa);
        const activities = randomPìcker(atividades);
        console.log(`Gostos e Aversões
            Gênero Musical: ${music}
            Características: ${characteristcs}
            Tópicos de conversa: ${conversation}
            Atividades: ${activities}
            `);
    }
    function turnOnsAndOffs() {
        const lifeStyle = randomPìcker(lModosDeVida);
        const loveCharacteristcs = randomPìcker(lCaracteristicas);
        const hairColor = randomPìcker(lcoresDeCabelo);
        
        console.log(`Afeições e Repulsas
            Modos de vida: ${lifeStyle}
            Características: ${loveCharacteristcs}
            Cor de Cabelo: ${hairColor}
            `);
    }
    likesAndDislikes();
    turnOnsAndOffs();
}

resultGiver()