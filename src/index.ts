import Descritor from "./DescritorEmpresa";
import Empresa from "./Empresa";
import Endereco from "./Endereco";
import Funcionario from "./Funcionario";
import Telefone from "./Telefone";

let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo')
let telefone = new Telefone('011', '9-9999-9999')
let funcionario = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco, telefone)
let funcionario2 = new Funcionario('Steve Rogers', '123456789', '999.999.999-99', endereco, telefone)
let funcionario3 = new Funcionario('Peter Parker', '123456789', '999.999.999-99', endereco, telefone)
let funcionarios = [funcionario, funcionario2, funcionario3]
let telefones = [telefone]
let empresa = new Empresa(funcionarios, endereco, 'ABC LTDA', 'Mercado Online', '999-999-999-999-99')

let descritor = new Descritor
descritor.descrever(empresa)