export class Carro{  //classe visivel para outros arquivos
    id: number | any;
    nome: string;
    tipo: string;
    
    constructor ( nome:string, tipo:string, id:any=null){  //criar construtor 
        //instanciando os atributos da classe
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
    }
} 