document.getElementById('form_header').addEventListener('submit', function(e) {
    e.preventDefault();
    // Coloque aqui o código que você quer executar quando o formulário for submetido
  });

var botao1 = document.getElementById('botao_formulario');
var input_form = document.getElementById('input_formulario');
var div_form = document.getElementById('form_header');

botao1.addEventListener('click', function() {
        if (input_form.style.width == '0px'){
        input_form.style.width = '200px';
        input_form.style.transform = 'all 0.5s ease-in-out';
        botao1.style.height = '30px';
        botao1.style.backgroundColor = '#000000d6';
        botao1.style.border = "none";
        botao1.style.paddingLeft = '5px';
        botao1.style.paddingRight = '35px';
        botao1.style.transform = 'scale(1.0)';
        div_form.style.border = '1px solid white';
        botao1.style.border = '1px 0px 1px 1px solid white';
    } else {
        input_form.style.width = '0px';
        div_form.style.border = '';
        botao1.style.height = '30px';
        botao1.style.backgroundColor = 'transparent';
        botao1.style.paddingLeft = '0px';
        botao1.style.paddingRight = '0px';
    }
});