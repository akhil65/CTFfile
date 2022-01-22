var el_up = document.getElementById("UBGenC_UP");
var el_down = document.getElementById("UBGenC_DOWN");
el_up.innerHTML = "Click on the button to disable right click";
			
			
function UBGenC_Run() {
	document.addEventListener('contextmenu',
			event => event.preventDefault());
	el_down.innerHTML = "Right click disabled";
			}
  //the source reveals my favourite secret sauce 
  // DUCTF{n0_k37chup_ju57_54uc3_r4w_54uc3_9873984579843} 
