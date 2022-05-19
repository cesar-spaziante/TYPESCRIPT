/*Import dos parametros da modal Negociacao não esquecer de colocar o .js*/
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement; /*Criando propriedades privadas da classe*/
    private inputQuantidade: HTMLInputElement; /*Tipagem especifica de elementos do HTML*/
    private inputValor: HTMLInputElement;

    constructor(){

				/*Relacionando a propriedade privada da classe com as
					propriedades contidas no index.html aonde cada propriedade tem
					um ID referenciado pela "#".
					esse pedaço "document.querySelector('#data');"	é JavaScript puro*/

        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');

    }
    adiciona(): void {
        /*Chamando uma função externa a esta que normliza os dados antes de plotar na console*/
        const negociacao = this.criaNegociacao()

        /*Mostrando os dados na console do navegador*/
        console.log(negociacao)

        /*Limpando formulario após o usuário salvar*/
        this.limparFormulario()    
    }
    /*Tipando retorno da função*/
    criaNegociacao(): Negociacao {

        /*Expressão Regular para capturar todos os traços das datas digitadas*/
        const exp = /-/g;
        /*Depois convertemos a string para data de maneira que substituimos os traços encontrados por virgula
        Pois o construtor Date controi as datas da seguinte maneira new Date(AAAA,MM,DD)*/
        const date = new Date(this.inputData.value.replace(exp, ','));
        
        /*Conversão do valor string de quantidade para inteiro*/
        const quantidade = parseInt(this.inputQuantidade.value);

        /*Conversão do valor string de quantidade para float*/
        const valor = parseFloat(this.inputValor.value);

        /*Criando um novo registro da modal Negociacao que é do Backend e receberá os dados da app.js
        que está interagindo com o front capturando os dados do formulario em index.html*/
        return new Negociacao(
        /*Capturando os valores digitados pelos usuários na app.js e atribuindo 
        às propriedades da classe Negociação 
        Agora não precisamos mas pegar o valor pois já convertemos as strings do HTML*/
        date, quantidade, valor
    );

    }

    /* Tipo "void" quer dizer que não retorna nada*/
    limparFormulario(): void {

        /*limpando os valores do formulário*/
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        /*Depois de limpar ele ja coloca a interação do usuário para o cadastro de uma nova data
        deixando a UX melhor*/
        this.inputData.focus();
    }

}