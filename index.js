// Menu Buttons ------------------------------------------------

// $('.row1').addClass('show');
$('.menu-btn#row1').addClass('menu-btn-upsidedown');

$(".menu-btn").click(function (e) {
    e.preventDefault();

    $('[class^=row]').not($('.'+this.id)).hide();

    var btns = $(".menu-btn");
    for(var i=0; i<btns.length; i++) {
      var btn = btns.eq(i);
      if(btn[0] !== $(this)[0]) {
        btn.removeClass("menu-btn-upsidedown");
        // $('.row1').addClass('show');
      }
    }

    if($(this).hasClass("menu-btn-upsidedown")) {
      $(this).removeClass("menu-btn-upsidedown");
      // $('.row1').removeClass('show');
    }
    else {
      $(this).addClass("menu-btn-upsidedown");
      // $('.row1').removeClass('show');
    }

    $('.'+this.id).slideToggle(0);
});


function menuProjects() {
  document.getElementById("main")[0].style.display = "none";
}

// Door ------------------------------------------------

// function nine_ten() {
//   document.getElementById("nine_ten").style.display = "block";
// }


// $('#nine_ten').addClass('d-btn-upsidedown');

// $(".d-btn").click(function (e) {
//     e.preventDefault();

//     $('[class^=door]').not($('.'+this.id)).hide();

//     var btns2 = $(".d-btn");
//     for(var i=0; i<btns2.length; i++) {
//       var btn2 = btns2.eq(i);
//       if(btn2[0] !== $(this)[0]) {
//         btn2.removeClass("d-btn-upsidedown");
//         // $('.row1').addClass('show');
//       }
//     }

//     if($(this).hasClass("d-btn-upsidedown")) {
//       $(this).removeClass("d-btn-upsidedown");
//       // $('.row1').removeClass('show');
//     }
//     else {
//       $(this).addClass("d-btn-upsidedown");
//       // $('.row1').removeClass('show');
//     }

//     $('.'+this.id).slideToggle(0);
// });




// $('.d-btn#door1').addClass('d-btn-upsidedown');

// $(".d-btn").click(function (e) {
//     e.preventDefault();

//     $('[class^=door]').not($('.'+this.id)).hide();

//     var btns2 = $(".d-btn");
//     for(var i=0; i<btns2.length; i++) {
//       var btn2 = btns2.eq(i);
//       if(btn2[0] !== $(this)[0]) {
//         btn2.removeClass("menu-btn-upsidedown");
//         // $('.row1').addClass('show');
//       }
//     }

//     if($(this).hasClass("menu-btn-upsidedown")) {
//       $(this).removeClass("menu-btn-upsidedown");
//       // $('.row1').removeClass('show');
//     }
//     else {
//       $(this).addClass("menu-btn-upsidedown");
//       // $('.row1').removeClass('show');
//     }

//     $('.'+this.id).slideToggle(0);
// });

// function mainDoor() {
//   document.getElementById("main-open").style.display = "none";
// }


// Are na Selector ------------------------------------------------

function p1_magicSpells_1() {
  document.getElementById("p1_magicSpells_1").style.display = "block";
  document.getElementById("p1_magicSpells_2").style.display = "none";
  document.getElementById("btn_p1_1").style.color = "#000000";
  document.getElementById("btn_p1_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p1_2").style.color = "#ffffff";
  document.getElementById("btn_p1_2").style.textShadow = "none";
}

function p1_magicSpells_2() {
  document.getElementById("p1_magicSpells_1").style.display = "none";
  document.getElementById("p1_magicSpells_2").style.display = "block";
  document.getElementById("btn_p1_1").style.color = "#ffffff";
  document.getElementById("btn_p1_1").style.textShadow = "none";
  document.getElementById("btn_p1_2").style.color = "#000000";
  document.getElementById("btn_p1_2").style.textShadow = "0 0 6px #f595f3";
}

