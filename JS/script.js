  
var a;
function  my(){
     if(a==1)
     {
       document.getElementById("hid").style.display="none";
      return a=0;
     }
     else{
       document.getElementById("hid").style.display="flex";
       return a=1;
     }
}