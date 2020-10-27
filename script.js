function countDown(sec, elem)
{
     var element = document.getElementById(elem);
     element.innerHTML=sec;
     if(sec<1)
     {
          clearTimeout(timer);
          document.getElementById('countdown').innerHTML="0"
          // element.innerHTML='<h1 style="padding:0px;font-size:59px">Time Up!</h1>';
     }
     sec--;
     var timer =setTimeout('countDown('+sec+',"'+elem+'")', 1000 );

}