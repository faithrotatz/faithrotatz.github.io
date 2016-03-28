$(function(){
var canvas=$('.canvas');


$('#home').css({'width':$(window).width(),'height':$(window).height()})
var skillcircle=function(i,value){
var ctx=canvas.get(i).getContext('2d');
var deg=(value/100)*Math.PI*2
var j=0;
function draw(){
  j+=1;
ctx.beginPath();
ctx.clearRect(0,0,200,200)
ctx.lineWidth=6;
ctx.arc(100,100,100,0,j/180*Math.PI);
ctx.stroke();
if(j==Math.ceil(value*3.6)){
  clearInterval(tim)
}

}
var tim=setInterval(draw,10)
  $({x:0}).animate({x:value},{duration:1000,
      step:function(){
        
    $('#skill .fenshu').eq(i).text(parseInt(this.x)+'%')
       
        },
       easing:'linear'
      })	
}
$(window).scroll(function(){
var a=$(document).scrollTop();
var b=$('.our-skills').offset().top;

if((a+300)>(b)){
  skillcircle(0,95)
  skillcircle(1,95)
  skillcircle(2,95)


   
}
 	
})
//作品
$('#zuopin-list li').hover(function(){
  $(this).addClass('active')
},function(){
  $(this).removeClass('active')
}).click(function(){

saixuan($(this).attr('data'))});
var saixuan=function(value){
  $('.zuopin').css({'display':'none'})
  $('.'+value).css({'display':'block'}) 
}




})