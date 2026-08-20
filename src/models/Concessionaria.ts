export class Concessionaria{  //classe visivel para outros arquivos
    id: number | any;
    nome: string;
    cnpj: string;
    cidade: string;
    
    constructor ( nome:string, cnpj:string, cidade: string,  id:any=null){  //criar construtor 
        //instanciando os atributos da classe
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.cidade = cidade;
    }
} 