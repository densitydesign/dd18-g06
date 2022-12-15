// scroll top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//-------------------------- shapes --------------------------//
// $(function(){
//         //prepare Your data array with img urls
//         var dataArray=new Array();
//         dataArray[0]="SVG/shape1.svg";
//         dataArray[1]="SVG/shape2.svg";
//         dataArray[2]="SVG/shape3.svg";
//         dataArray[3]="SVG/shape4.svg";
//         dataArray[4]="SVG/shape5.svg";
//         dataArray[5]="SVG/shape6.svg";
//         dataArray[6]="SVG/shape7.svg";
//         dataArray[7]="SVG/shape8.svg";
//
//         //start with id=0
//         var thisId=0;
//
//         window.setInterval(function(){
//             $('#shapes').attr('src', dataArray[thisId]);
//             thisId++; //increment data array id
//             if (thisId==8) thisId=0; //repeat from start
//         },500);
//     });

//---------------------------- get mouse x,y -------------------------//
const pos = { x : 0, y : 0 };

const saveCursorPosition = function(x, y) {
        pos.x = (x / window.innerWidth).toFixed(2);
        pos.y = (y / window.innerHeight).toFixed(2);

        document.documentElement.style.setProperty('--x', pos.x);
        document.documentElement.style.setProperty('--y', pos.y);
        // console.log(pos.x);
     }

  document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })


//parallax
  // var scene = document.getElementById('scene');
  // var parallaxInstance = new Parallax(scene);

  var scene = document.getElementById('scene2');
  var parallaxInstance = new Parallax(scene);

  var scene = document.getElementById('scene3');
  var parallaxInstance = new Parallax(scene);


var w;
var h;
//------------------------------- get scroll ---------------------------//
function draw() {

    w = window.innerWidth;
    h = window.innerHeight;


    window.onscroll = function (e) {
    // console.log(window.scrollY); // Value of scroll Y in px
    let scrolled = window.scrollY;
    let margin;
    let fontSize;
    let opacity;

//----------------------------- 1st trigger -----------------------------//
    let trigger1 = h*0.6;

    opacity = map(scrolled, 0, trigger1, 1, 0);
    margin = map(scrolled, 0, trigger1, 35, 0);
    fontSize = map(scrolled, 0, trigger1, 10, 2);

    document.documentElement.style.setProperty('--opacity', opacity);
    document.documentElement.style.setProperty('--margin', margin + 'vh');
    document.documentElement.style.setProperty('--fontSize', fontSize + 'vw');
    console.log(window.scrollY);

    if (margin <= 0) {
      document.documentElement.style.setProperty('--margin', 0);
      document.documentElement.style.setProperty('--fontSize', 2 + 'vw');
    }

    if (scrolled >= trigger1){
      document.getElementById("menu").style.background = "linear-gradient(180deg, rgba(11,13,32,1) 50%, rgba(11,13,32,0) 90%)";
      document.getElementById("btn1").style.opacity = "1"; document.getElementById("btn1").style.visibility = "visible";
      document.getElementById("btn2").style.opacity = "1"; document.getElementById("btn2").style.visibility = "visible";
      document.getElementById("btn3").style.opacity = "1"; document.getElementById("btn3").style.visibility = "visible";
    }
    else if (scrolled <= trigger1){
      document.getElementById("menu").style.background = "transparent";
      document.getElementById("btn1").style.opacity = "0"; document.getElementById("btn1").style.visibility = "hidden";
      document.getElementById("btn2").style.opacity = "0"; document.getElementById("btn2").style.visibility = "hidden";
      document.getElementById("btn3").style.opacity = "0"; document.getElementById("btn3").style.visibility = "hidden";
    }

//----------------------------- 2nd trigger -----------------------------//
    let trigger2 = h;
    if (scrolled >= trigger2){
      document.getElementById("para1").style.opacity = "1";
      document.getElementById("freccia1").style.transform = "rotate(0deg)";
    }
    else if (scrolled <= trigger2){
      document.getElementById("para1").style.opacity = "0";
      document.getElementById("freccia1").style.transform = "rotate(-45deg)";
    }

//----------------------------- 3rd trigger -----------------------------//
    let trigger3 = h*1.5;
    if (scrolled >= trigger3){
      document.getElementById("para2").style.opacity = "1";
      document.getElementById("freccia2").style.transform = "rotate(0deg)";
    }
    else if (scrolled <= trigger3){
      document.getElementById("para2").style.opacity = "0";
      document.getElementById("freccia2").style.transform = "rotate(-45deg)";
    }

//----------------------------- 4th trigger -----------------------------//

    let trigger4 = h*2.6;
    if (scrolled >= trigger4){
      document.getElementById("para3").style.opacity = "1";
      document.getElementById("freccia3").style.transform = "rotate(0deg)";
    }
    else if (scrolled <= trigger4){
      document.getElementById("para3").style.opacity = "0";
      document.getElementById("freccia3").style.transform = "rotate(-45deg)";
    }

//----------------------------- 5th trigger -----------------------------//

    let trigger5 = h*4;
    if (scrolled >= trigger5){
      document.getElementById("para4").style.opacity = "1";
      document.getElementById("freccia4").style.transform = "rotate(0deg)";
    }
    else if (scrolled <= trigger5){
      document.getElementById("para4").style.opacity = "0";
      document.getElementById("freccia4").style.transform = "rotate(-45deg)";
    }

//----------------------------- 6th trigger -----------------------------//

    let trigger6 = h*4.8;
    if (scrolled >= trigger6){
      document.getElementById("para5").style.opacity = "1";
      document.getElementById("freccia5").style.transform = "rotate(0deg)";
    }
    else if (scrolled <= trigger6){
      document.getElementById("para5").style.opacity = "0";
      document.getElementById("freccia5").style.transform = "rotate(-45deg)";
    }


  };
}

