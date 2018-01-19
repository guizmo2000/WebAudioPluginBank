/*
In this file we try to ask ths plugin tested for all the required API methods
You get the status off all of it in the test.html file
*/
window.onload = function () {
  let wrapper = document.getElementById("APITest");
  let plugin = document.getElementById("WCdelay");

  try {
    var msg = document.createElement('p');
    plugin.getEffect().getMetadata();
    msg.innerHTML="Your plugin does implement the metadata Json description";
    msg.setAttribute('style','color : green');
    wrapper.appendChild(msg);
  } catch (error) {
    msg.innerHTML="Your plugin does not implement the metadata Json description";
    msg.setAttribute('style','color : red');
    wrapper.appendChild(msg);
  }

  try {
    var msg = document.createElement('p');
    plugin.getEffect().getDescriptor();
    msg.innerHTML="Your plugin does implement the descriptor Json description";
    msg.setAttribute('style','color : green');
    wrapper.appendChild(msg);
  } catch (error) {
    msg.innerHTML="Your plugin does not implement the descriptor Json description";
    msg.setAttribute('style','color : red');
    wrapper.appendChild(msg);
  }

 //plugin.getEffect().getParam("name");

  try {
    var msg = document.createElement('p');
    plugin.getEffect().getParam("name");
    msg.innerHTML="Your plugin does implement getParam() method file the 'name' field "+plugin.getEffect().getParam("name");
    msg.setAttribute('style','color : green');
    wrapper.appendChild(msg);
  } catch (error) {
    msg.innerHTML="Your plugin does not implement getParam() method file the 'name' field";
    msg.setAttribute('style','color : red');
    wrapper.appendChild(msg);
  }

};
