// variavel para guardar o botão
const botao = document.getElementById('tema');
const icone = botao.querySelector('i');
//Busca na memória do navegador a opção que o usuário tinha escolhido de tema
const salvaTema = localStorage.getItem('theme');

//Se o tema salva na memória localStorage for tema escuro

if(salvaTema === 'dark'){
    //adiciona a classe 'dark-mode' no corpo página
    document.body.classList.add('dark-mode');
    //trocar o icone de lua ('fa-moon) para um icone de sol
    icone.classList.replace('fa-moon', 'fa-sun');
}

//Quando clicar no botão ele vai executar o código abaixo

botao.addEventListener('click',() =>{
    //liga ou desliga a classe dark-mode
    document.body.classList.toggle('dark-mode');

    //verificar se a página ficou com o modo escuro ativado
    const dark = document.body.classList.contains('dark-mode');

    //Se o modo escuro estiver ativado (verdadeiro)
    if(dark-mode){
        icone.classList,replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');    
    }else{
        //troca o de sol de volta para lua
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme','light');
    }
});