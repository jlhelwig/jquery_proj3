/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***

test


=======================================================
*/


$(document).ready(function() {



// Question #1
$('.changeColor').click(function(){
  $(".l3").css( 'color' , '#8A2BE2');
});


// $("button").click(function(){
//     $("p").css("color", "red");
// });

// <p>1.
  // <button class="changeColor">Click Here</button> to change the color of the third "li" element.</p>
// Question #2
$(".l4").click(function()  {
  $(".l4").append("<li>This is a new item</li>");
});

// <p>2. When the forth item is clicked, add another beneath it.</p>
//
// Question #3
$("#removeLi").click(function()  {
  $(".l2").hide();

});
// Question #4

$('ul li:last-child').click(function() {
  $('li').hide();
  $('ul li:last-child').css('font-size' , '40px');
});
// <p>4. When the last list item is clicked, change its font size to 40px and hide all other items.</p>
//HELP THIS DOESNT WORK!!!!
// Question #5


  $('.cute').click(function() {
    $(this).clone().appendTo($('.clones'));
  });

// <p>5. When the image of the dog is clicked, make another image  of me! There is already an empty container with the ID 'clones' you can put my duplicates.</p>
// <img class="cute" src="images/puppy.jpg" alt="puppy">
// <div class="clones"></div>
//
// <hr>

  // Question #6
$("html").dblclick(function(){
  $("#makeSquare").css("height" , "300px");
});

  // <p>6. On a double-click anywhere on the page, turn this rounded rectangle into a square.<br>
  // HINT: use .dblclick() instead of .click()</p>
  // <div id="makeSquare"></div>
// Question #7

$('.black').click(function() {
    $('html').css('background-image', 'none');
    $('html').css('background-color', 'black');
    $('p').css('color', '#fff');
  });
  $('.wood').click(function() {
    // var background = $('.wood').css('background-image'); why use this verbage???
    $('html').css('background-image', $('.wood').css('background-image'));
	$('p').css('color', '#fff');
  });

  $('.chaos').click(function() {
      var background = $('.chaos').css('background-image');
      $('html').css('background-image', background);
  	$('p').css('color', 'yellow');
    });
// link on chaos doesn't seem to work anymore

      $('.restore').click(function() {
       $('html').css('background-image', 'none');
       $('html').css('background-color', '#fff');
       $('p').css('color', '#000');
    });

// <p>7. On click, change the page background to match these beautiful swatches. The forth swatch restores the changes back to normal.</p>
// <div class="swatches">
//   <div class="black swatch"></div>
//   <div class="wood swatch"></div>
//   <div class="chaos swatch"></div>
//   <div class="restore swatch"></div>
// </div>

  // Question #8
$("#hover").hover(function() {
  $("#hover").css("background-color" , "red");
  }, function(){
  $("#hover").css("background-color", "#39B7CD");
  $("#hover").click(function() {
$(this).toggleClass ('green');

  });


});


  // <p>8. When your mouse is over the box, turn it red.<br>
  //  Add the class 'green' when clicked (this adds a green border to the box).<br>
  //  Remove the class 'green' when clicked again.<br>
  // <br>
  // HINT: When we're manipulating an item through a specific order of events,<br>
  // the best practice is to nest your $selector.action() statements.</p>
  // <div id="hover"></div>

});
