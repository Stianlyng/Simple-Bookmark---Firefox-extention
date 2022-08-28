/*
Open a new tab, and load the page into it.
*/
function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "https://github.com"
   });
}


/*
Add openMyPage() as a listener to clicks on the browser action.

*/
browser.browserAction.onClicked.addListener(openMyPage);
 