//-------------------------- change image hover ----------------------------//

$(function() {
    $("#txt_1")
        .mouseover(function() {
          $( '#my_image' ).attr("src","assets/home_imgs/hover1.png");
          $( '#my_image' ).css("opacity","1");
        })
        .mouseout(function() {
            $( '#my_image' ).css("opacity","0");
        });
});

$(function() {
    $("#txt_2")
        .mouseover(function() {
          $( '#my_image' ).attr("src","assets/home_imgs/hover2.png");
          $( '#my_image' ).css("opacity","1");
        })
        .mouseout(function() {
            $( '#my_image' ).css("opacity","0");
        });
});

$(function() {
    $("#txt_3")
        .mouseover(function() {
          $( '#my_image' ).attr("src","assets/home_imgs/hover3.png");
          $( '#my_image' ).css("opacity","1");
        })
        .mouseout(function() {
            $( '#my_image' ).css("opacity","0");
        });
});

//-------------------------- catalogue atlas hover ----------------------------//

$(function() {
    $("#catalogue")
        .mouseover(function() {
          $( '#my_image2' ).attr("src","assets/home_imgs/cover1.png");
          $( '#my_image2' ).css("opacity","1");
        })
        .mouseout(function() {
            $( '#my_image2' ).css("opacity","0");
        });
});

$(function() {
    $("#atlas")
        .mouseover(function() {
          $( '#my_image2' ).attr("src","assets/home_imgs/cover2.png");
          $( '#my_image2' ).css("opacity","1");
        })
        .mouseout(function() {
            $( '#my_image2' ).css("opacity","0");
        });
});



function scrittaSi(x) {
  let t = x.id;
  let tDef = t.replaceAll('-', ' ');
  let Testo = document.getElementById("Testo");
  Testo.innerText = "Prompt: " + tDef;

  let Box = document.getElementById("BoxTesto");
  Box.style.display = "block";

  const onMouseMove = (e) => {
  Box.style.left = e.pageX + "px";
  Box.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);
}

function ScrittaNo(x) {
  let Box = document.getElementById("BoxTesto");
  Box.style.display = "none";
}
