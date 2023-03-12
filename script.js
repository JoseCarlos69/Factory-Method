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

function verificar() {
    const nome = document.getElementById("nome").value;
    const relacao = document.getElementById("relacao").value;

    const pessoa = PessoaFactory.criarPessoa(relacao);

    if (nome === "" || relacao === "") {
        document.getElementById("mensagem").innerHTML = `Preencha o(s) campo(s) vazio(s)`;
        return;
    }
    if (pessoa) {
        document.getElementById("mensagem").innerHTML = `${nome} tem relação com a instituição como ${pessoa.mensagem()}`;
    }
    else {
        document.getElementById("mensagem").innerHTML = `${nome} não tem relação com a instituição, acompanhar até a secretaria`;
    }
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("relacao").value = "";
    document.getElementById("mensagem").innerHTML = "";
}

function sair() {
    window.location.href = "index.html";
}

function iniciar() {
    window.location.href = "programa.html";
}
