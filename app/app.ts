/*Import do nossa moda NegociacaoController lembrar de colocar o .js no final*/
import { NegociacaoController } from "./controllers/negociacao_controller.js";

/*Criando uma variavel controller que será um novo registro da modal de Controller
NegociacaoController */
const controller = new NegociacaoController();

/*Aqui criamos um form que pega os dados do formulario do index.html pelo id '.form'
que são digitados pelo usuário*/
const form = document.querySelector('.form')

/*Agora pedimos que ao usuário submeter o formularios sejam feitas algumas ações*/
form.addEventListener('submit', event => {
		/*Aqui pedimos para o formulario não adotar o comportamento padrão de recarregar
	 a pagina ao clica em "submit"*/
    event.preventDefault();
		/*Aqui chamamos nossa função adiciona() da modal NegociacaoControler*/
    controller.adiciona();
})
    