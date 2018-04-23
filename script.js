/*function start*/
var pingPong = function(number) {
  if ((myNumber % 3 === 0) || (myNumber % 5 === 0)) {
    return true;
  } else {
    return false;
  };
};
/*function end*/
/*user interface */
  $(document).ready(function() {
  $("form#formInput").submit(function(event) {
    $("ul").empty();
    var myNumber = parseInt($("input#numberEntry").val());
    /* bussiness logic */


    for (i = 1; i <= myNumber; i++)
      if (i % 3 === 0 && i % 5 === 0) {
        $("ul").append("<li><img src ='d.png' width='20'>  <img src ='b.png' width='20'></li>");

      } else if (i % 3 === 0) {
      $("ul").append("<li> <img src ='d.png' width='20'></li>");

    } else if (i % 5 === 0) {
      $("ul").append("<li> <img src ='b.png' width='20'></li>");
    } else {
      $("ul").append("<li>" + i + "</li>");
    }
    event.preventDefault();
  });
});
