var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        Pessoa.prototype.getIdade = function () {
            return this.idade;
        };
        Pessoa.prototype.setIdade = function (idade) {
            this.idade = idade;
        };
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this.cpf = cpf;
        };
        return Pessoa;
    }());
})(empresa || (empresa = {}));
