/**
 Javascript has events to provide a dynamic interface to a webpage.
These events are hooked to elements in the Document Object Model(DOM).
**/

/**
  These events by default use bubbling propagation 
  i.e, upwards in the DOM from children to parent. We can bind events either as inline or in an external script. 
 **/

  //some javascript examples are .....onclick event, onchange event, onkeyup event, onmouseover event...etc

  // onclick event
  <html>
  <head>
    <script>
      function hiThere() {
        alert('Hi there!')
      }
    </script>
  </head>
  <body>
    <button type="button" onclick="hiThere()">Click me event</button>
  </body>
</html>



