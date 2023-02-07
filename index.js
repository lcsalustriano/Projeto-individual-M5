import readlineSync from "readline-sync"; /*Importação do modules*/

const propriedade = [] /*Array para armazenar as propriedades*/
let input = ""; /*campo que recebe as propriedades digitadas no terminal*/

while(input != "sair"){
    propriedade.push(input); /*push do input para o array propriedades*/
    input = readlineSync.question('Digite uma propriedade CSS:').toLocaleLowerCase() /*Organizar as os nomes das propriedades em letras minúsculas*/
    
}
console.log(propriedade.sort().join('\n')); /*Sort = Organizrar em ordem alfabética / Join = junta todos os elementos de um array em uma string e retorna esta string*/
