
let title;
let test;

$('a').each(function(){
  title= $(this).attr('data-title');
//  title= title.toLowerCase();
  console.log(title);
});


$('.input').on('keydown',function(){

  test = $('.input').val();
  test = test.toLowerCase();
  console.log(test);

  // if(test = true){
  //     $('li').show();
  //   }else{
  //     $('li').hide();
  //   }
});
