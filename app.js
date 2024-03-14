document.getElementById('form_header').addEventListener('submit', function (e) {
    e.preventDefault();
    // Coloque aqui o código que você quer executar quando o formulário for submetido
});

var botao1 = document.getElementById('botao_formulario');
var input_form = document.getElementById('input_formulario');
var div_form = document.getElementById('form_header');

botao1.addEventListener('click', function () {
    if (input_form.style.width == '0px') {
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
function funcao_Sliders(slider_interno_Id, botao1_slider_Id, botao1_slider_img_Id, botao2_slider_Id, botao2_slider_img_Id) {
    var totalMargin = 0;
    var sliderDiv = document.getElementById(slider_interno_Id);
    var button1 = document.getElementById(botao1_slider_Id);
    var button1Img = document.getElementById(botao1_slider_img_Id);
    var button2 = document.getElementById(botao2_slider_Id);
    var button2Img = document.getElementById(botao2_slider_img_Id);

    button1.addEventListener('mouseover', function () {
        button1Img.style.display = 'block';
    });

    button1.addEventListener('mouseout', function () {
        button1Img.style.display = 'none';
        button1Img.style.transform = 'scale(1.0)';
    });

    button1.addEventListener('click', function () {
        if (sliderDiv.style.marginLeft < -16006 + 'px') {
            totalMargin = 0;
            sliderDiv.style.marginLeft = totalMargin + 'px';
        } else {
            totalMargin = totalMargin - 1758;
            sliderDiv.style.marginLeft = totalMargin + 'px';
        }
    });

    button2.addEventListener('mouseover', function () {
        button2Img.style.display = 'block';
    });

    button2.addEventListener('mouseout', function () {
        button2Img.style.display = 'none';
        button2Img.style.transform = 'scale(1.0)';
    });

    sliderDiv.style.marginLeft = '0px';

    button2.addEventListener('click', function () {
        if (sliderDiv.style.marginLeft == 0 + 'px') {
            totalMargin = -12306;
            sliderDiv.style.marginLeft = totalMargin + 'px';
        } else {
            totalMargin = totalMargin + 1758;
            sliderDiv.style.marginLeft = totalMargin + 'px';
        }
    });
}
function funcao_Sliders_Secao4(slider_interno_Id, botao1_slider_Id, botao1_slider_img_Id, botao2_slider_Id, botao2_slider_img_Id) {
    var totalMargin = 0;
    var sliderDiv = document.getElementById(slider_interno_Id);
    var button1 = document.getElementById(botao1_slider_Id);
    var button1Img = document.getElementById(botao1_slider_img_Id);
    var button2 = document.getElementById(botao2_slider_Id);
    var button2Img = document.getElementById(botao2_slider_img_Id);

    button1.addEventListener('mouseover', function () {
        button1Img.style.display = 'block';
    });

    button1.addEventListener('mouseout', function () {
        button1Img.style.display = 'none';
        button1Img.style.transform = 'scale(1.0)';
    });

    button1.addEventListener('click', function () {
        console.log(totalMargin)
        if (sliderDiv.style.marginLeft < '-18058px') {

        } else {
            console.log(totalMargin)
            totalMargin = totalMargin - 1700;
            console.log(totalMargin)
            sliderDiv.style.marginLeft = totalMargin + 'px';
        }
    });

    button2.addEventListener('mouseover', function () {
        button2Img.style.display = 'block';
    });

    button2.addEventListener('mouseout', function () {
        button2Img.style.display = 'none';
        button2Img.style.transform = 'scale(1.0)';
    });

    var totalMargin = -1;
    button2.addEventListener('click', function () {
        sliderDiv.style.marginLeft = totalMargin + 'px';

        if (totalMargin == -22915) {
            totalMargin = -1;
        } else {
            totalMargin += -1206;
        }
    });
}
/*SLIDER SECAO 1 */
funcao_Sliders('div_slider_interno', 'botao1_slider', 'botao1_slider_img', 'botao2_slider', 'botao2_slider_img');

/*SLIDER SECAO 2 */
funcao_Sliders('div_slider_secao2_interno', 'botao1_slider_secao2', 'botao1_slider_secao2_img', 'botao2_slider_secao2', 'botao2_slider_secao2_img');

/*SLIDER SECAO 3 */
funcao_Sliders('div_slider_secao3_interno', 'botao1_slider_secao3', 'botao1_slider_secao3_img', 'botao2_slider_secao3', 'botao2_slider_secao3_img');

/* SLIDER SECAO 4 */
funcao_Sliders_Secao4('div_slider_secao4_interno', 'botao1_slider_secao4', 'botao1_slider_secao4_img', 'botao2_slider_secao4', 'botao2_slider_secao4_img');



/*SLIDER SECAO 5 */
funcao_Sliders('div_slider_secao5_interno', 'botao1_slider_secao5', 'botao1_slider_secao5_img', 'botao2_slider_secao5', 'botao2_slider_secao5_img');

/*SLIDER SECAO 6 */
funcao_Sliders('div_slider_secao6_interno', 'botao1_slider_secao6', 'botao1_slider_secao6_img', 'botao2_slider_secao6', 'botao2_slider_secao6_img');


/*SLIDER SECAO 7 */
funcao_Sliders('div_slider_secao7_interno', 'botao1_slider_secao7', 'botao1_slider_secao7_img', 'botao2_slider_secao7', 'botao2_slider_secao7_img');
