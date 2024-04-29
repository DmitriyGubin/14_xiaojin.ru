$('.high-slider').slick({
	dots: true,
	infinite: false,
	slidesToShow: 1,
	prevArrow: '<div class="prev-photo"><svg width="107" height="49" viewBox="0 0 107 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M107 24.5001L2 24.5001M2 24.5001L25 47.5M2 24.5001L25 1.50011" stroke="white" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="107" height="49" viewBox="0 0 107 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01072e-06 24.5001L105 24.5001M105 24.5001L82 47.5M105 24.5001L82 1.50011" stroke="white" stroke-width="2"/></svg></div>'	
});

$('.equip-slider').slick({
	dots: true,
	infinite: false,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		],
	prevArrow: '<div class="prev-photo"><svg width="107" height="49" viewBox="0 0 107 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M107 24.5001L2 24.5001M2 24.5001L25 47.5M2 24.5001L25 1.50011" stroke="white" stroke-width="2"/></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="107" height="49" viewBox="0 0 107 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01072e-06 24.5001L105 24.5001M105 24.5001L82 47.5M105 24.5001L82 1.50011" stroke="white" stroke-width="2"/></svg></div>'
});


/******мобильное меню*******/
var mobile_burger = document.querySelector(".mobile-burger");
var mobile_menu = document.querySelector("header .for-mobile");
var mobile_shade = document.querySelector("header .mobile-shade");
var body = document.querySelector("body");
var quest_butt = document.querySelector("header .popup-quest");

if(screen.width < 1000)
{
	quest_butt.addEventListener('click', Toggle_Mobile_Menu);
}

mobile_burger.addEventListener('click', Toggle_Mobile_Menu);
mobile_shade.addEventListener('click', Toggle_Mobile_Menu);

function Toggle_Mobile_Menu()
{
	mobile_menu.classList.toggle('active');
	body.classList.toggle('overflow');
	$(mobile_shade).fadeToggle(300);
}

/******мобильное меню*******/


/********скроллинг*********/

Scroll_to_elements('.smoth_link');

function Scroll_to_elements(selector)
{
	var smoothLinks = document.querySelectorAll(selector);

	for (let item of smoothLinks)
	{
		item.addEventListener('click', function (e) 
	    {
	    	if(mobile_menu.classList.contains('active'))
	    	{
	    		Toggle_Mobile_Menu();
	    	}
	    	
	        e.preventDefault();
	        var id = item.getAttribute('href');

	        document.querySelector(id).scrollIntoView({
	            behavior: 'smooth',
	            block: 'start'
	        });
	    });
	}
}

/********скроллинг*********/

/*********Попап**********/
var my_close_equip_butt = document.querySelector('#popup-equip #close-popup-button');

$('.popup-equipment').fancybox({

    afterLoad : function(){
    		$("#popup-equip").removeClass('fadeOutDown animated');
            $("#popup-equip").addClass('fadeInUp animated');
            my_close_equip_butt.addEventListener('click',function(){
				document.querySelector('#popup-equip .fancybox-close-small').click();
			});
        },
    beforeClose : function(){
    		$("#popup-equip").removeClass('fadeInUp animated');
            $("#popup-equip").addClass('fadeOutDown animated');
        }

});


var my_close_quest_butt = document.querySelector('#popup-quest #close-popup-button-quest');

$('.popup-quest').fancybox({

    afterLoad : function(){
    		$("#popup-quest").removeClass('fadeOutDown animated');
            $("#popup-quest").addClass('fadeInUp animated');
            my_close_quest_butt.addEventListener('click',function(){
				document.querySelector('#popup-quest .fancybox-close-small').click();
			});
        },
    beforeClose : function(){
    		$("#popup-quest").removeClass('fadeInUp animated');
            $("#popup-quest").addClass('fadeOutDown animated');
        }

});

function Slider_Init()
{
    $('.popup-slider').not('.slick-initialized').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<div class="prev-photo"><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.5L1.00017 10.5L10 1.50015" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
        nextArrow: '<div class="next-photo"><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 19.5L9.99983 10.5L1 1.50015" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
    });
}

Slider_Init();

/*********Попап**********/

/****************Формы*************/
$(".phone").mask("+7(999) 999-9999");

var top_form_butt = document.querySelector("#send-order-butt-top");
var top_form = document.querySelector("#top-form");
top_form_butt.addEventListener('click',() => Send_Form(top_form));

var lower_form_butt = document.querySelector("#send-order-butt-lower");
var lower_form = document.querySelector("#lower-form");
lower_form_butt.addEventListener('click',() => Send_Form(lower_form));