function p2_infiniteFigures_1() {
  document.getElementById("p2_infiniteFigures_1").style.display = "block";
  document.getElementById("p2_infiniteFigures_2").style.display = "none";
  document.getElementById("btn_p2_1").style.color = "#000000";
  document.getElementById("btn_p2_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p2_2").style.color = "#ffffff";
  document.getElementById("btn_p2_2").style.textShadow = "none";
}

function p2_infiniteFigures_2() {
  document.getElementById("p2_infiniteFigures_1").style.display = "none";
  document.getElementById("p2_infiniteFigures_2").style.display = "block";
  document.getElementById("btn_p2_1").style.color = "#ffffff";
  document.getElementById("btn_p2_1").style.textShadow = "none";
  document.getElementById("btn_p2_2").style.color = "#000000";
  document.getElementById("btn_p2_2").style.textShadow = "0 0 6px #f595f3";
}

function p3_ghosts_1() {
  document.getElementById("p3_ghosts_1").style.display = "block";
  document.getElementById("p3_ghosts_2").style.display = "none";
  document.getElementById("p3_ghosts_3").style.display = "none";
  document.getElementById("btn_p3_1").style.color = "#000000";
  document.getElementById("btn_p3_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p3_2").style.color = "#ffffff";
  document.getElementById("btn_p3_2").style.textShadow = "none";
  document.getElementById("btn_p3_3").style.color = "#ffffff";
  document.getElementById("btn_p3_3").style.textShadow = "none";
}

function p3_ghosts_2() {
  document.getElementById("p3_ghosts_1").style.display = "none";
  document.getElementById("p3_ghosts_2").style.display = "block";
  document.getElementById("p3_ghosts_3").style.display = "none";
  document.getElementById("btn_p3_1").style.color = "#ffffff";
  document.getElementById("btn_p3_1").style.textShadow = "none";
  document.getElementById("btn_p3_2").style.color = "#000000";
  document.getElementById("btn_p3_2").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p3_3").style.color = "#ffffff";
  document.getElementById("btn_p3_3").style.textShadow = "none";
}

function p3_ghosts_3() {
  document.getElementById("p3_ghosts_1").style.display = "none";
  document.getElementById("p3_ghosts_2").style.display = "none";
  document.getElementById("p3_ghosts_3").style.display = "block";
  document.getElementById("btn_p3_1").style.color = "#ffffff";
  document.getElementById("btn_p3_1").style.textShadow = "none";
  document.getElementById("btn_p3_2").style.color = "#ffffff";
  document.getElementById("btn_p3_2").style.textShadow = "none";
  document.getElementById("btn_p3_3").style.color = "#000000";
  document.getElementById("btn_p3_3").style.textShadow = "0 0 6px #f595f3";
}

function p4_platform_1() {
  document.getElementById("p4_platform_1").style.display = "block";
  document.getElementById("p4_platform_2").style.display = "none";
  document.getElementById("p4_platform_3").style.display = "none";
  document.getElementById("btn_p4_1").style.color = "#000000";
  document.getElementById("btn_p4_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p4_2").style.color = "#ffffff";
  document.getElementById("btn_p4_2").style.textShadow = "none";
  document.getElementById("btn_p4_3").style.color = "#ffffff";
  document.getElementById("btn_p4_3").style.textShadow = "none";
}

function p4_platform_2() {
  document.getElementById("p4_platform_1").style.display = "none";
  document.getElementById("p4_platform_2").style.display = "block";
  document.getElementById("p4_platform_3").style.display = "none";
  document.getElementById("btn_p4_1").style.color = "#ffffff";
  document.getElementById("btn_p4_1").style.textShadow = "none";
  document.getElementById("btn_p4_2").style.color = "#000000";
  document.getElementById("btn_p4_2").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p4_3").style.color = "#ffffff";
  document.getElementById("btn_p4_3").style.textShadow = "none";
}

