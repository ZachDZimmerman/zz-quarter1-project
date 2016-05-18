$(document).ready(function() {

  $('#refresh').click(function() {
      randomQuote = true
      getBackgroundImage();
  })

  $('#quote').click(function() {
      $('.quote').empty();
      if (randomQuote = true) {
          getRandomQuote();
      }
  })

  $('#background').click(function() {
          randomQuote = false;
          getBackgroundImage();
      })

      // $('#screenshot')click(function() {
      // })

  // Hosting variables to run in functions
  var currentRandomQuote;
  randomQuote = true;
  getRandomQuote();
  getBackgroundImage();


  // Getting Random Quote
  function getRandomQuote() {
      $.get("https://www.reddit.com/r/quotes/top/.json?sort=top&t=month", function(data) {
          var random = Math.floor(Math.random() * 25);
          // console.log(random);
          currentRandomQuote = data.data.children[random].data.title;
          // console.log(currentRandomQuote);
          $('.quote').append(currentRandomQuote);
      })
  }




  //Getting Random Space Image
  function getBackgroundImage() {
      $.get("https://www.reddit.com/r/spaceporn/top/.json?sort=top&t=all", function(data) {
          var goodImages = [];
          // Makes sure images have valid file names
          for (var i = 0; i < data.data.children.length; i++) {
              var image = data.data.children[i].data.url;
              if (image.match(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i)) {
                  goodImages.push(image);
              }
          }
          // console.log(goodImages);
          var random = Math.floor(Math.random() * goodImages.length);
          // console.log(random);
          $('body').css('background-image', 'url(' + goodImages[random] + ')');
      })
  }
});
