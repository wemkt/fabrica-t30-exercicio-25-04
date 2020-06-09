class Hospital{
    constructor(vagas, ocupados, tipo){
            this.vagas = vagas;
            this.ocupados = ocupados;
            this.tipo = tipo;
            this.pacientes = pacientes;
        }
        adicionarPaciente(paciente){
            this.pacientes.push(paciente)
        }
    
}
class Paciente{
    constructor(nome, sexo){
            this.nome = nome;
            this.sexo = sexo;
    }
}

