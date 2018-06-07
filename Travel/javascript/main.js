function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//slide show
function slider()
{
  $current=$('.slider img.active');
  if($current.length==0)
  {
    $('.slider img:first-child').addClass('active');
  }
  else {
    $next=$current.removeClass('active').next();
    if($next.length==0)
    {
      $('.slider img:first-child').addClass('active');
    }
    else {
      $next.addClass('active');
    }
  }
}
setInterval(slider,3000);

//slick slider

$('.slider-slick').slick({
    dots:false,
    
    infinite:true,
    speed: 100,
    autoplay:true,
    slidesToShow: 6,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });


//popup initialise
$('.open-popup-link').magnificPopup({
  type:'inline',
  alignTop:false,
  midClick: true 


});

//music background
var audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer() {
    audio = new Audio();
    audio.src = "./audio/bg.mp3";
    audio.loop = true;
    audio.play();
    // Set object references
    playbtn = document.getElementById("play");
    mutebtn = document.getElementById("pause");
    // Add Event Handling
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);
    // Functions
    function playPause() {
        if (audio.paused) {
            audio.play();
            playbtn.innerHTML="pause";

        } else {
            audio.pause();
            playbtn.innerHTML="play";
        }
    }
    function mute() {
      if (audio.muted) {
          audio.muted = false;
          mutebtn.innerHTML="Mute";

      } else {
          audio.muted = true;
          mutebtn.innerHTML="Unmute";
      }
  }
}
  
window.addEventListener("load", initAudioPlayer);
// Stop Background Auio when Video button click
function stopBG() {
    if (audio.muted == false) {
        audio.muted = true;
        mutebtn.style.background ="oranged";
    }
}


//video popUp

$('.test-popup-link').magnificPopup({
  type: 'iframe'
  // other options
});