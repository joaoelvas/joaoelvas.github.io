function showPopup()
{

  $('#opaco').height($(document).height()).removeClass('hidden').fadeTo('slow', 0.9);
  $('#popup').removeClass('hidden').fadeTo('slow', 1);
  
    
};
function closePopup()
{

  $('#opaco').height($(document).height()).addClass('hidden').fadeTo('slow', 1);
  $('#popup').addClass('hidden').fadeTo('slow', 1);
  
    
};


function calculate() {
  var option1 = $("input[name=optionsFloor]:checked").val();
  option1 = parseFloat(option1);

  var option2 = $("input[name=options2]:checked").val();
  option2 = parseFloat(option2);

  var option3 = 0;  
  $("input[name=options3]:checked").each(function(){
    var number = $(this).val();
    number = parseFloat(number);
    option3+=number;
  });

  var option5 = $('#range2').text();
  option5 = parseFloat(option5);
  
 
  var price=option1+option2+option3+option5;

  $('#total').text("Total price: "+price+"$");
};

$(document).ready(function(){
  var option4 = 30000;
  $('.slideblock .button').click(showPopup);  
  $('.contact').click(showPopup);
  $('#popup .fa-times').click(closePopup);

  calculate();
  
  $('form').change(function(){
      calculate();
  });

  $("#area").slider({min: 100,
    max: 1000,
    step:10,

  slide:function(event,ui){
      var area = ui.value;
      $("#range").html( area + " m2" );
      option4 = area*300;
      $("#range2").html(option4);
      calculate();
   }  

    
    
});

  $('.slider4').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10
  });

});