import { Negociacao } from "./negociacao.js";

/*Modal que será responsável por salvar a lista das negociacoes*/
export class Negociacoes {
    /*Criando uma propriedade privada do tipo Array e tipando ela para ter o mesmo tipo de Negociacao 
    "Array<Negociacao> = []"*/
    private negociacoes: Array<Negociacao> = [];

    /*Metodo que adiciona uma nova negociacao na lista*/
    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)

    }

    /*Metodo que lista uma negociacao*/
    lista(): ReadonlyArray<Negociacao> {

        /*O Spread Operator "[...]" faz com que a lista original seja sempre preservada 
        de maneira que o console mostre sempre uma cópia da negociacao original
        return [...this.negociacoes]; */

        return this.negociacoes;


    }
}



