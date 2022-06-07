window.addEventListener("mousemove", function (e) {
	var to_append = document.getElementsByClassName('loader-container')[0];
	var all = document.getElementsByClassName('loader-container');

	var parent_div = document.createElement('div');
	parent_div.className = "loader-container";
	var inner_div = document.createElement('div');
	inner_div.className = "loader";
	parent_div.appendChild(inner_div)
	var d = document.body.appendChild(parent_div);

	parent_div.style.left = (e.clientX - 50)+'px';
	parent_div.style.top = (e.clientY - 50)+'px';

	if(document.getElementsByClassName('loader-container').length > 50) {
		document.body.removeChild(to_append)
	}
});

// CIRCLE 

// document.addEventListener("mousemove",function(event){
//     var div = document.createElement("div");
//     div.setAttribute("class","circle");
//     document.body.appendChild(div);
    
//     div.style.left = event.clientX + 'px';
//     div.style.top = event.clientY + 'px';
    
//     div.style.transition = "all 0.8s ease 0s";
    
    
//     div.style.backgroundColor = randomColor();
    
//     div.style.left = div.offsetLeft - 20 + 'px';
//     div.style.top = div.offsetTop - 20 + 'px';
//     div.style.width = '25px';
//     div.style.height = '25px';
//     div.opacity = 0;
    
    
//     setTimeout(function(){
//       document.body.removeChild(div);
//     },1000);
//   })
  
//   function randomColor(){
//     var r = Math.round(Math.random()*256);
//     var g = Math.round(Math.random()*256);
//     var b = Math.round(Math.random()*256);
//     var a = Math.random().toFixed(2);
//     return 'rgba('+r+','+g+','+b+','+a+')';
//   }