$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  });

function convert(){
  var x=document.getElementById("fvalue").value;
  var y=document.getElementById("convto").value;
  if(x !==''){
    if(isNaN(x)){
  document.getElementById("result").innerHTML='Pleas enter only numbers';//checking if the input is not a number.
  }
   else{ if(y=="Pound to Kg"){
    var ans=x*0.4536;
    document.getElementById("result").innerHTML= ans + " Kilograms.";
  }
  else{

    var ans=x*2.2046;
    document.getElementById("result").innerHTML= ans +" Pounds.";
  }
}
}
else{
  document.getElementById("result").innerHTML='';
}
  
}

function displayQ(){

  var arr= ["Life is about making an impact, not making an income. -Kevin Kruse", //array of quotes.

"Whatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill",

" Strive not to be a success, but rather to be of value. -Albert Einstein",

" I attribute my success to this: I never gave or took any excuse. -Florence Nightingale",

" You miss 100% of the shots you don't take. -Wayne Gretzky",

" The most difficult thing is the decision to act, the rest is merely tenacity. -Amelia Earhart",

" Every strike brings me closer to the next home run. -Babe Ruth",

"Definiteness of purpose is the starting point of all achievement. -W. Clement Stone",

"Life isn't about getting and having, it's about giving and being. -Kevin Kruse",

"Life is what happens to you while you are busy making other plans. -John Lennon",

"We become what we think about. -Earl Nightingale",

"Life is 10% what happens to me and 90% of how I react to it. -Charles Swindoll",

"The most common way people give up their power is by thinking they don't have any. -Alice Walker",

"The mind is everything. What you think you become.  -Buddha",
];
var len= arr.length;
var rand=Math.round(Math.random()*(len-1));
document.getElementById("qt").innerHTML=arr[rand];
}
function yellow(){
//reseting the class name to default 'content'
document.getElementById("q").className="content";
//adding the class name for the color clicked
document.getElementById("q").classList.add("yellow");

}

function red(){
document.getElementById("q").className="content";
document.getElementById("q").classList.add("red");

}

function green(){
document.getElementById("q").className="content";
document.getElementById("q").classList.add("green");

}

function blue(){
document.getElementById("q").className="content";
document.getElementById("q").classList.add("blue");
}

function calc(){

  var a = document.getElementById("nvalue").value;
  var b=a.split(",").map(Number);
  var len=b.length;
  var reverse=b.reverse(); 
  document.getElementById("reverse").innerHTML=reverse;
   b.sort(function(a,b){return a-b});
  document.getElementById("max").innerHTML=b[len-1];//last element of the array is max after sorting.
  document.getElementById("min").innerHTML=b[0];//first elemnt is the min after sorting.
  var sum=0;
  for (var i = b.length - 1; i >= 0; i--) {
    sum+=b[i];
  };
  document.getElementById("sum").innerHTML=sum;
  document.getElementById("avg").innerHTML=sum/len;
}

function strip(){
  var x= document.getElementById("str").value;
  x=x.split("\n");
  var y="";
  for (var i = 0; i <x.length; i++) {
    x[i]=x[i].replace(/\s+/g,' ').trim(); //removig extra space and empty lines
    if (x[i] !== '') {
      y=y+x[i]+'\n';  //adding all the elemnts of the array to a string 
    };
    
  };
  document.getElementById("str").value=y.substring(0,y.length-1);//avoiding the extra new line in the string.
  
}
function clr(){   
    document.getElementById("str").value="";
}
function upcase(){
  var x= document.getElementById("str").value;
  document.getElementById("str").value=x.toUpperCase();
}
function addnum(){
  var x= document.getElementById("str").value;
  x=x.split("\n");
  var y="";
  for (var i = 0; i <x.length; i++) {
      x[i]=i+1+'. '+x[i];
      y=y+x[i]+'\n';          
  };
  document.getElementById("str").value=y.substring(0,y.length-1);

}
function tsort(){
  var x= document.getElementById("str").value;
  x=x.split("\n");
  x.sort();
 var y="";
  for (var i = 0; i <x.length; i++) {      
      y=y+x[i]+'\n';          
  };
  document.getElementById("str").value=y.substring(0,y.length-1);
}

function trvs(){
  var x= document.getElementById("str").value;
  x=x.split("\n");
 var y="";
  for (var i = 0; i <x.length; i++) {   
      x[i]=x[i].split("").reverse().join("");
      y=y+x[i]+'\n';          
  };
  document.getElementById("str").value=y.substring(0,y.length-1);
}
function shuffle(){
 var x= document.getElementById("str").value;
  x=x.split("\n");
 var y="";
  for (var i = x.length-1; i >=0; i--) {
    var j=Math.round(Math.random()*(x.length-1));//random number to swap elements in array
      var tmp=x[i];
      x[i]=x[j];
      x[j]=tmp;                        
  };
  for (var i = 0; i <x.length; i++) {      
      y=y+x[i]+'\n';          
  };
  document.getElementById("str").value=y.substring(0,y.length-1);  
}

function date(){
  var date=new Date();
  date=date.toDateString();
  document.getElementById("date").innerHTML =date;
  document.getElementById("lastmod").innerHTML =document.lastModified;
  document.getElementById("loc").innerHTML =window.location;
}