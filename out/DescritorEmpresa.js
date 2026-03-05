"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        console.log("Raz\u00E3o Social: ".concat(empresa.razaoSocial));
        console.log("Nome Fantasia: ".concat(empresa.nomeFantasia));
        console.log("CNPJ: ".concat(empresa.cnpj));
        console.log("Endereco: ");
        console.log("Rua: ".concat(empresa.endereco.rua, " Bairro: ").concat(empresa.endereco.bairro, " Cidade: ").concat(empresa.endereco.cidade, " Numero: ").concat(empresa.endereco.numero));
        console.log(" ");
        console.log("Funcionarios: ");
        empresa.funcionarios.forEach(function (func) {
            console.log("Nome: ".concat(func.nome));
            console.log("Matricula: ".concat(func.matricula));
            console.log("CPF: ".concat(func.cpf));
            console.log("Rua: ".concat(func.endereco.rua, " Bairro: ").concat(func.endereco.bairro, " Cidade: ").concat(func.endereco.cidade, " Numero: ").concat(func.endereco.numero));
        });
    };
    return Descritor;
}());
exports.default = Descritor;
