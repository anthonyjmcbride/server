// One way to wait for the HTML to be loaded into JavaScript
// window.addEventListener('load', function() {
  //console.log(document.getElementById("our-text-input")); //this code doesn't run till the window is fully loaded
// });

 window.addEventListener('load', function() {
   var textField = document.getElementById('our-text-input'); // puts text box into a variable
   textField.addEventListener('change', function(event) { // attatched an event listener 'change' to textField variable
    console.log('something changed'); // log 'something chnaged' when changed happen in the text box
    console.log(event.target.value); // logs the 'event' target value which is the text we entered in the textbox
  });
});

// function onChangeHandler(input) {
//   console.log("something changed");
//   console.log(input.value);
// }
