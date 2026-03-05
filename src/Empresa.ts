import Endereco from "./Endereco"

class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionarios: funcionarios[]

    constructor(funcionarios: funcionarios[], endereco: Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string){
        this.funcionarios = funcionarios
        this.endereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
    }
}

export default Empresa