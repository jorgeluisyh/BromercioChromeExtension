
// let url = "empty"
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // alert(url);
    document.getElementById("urlnoticia").value=url;

    // use `url` here inside the callback because it's asynchronous!
});
// alert("hola");