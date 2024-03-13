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



/*SLIDER SECAO 1 */
var totalMargin = 0;
var slider_secao1_div = document.getElementById('div_slider_interno');
/*BOTAO 1*/
var botao1_slider_secao1 = document.getElementById('botao1_slider');
var img_botao1 = document.getElementById('botao1_slider_img');
botao1_slider_secao1.addEventListener('mouseover', function() {
    img_botao1.style.display = 'block';
});
botao1_slider_secao1.addEventListener('mouseout', function() {
    img_botao1.style.display = 'none';
    img_botao1.style.transform = 'scale(1.0)';
});
botao1_slider_secao1.addEventListener('click', function() {
    if (slider_secao1_div.style.marginLeft < -16006 + 'px') {
        totalMargin = 0;
        slider_secao1_div.style.marginLeft = totalMargin + 'px';
    } else {
        totalMargin = totalMargin - 1758;
        slider_secao1_div.style.marginLeft = totalMargin + 'px';
    }
});

/*BOTAO 2*/
var botao2_slider_secao1 = document.getElementById('botao2_slider');
var img_botao2 = document.getElementById('botao2_slider_img');
botao2_slider_secao1.addEventListener('mouseover', function() {
    img_botao2.style.display = 'block';
});
botao2_slider_secao1.addEventListener('mouseout', function() {
    img_botao2.style.display = 'none';
    img_botao2.style.transform = 'scale(1.0)';
});

var contadorCliques2Secao1 = 0;
slider_secao1_div.style.marginLeft ='0px';
botao2_slider_secao1.addEventListener('click', function() {
    if (slider_secao1_div.style.marginLeft == 0 + 'px') {
        totalMargin = -12306;
        slider_secao1_div.style.marginLeft = totalMargin + 'px';
    } else {
        totalMargin = totalMargin + 1758;
        slider_secao1_div.style.marginLeft = totalMargin + 'px';
        
    }
});


