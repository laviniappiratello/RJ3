class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }
    get cnpj() {
        return this.#cnpj;
    }
    addTelefone(telefone) {
        this.telefones.add(telefone);
    }
    addCliente(cliente) {
        this.clientes.add(cliente);
    }
    maiusculo(texto) {
        return texto.toUpperCase();
    }
    minusculo(texto) {
        return texto.toLowerCase();
    }
    detalhes() {
        return 'Razão Social: ' + this.maiusculo(this.razaoSocial) +
               '\nNome Fantasia: ' + this.nomeFantasia +
               '\nTelefones: ' + Array.from(this.telefones).map(t => t.detalhesTelefone()).join(', ') +
               '\nClientes:\n' + Array.from(this.clientes).map(c => c.detalhesCliente()).join('\n\n');
    }
}
class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }
    get cpf() {
        return this.#cpf;
    }
    addTelefone(telefone) {
        this.telefones.add(telefone);
    }
    detalhesCliente() {
        return 'Nome: ' + this.nome +
               '\n' + this.endereco.detalhesEndereco() +
               '\nTelefones: ' + Array.from(this.telefones).map(t => t.detalhesTelefone()).join(', ');
    }
}
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    detalhesTelefone() {
        return 'DDD: ' + this.ddd + ' Número: ' + this.numero;
    }
}
class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    detalhesEndereco() {
        return 'Estado: ' + this.estado + ', Cidade: ' + this.cidade +
               ', Rua: ' + this.rua + ', Número: ' + this.numero;
    }
}
let empresa = new Empresa('ABC LTDA', 'Mercado Online', '111111111', new Endereco('SP', 'São José dos Campos', 'Av Nove de Julho', '90'));
empresa.addTelefone(new Telefone('12', '99999999'));
empresa.addTelefone(new Telefone('11', '88888888'));
const clientes = [
    new Cliente('Lavínia', '1234567', new Endereco('SP', 'São José dos Campos', 'Rua 90', '1')),
    new Cliente('Ana', '7654321', new Endereco('SP', 'Caraguatatuba', 'Rua 10', '98')),
    new Cliente('Luara', '2345678', new Endereco('SP', 'São Sebastião', 'Rua 87', '33')),
    new Cliente('Pedro', '3456789', new Endereco('SP', 'Ilha Bela', 'Rua 12', '91'))
];
clientes.forEach(cliente => {
    cliente.addTelefone(new Telefone('12', '99999999'));
    cliente.addTelefone(new Telefone('12', '88888888'));
    empresa.addCliente(cliente);
});
console.log(empresa.detalhes());
