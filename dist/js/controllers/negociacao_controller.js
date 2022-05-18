/*Import dos parametros da modal Negociacao não esquecer de colocar o .js*/
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        /*Relacionando a propriedade privada da classe com as
            propriedades contidas no index.html aonde cada propriedade tem
            um ID referenciado pela "#".
            esse pedaço "document.querySelector('#data');"	é JavaScript puro*/
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        /*Criando um novo registro da modal Negociacao que é do Backend e receberá os dados da app.js
        que está interagindo com o front capturando os dados do formulario em index.html*/
        const negociacao = new Negociacao(
        /*capturando os valores digitados pelos usuários na app.js e atribuindo
        às propriedades da classe Negociação */
        this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        /*Mostrando os dados na console do navegador*/
        console.log(negociacao);
    }
}
