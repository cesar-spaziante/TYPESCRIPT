export class Negociacao {

    /*Aqui atribuimos no nosso construtor as propriedades privadas da classe negociacao*/
    constructor(private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {};

    /*Com isso evitamos algum desenvolvedor alterar os dados de data, pois ele sempre vizualiza uma cópia
    do registro original, isso é uma técnica de programação defensiva*/    
        get data(): Date {
            const data = new Date(this._data.getTime());
            return data }   

    /*Como as propriedades agora são public readonlym não temos mais a necessidade dos Getters   
    get data(): Date {
        return this._data;
    };
    get quantidade(): number {
        return this._quantidade;
    };
    get valor(): number {
        return this._valor;
    };
    */ 

    get volume(): number {
        return this.valor * this.quantidade
    }
   
}

