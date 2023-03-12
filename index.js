class Pessoa {
    mensagem() {}
}

class Aluno extends Pessoa {
    mensagem() {
        return "Aluno";
    }
}

class Professor extends Pessoa {
    mensagem() {
        return "Professor";
    }
}

class Coordenador extends Pessoa {
    mensagem() {
        return "Coordenador";
    }
}

class Diretor extends Pessoa {
    mensagem() {
        return "Diretor";
    }
}

class Administrativo extends Pessoa {
    mensagem() {
        return "prestador de serviços no setor Administrativo";
    }
}

class Vestibulando extends Pessoa {
    mensagem() {
        return "Vestibulando";
    }
}

class PessoaFactory {
    static criarPessoa(relacao) {
        switch (relacao) {
            case "Aluno":
                return new Aluno();
            case "Professor":
                return new Professor();
            case "Coordenador":
                return new Coordenador();
            case "Diretor":
                return new Diretor();
            case "Administrativo":
                return new Administrativo();
            case "Vestibulando":
                return new Vestibulando();
            default:
                return null;
        }
    }
}