import { describe, it, expect } from '@jest/globals';
import { Carro } from './Carro';

describe ('Modelo Carro', () => { //conjunto de teste
    it ('deve criar um carro corretamente com o nome e tipo',() => {
        //preparação (arrange)
        const nomeDoCarro = 'Fusca';
        const tipoDoCarro = 'Sedan';

        const carro = new Carro (nomeDoCarro, tipoDoCarro);

        expect (carro.nome).toBe('Fusca');
        expect (carro.tipo).toBe('Sedan');
        expect (carro.id).toBeNull();
    });
});