var popup_form_butt = document.querySelector("#send-quest-popup");
var popup_form = document.querySelector("#quest-form");
popup_form_butt.addEventListener('click',() => Send_Form(popup_form));

var popup_form_butt_eq = document.querySelector("#send-equip-popup-butt");
var popup_form_eq = document.querySelector("#equip_form");
popup_form_butt_eq.addEventListener('click',() => Send_Form(popup_form_eq));

function Validate(form_ref, input_class)
{
	var err=0;

	var inputs = form_ref.querySelectorAll(input_class);

    for (let item of inputs)
    {
        var bool = ($(item).val() == '');

        if (bool)
        {
            err++;
            $(item).addClass("hasError");
        } 
        else 
        {
            $(item).removeClass("hasError");
        }
    }

    return err;
}

function Send_Form(form_ref)
{
	//здесь аякс, заглушка
	var err = Validate(form_ref, '.all-input');

	if (err == 0)
    {
    	form_ref.reset();
        form_ref.querySelector('.form-box.form').classList.add("hide");
        form_ref.querySelector('.form-box.succes').classList.remove("hide");

        /*
    	var formData = new FormData(form_ref);
        $.ajax({
            type: "POST",
            url: '/ajax/common.php',
            data: formData,
            processData: false,
        	contentType: false,
            dataType: "json",
            success: function(data){

                if (data.status == true)
                {
                	form_ref.reset();
                	form_ref.querySelector('.form-box.form').classList.add("hide");
                	form_ref.querySelector('.form-box.succes').classList.remove("hide");
                }
            }
        });
        */
    }
}


/********Повторить**********/

var all_forms = document.querySelectorAll('form.all-forms');
for(let item of all_forms)
{
	let repeat_butt = item.querySelector('.repeat-form');
	let form_box = item.querySelector('.form');

	let succes_box = item.querySelector('.succes');

	repeat_butt.addEventListener('click', function(){
		succes_box.classList.add('hide');
		form_box.classList.remove('hide');
	});
}
/********Повторить**********/

/********Масштабирование надписи******/
window.addEventListener('scroll', Scrolll);

var logo_back = document.querySelector('.premium .big-logo-back');

function Scrolll()
{
	let offset = logo_back.getBoundingClientRect().bottom;
	if(offset > 0)
	{
		let delta = 1 - 1/offset*50;
		if(delta < 0.1)
		{
			delta = 1;
		}
		logo_back.style.scale = delta;
	}
}

/********Масштабирование надписи******/

/********доставка****************/
$vars = $('.about_pay .tab_item');
$butts = $('.payment .butt_item');
$butts.on('click', function() {
	var id = $(this).attr('id');
	$vars.addClass('hide');

	$vars.each(function(){
		if($(this).hasClass(id))
		{
			$(this).removeClass('hide');
		}
	});

	$butts.removeClass('active');
	$(this).addClass('active');
});
/********доставка****************/

/**************табы****************/
$('.quest_box .tab_item').on('click', function() {
	$(this).find('.answer').slideToggle('slow');
	$(this).find('.arrow').toggleClass('active');
});
/**************табы****************/

/*******************карта******************/
var x_point = 55.048513;
var y_point = 82.911446;
var adress_point = 'г. Новосибирск, ул. Советская 64, офис 312';

ymaps.ready(init);

function init () 
{
			var myMap = new ymaps.Map("map_box", {
				center: [x_point,y_point],
				zoom: 15,
				controls: [],//без элементов управления
			}, {
				searchControlProvider: 'yandex#search'
			}),
    // Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
    HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
    	"{{ properties.address }}" +
    	"</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                	var el = this.getElement(),
                	result = null;
                	if (el) {
                		var firstChild = el.firstChild;
                		result = new ymaps.shape.Rectangle(
                			new ymaps.geometry.pixel.Rectangle([
                				[0, 0],
                				[firstChild.offsetWidth, firstChild.offsetHeight]
                				])
                			);
                	}
                	return result;
                }
            }
            );

//https://yandex.ru/dev/maps/jsbox/2.1/icon_customImage

    function Add_point(x, y, adress)
    {
        var myPlacemark = new ymaps.Placemark([x, y], 
        { 
            iconContent: '',
            balloonContent: '<p class="ballon-title">' + adress + '</p>'
        },
        {  
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/black.png',
            iconImageSize: [46, 53],
            iconImageOffset: [-23, -26],
            iconContentOffset: [0, 0]
        });
        myMap.geoObjects.add(myPlacemark);
    }

    Add_point(x_point, y_point, adress_point);
}
/*******************карта******************/