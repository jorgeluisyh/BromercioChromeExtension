  document.getElementById("myButton").addEventListener("click", Scraper);

  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
  const valueTofind = '"story-contents__content  story-content__nota-premium paywall no_copy" style="display:none;opacity:0;user-select:none;visibility:hidden"';
  const valueToReplace = '"story-contents__content  story-content__nota-premium paywall no_copy"';

  function Scraper() {
    let yourUrl = document.getElementById('url').value;
  fetch(corsAnywhere + yourUrl, {
      method: 'GET',
      headers: new Headers({
          /*'Content-Type': 'application/json',*/
          'Access-Control-Allow-Origin': '*',
      }),
  })
      .then((response) => response.text())
      .then((data) => document.getElementById("iframe").srcdoc=data.replace(valueTofind, valueToReplace))
      .catch((err) => console.log(err));
};