function p4_platform_3() {
  document.getElementById("p4_platform_1").style.display = "none";
  document.getElementById("p4_platform_2").style.display = "none";
  document.getElementById("p4_platform_3").style.display = "block";
  document.getElementById("btn_p4_1").style.color = "#ffffff";
  document.getElementById("btn_p4_1").style.textShadow = "none";
  document.getElementById("btn_p4_2").style.color = "#ffffff";
  document.getElementById("btn_p4_2").style.textShadow = "none";
  document.getElementById("btn_p4_3").style.color = "#000000";
  document.getElementById("btn_p4_3").style.textShadow = "0 0 6px #f595f3";
}


// Menu Buttons ------------------------------------------------

// function menuSyllabus() {
//   document.getElementById("notePen").style.zIndex = "10";
//   document.getElementById("notePen").style.pointerEvents = "none";
//   document.getElementById("notePen").style.mixBlendMode = "difference";
//   // if (document.getElementById("row1").style.transform === "scaleY(-1)") {
//   //   document.getElementById("row1").style.transform = "none";
//   // } else {
//   //   document.getElementById("row1").style.transform = "scaleY(-1)";
//   // }
// }

// Menu Buttons ------------------------------------------------

// if ($(window).width() > 1200) {
//   $('.menu-btn#row4').addClass('menu-btn-upsidedown');
// }

// if ($(window).width() <= 1200) {
//   $('.menu-btn#row4').removeClass('menu-btn-upsidedown');
// }


// $(".menu-btn").click(function (e) {
//     e.preventDefault();

//     $('[class^=row]').not($('.'+this.id)).hide();

//     var btns = $(".menu-btn");
//     for(var i=0; i<btns.length; i++) {
//       var btn = btns.eq(i);
//       if(btn[0] !== $(this)[0]) {
//         btn.removeClass("menu-btn-upsidedown");
//       }
//     }

//     if($(this).hasClass("menu-btn-upsidedown")) {
//       $(this).removeClass("menu-btn-upsidedown");
//     }
//     else {
//       $(this).addClass("menu-btn-upsidedown");
//     }

//     $('.'+this.id).slideToggle(500);
// });



// ------------------------------------------------



// function menuSyllabus() {
//   if (document.getElementById("row1").style.transform === "scaleY(-1)") {
//     document.getElementById("row1").style.transform = "none";
//   } else {
//     document.getElementById("row1").style.transform = "scaleY(-1)";
//   }
// }





// $(".menu-btn").click(function(e){
//      e.preventDefault();
//       id=$(this).data('target');
//       //console.log(id);
//
//
//     if($('.menu' +'#'+id).is(":visible") ) {
//       $(".menu"+'#'+id).slideUp(500);
//     }
//       else {
//            $(".menu"+'#'+id).slideToggle(500);
//             $(".menu"+'#'+id).siblings('.menu').slideUp(500);
//       }
//
//  });

// function menuSyllabus() {
//   if (document.getElementById("syllabusIframe").style.display === "block") {
//     document.getElementById("syllabusIframe").style.display = "none";
//     document.getElementById("menuSyllabusId").style.transform = "none";
//   } else {
//     document.getElementById("syllabusIframe").style.display = "block";
//     document.getElementById("menuSyllabusId").style.transform = "scaleY(-1)";
//
//     // iFrame: Schedule
//     document.getElementById("scheduleIframe").style.display = "none";
//     document.getElementById("menuScheduleId").style.transform = "none";
//     // iFrame: Are.na
//     document.getElementById("arenaIframe").style.display = "none";
//     document.getElementById("menuArenaId").style.transform = "none";
//   }
// }
//



// function menuArena(button)
// {
//   if(document.getElementById("menuArena").value=="OFF") {
//    document.getElementById("menuArena").value="ON";
//    document.getElementById("arenaIframe").style.display = "block";
//  }
//
//   else if(document.getElementById("menuArena").value=="ON") {
//    document.getElementById("menuArena").value="OFF";
//    document.getElementById("arenaIframe").style.display = "none";
//  }
// }


// iFrame: Draggable ------------------------------------------------

// $(".draggable").draggable({
//   handle: ".handle",
//   iframeFix: true,
//   start: function(event, ui) {
//     $('.frameOverlay').show();
//   },
//   stop: function(event, ui) {
//     $(".frameOverlay").hide();
//   }
// });
