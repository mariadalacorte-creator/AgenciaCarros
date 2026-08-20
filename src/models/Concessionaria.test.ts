import { describe, it, expect } from '@jest/globals';
import { Concessionaria } from './Concessionaria';

describe ('Modelo Concessionaria', () => { //conjunto de teste
    it ('deve criar uma concessionaria corretamente com o nome, cnpj e cidade',() => {
        //preparação (arrange)
        const nomeDaConcessionaria = 'Fusca';
        const cnpjDaConcessionaria = '123';
        const cidadeDaConcessionaria = 'Itapetininga';

        const concessionaria = new Concessionaria (nomeDaConcessionaria, cnpjDaConcessionaria, cidadeDaConcessionaria);

        expect (concessionaria.nome).toBe('Fusca');
        expect (concessionaria.cnpj).toBe('123');
        expect (concessionaria.cidade).toBe('Itapetininga');
        expect (concessionaria.id).toBeNull();
    });
});