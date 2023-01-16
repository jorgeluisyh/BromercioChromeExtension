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

function deleteAllCookies() {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}}

function ReadArticles(){
	deleteAllCookies();

	swal({
        background: 'rgba(0,0,123,0.001) ',
        showConfirmButton: false,
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://raw.githubusercontent.com/jorgeluisyh/BromercioChromeExtension/main/images/snail_loading.gif")
            center center
            no-repeat
        `
        })

	if(document.querySelector('.tp-modal-open')){
		document.querySelector('.tp-modal-open').removeAttribute("style");
		document.querySelector('.tp-modal-open').className = document.querySelector('.tp-modal-open').className.replace('tp-modal-open', '');
	}

	if(document.querySelector('.tp-modal')){
		document.querySelector('.tp-modal').removeAttribute("style");
	}
	if(document.querySelector('.tp-backdrop.tp-active')){
		document.querySelector('.tp-backdrop.tp-active').removeAttribute("style");
	}

	if(document.querySelector('.overflow-hidden')){
		document.querySelector('.overflow-hidden').style.overflow = "scroll"; 
	}

    if(document.querySelector('#sign-modal')){
		document.querySelector('#sign-modal').style.display = "none";
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

	if(document.querySelector('.app_gdpr--2k2uB')){
		document.querySelector('.app_gdpr--2k2uB').removeAttribute("style");
		document.querySelector('.app_gdpr--2k2uB').style.display = "none";
	}


	swal.clickConfirm();
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