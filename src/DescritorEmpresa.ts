import Empresa from "./Empresa"

class Descritor{
    public descrever(empresa: Empresa){
        console.log(`Razão Social: ${empresa.razaoSocial}`)
        console.log(`Nome Fantasia: ${empresa.nomeFantasia}`)
        console.log(`CNPJ: ${empresa.cnpj}`)
        console.log("Endereco: ")
        console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Numero: ${empresa.endereco.numero}`)
        console.log(" ")
        console.log("Funcionarios: ")
        empresa.funcionarios.forEach((func) => {
            console.log(`Nome: ${func.nome}`)
            console.log(`Matricula: ${func.matricula}`)
            console.log(`CPF: ${func.cpf}`)
            console.log(`Rua: ${func.endereco.rua} Bairro: ${func.endereco.bairro} Cidade: ${func.endereco.cidade} Numero: ${func.endereco.numero}`)
            console.log(" ")
        })
    }
}

export default Descritor