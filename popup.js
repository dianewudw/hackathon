let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
//changeColor is currently a variable that happens to change color
changeColor.onclick = function(element) {
    //passing in a function definition which takes in one parameter that is called element
  let color = element.target.value;
  //making sure whatever we're changing is the current window and tab
  //object is checking parameters
  //callback function - please return the tab that is active
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        //whatever code you want to run on the tab
        //window.alert --> adding more functionality to the page
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};