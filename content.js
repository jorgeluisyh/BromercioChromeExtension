chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		switch (request.action) {
			case 'readAll': 
				ReadArticles();
				break;
			case 'removeAds': 
				removeAds();
				break;
			default: break;
		}
		console.clear();
	}
);

function ReadArticles(){
	if(document.querySelector('.overflow-hidden')){
		document.querySelector('.overflow-hidden').style.overflow = "scroll"; 
	}

    if(document.querySelector('#sign-modal')){
		document.querySelector('#sign-modal').firstElementChild.style.display = "none"; 
	}
		 
	if(document.querySelector('#contenedor')){
		document.querySelector('#contenedor').removeAttribute("style");
	}
	// if(document.querySelector('#app div div')){
	// 	document.querySelector('#app div div').lastElementChild.style.display = "none";
	// }

	// if(document.querySelector('.css-mcm29f')){
	// 	document.querySelector('.css-mcm29f').style.overflowY = "scroll";
	// 	document.querySelector('.css-mcm29f').lastElementChild.style.display="none";
	// }
	if(document.querySelector('#_adr_abp_container_1')){
        document.querySelector('#_adr_abp_container_1').removeAttribute("style");
		document.querySelector('#_adr_abp_container_1').style.display = "none";
	}
}

// funcion no implementada
function removeAds(){
	document.querySelectorAll('[id*="wrapper"]').forEach(function(item){item.style.display = "none";});

	document.querySelectorAll('[data-testid="StandardAd"]').forEach(function(item){
		item.parentNode.parentElement.remove();
	});
}

window.onload = function () {
	ReadArticles();
	setInterval(ReadArticles(), 10000);    
	console.clear();
  };