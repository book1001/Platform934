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



// Responsive: P1-1 ------------------------------------------------

function p1_magicSpells_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p1_magicSpells_1_Tablet()
  } else { // PC: 601px ~
    p1_magicSpells_1_PC()
  }
}

function p1_magicSpells_1_Tablet() {
  document.getElementById("p1_magicSpells_1").style.display = "block";
  document.getElementById("p1_magicSpells_2").style.display = "none";
  document.getElementById("btn_p1_1").style.color = "#000000";
  document.getElementById("btn_p1_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p1_2").style.color = "#ffffff";
  document.getElementById("btn_p1_2").style.textShadow = "none";
}

function p1_magicSpells_1_PC() {
  document.getElementById("p1_magicSpells_1").style.display = "block";
  document.getElementById("p1_magicSpells_2").style.display = "block";
  document.getElementById("btn_p1_1").style.color = "#000000";
  document.getElementById("btn_p1_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p1_2").style.color = "#ffffff";
  document.getElementById("btn_p1_2").style.textShadow = "none";
}


// Responsive: P1-2 ------------------------------------------------

function p1_magicSpells_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p1_magicSpells_2_Tablet()
  } else { // PC: 601px ~
    p1_magicSpells_2_PC()
  }
}

function p1_magicSpells_2_Tablet() {
  document.getElementById("p1_magicSpells_1").style.display = "none";
  document.getElementById("p1_magicSpells_2").style.display = "block";
  document.getElementById("btn_p1_1").style.color = "#ffffff";
  document.getElementById("btn_p1_1").style.textShadow = "none";
  document.getElementById("btn_p1_2").style.color = "#000000";
  document.getElementById("btn_p1_2").style.textShadow = "0 0 6px #f595f3";
}

function p1_magicSpells_2_PC() {
  document.getElementById("p1_magicSpells_1").style.display = "block";
  document.getElementById("p1_magicSpells_2").style.display = "block";
  document.getElementById("btn_p1_1").style.color = "#ffffff";
  document.getElementById("btn_p1_1").style.textShadow = "none";
  document.getElementById("btn_p1_2").style.color = "#000000";
  document.getElementById("btn_p1_2").style.textShadow = "0 0 6px #f595f3";
}


// Responsive: P2-1 ------------------------------------------------

function p2_infiniteFigures_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p2_infiniteFigures_1_Tablet()
  } else { // PC: 601px ~
    p2_infiniteFigures_1_PC()
  }
}

function p2_infiniteFigures_1_Tablet() {
  document.getElementById("p2_infiniteFigures_1").style.display = "block";
  document.getElementById("p2_infiniteFigures_2").style.display = "none";
  document.getElementById("btn_p2_1").style.color = "#000000";
  document.getElementById("btn_p2_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p2_2").style.color = "#ffffff";
  document.getElementById("btn_p2_2").style.textShadow = "none";
}

function p2_infiniteFigures_1_PC() {
  document.getElementById("p2_infiniteFigures_1").style.display = "block";
  document.getElementById("p2_infiniteFigures_2").style.display = "block";
  document.getElementById("btn_p2_1").style.color = "#000000";
  document.getElementById("btn_p2_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p2_2").style.color = "#ffffff";
  document.getElementById("btn_p2_2").style.textShadow = "none";
}


// Responsive: P2-2 ------------------------------------------------

function p2_infiniteFigures_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p2_infiniteFigures_2_Tablet()
  } else { // PC: 601px ~
    p2_infiniteFigures_2_PC()
  }
}

function p2_infiniteFigures_2_Tablet() {
  document.getElementById("p2_infiniteFigures_1").style.display = "none";
  document.getElementById("p2_infiniteFigures_2").style.display = "block";
  document.getElementById("btn_p2_1").style.color = "#ffffff";
  document.getElementById("btn_p2_1").style.textShadow = "none";
  document.getElementById("btn_p2_2").style.color = "#000000";
  document.getElementById("btn_p2_2").style.textShadow = "0 0 6px #f595f3";
}

function p2_infiniteFigures_2_PC() {
  document.getElementById("p2_infiniteFigures_1").style.display = "block";
  document.getElementById("p2_infiniteFigures_2").style.display = "block";
  document.getElementById("btn_p2_1").style.color = "#ffffff";
  document.getElementById("btn_p2_1").style.textShadow = "none";
  document.getElementById("btn_p2_2").style.color = "#000000";
  document.getElementById("btn_p2_2").style.textShadow = "0 0 6px #f595f3";
}


// Responsive: P3-1 ------------------------------------------------

function p3_ghosts_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p3_ghosts_1_Tablet()
  } else { // PC: 601px ~
    p3_ghosts_1_PC()
  }
}

function p3_ghosts_1_Tablet() {
  document.getElementById("p3_ghosts_1").style.display = "block";
  document.getElementById("p3_ghosts_2").style.display = "none";
  document.getElementById("btn_p3_1").style.color = "#000000";
  document.getElementById("btn_p3_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p3_2").style.color = "#ffffff";
  document.getElementById("btn_p3_2").style.textShadow = "none";
}

function p3_ghosts_1_PC() {
  document.getElementById("p3_ghosts_1").style.display = "block";
  document.getElementById("p3_ghosts_2").style.display = "block";
  document.getElementById("btn_p3_1").style.color = "#000000";
  document.getElementById("btn_p3_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p3_2").style.color = "#ffffff";
  document.getElementById("btn_p3_2").style.textShadow = "none";
}


// Responsive: P3-2 ------------------------------------------------

function p3_ghosts_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p3_ghosts_2_Tablet()
  } else { // PC: 601px ~
    p3_ghosts_2_PC()
  }
}

function p3_ghosts_2_Tablet() {
  document.getElementById("p3_ghosts_1").style.display = "none";
  document.getElementById("p3_ghosts_2").style.display = "block";
  document.getElementById("btn_p3_1").style.color = "#ffffff";
  document.getElementById("btn_p3_1").style.textShadow = "none";
  document.getElementById("btn_p3_2").style.color = "#000000";
  document.getElementById("btn_p3_2").style.textShadow = "0 0 6px #f595f3";
}

function p3_ghosts_2_PC() {
  document.getElementById("p3_ghosts_1").style.display = "block";
  document.getElementById("p3_ghosts_2").style.display = "block";
  document.getElementById("btn_p3_1").style.color = "#ffffff";
  document.getElementById("btn_p3_1").style.textShadow = "none";
  document.getElementById("btn_p3_2").style.color = "#000000";
  document.getElementById("btn_p3_2").style.textShadow = "0 0 6px #f595f3";
}


// Responsive: P4-1 ------------------------------------------------

function p4_platform_1() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p4_platform_1_Tablet()
  } else { // PC: 601px ~
    p4_platform_1_PC()
  }
}

function p4_platform_1_Tablet() {
  document.getElementById("p4_platform_1").style.display = "block";
  document.getElementById("p4_platform_2").style.display = "none";
  document.getElementById("btn_p4_1").style.color = "#000000";
  document.getElementById("btn_p4_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p4_2").style.color = "#ffffff";
  document.getElementById("btn_p4_2").style.textShadow = "none";
}

function p4_platform_1_PC() {
  document.getElementById("p4_platform_1").style.display = "block";
  document.getElementById("p4_platform_2").style.display = "block";
  document.getElementById("btn_p4_1").style.color = "#000000";
  document.getElementById("btn_p4_1").style.textShadow = "0 0 6px #f595f3";
  document.getElementById("btn_p4_2").style.color = "#ffffff";
  document.getElementById("btn_p4_2").style.textShadow = "none";
}



// Responsive: P4-2 ------------------------------------------------

function p4_platform_2() {
  var tabletStyle = window.matchMedia("(max-width: 600px)");
  if (tabletStyle.matches) { // ~ Tablet: 600px
    p4_platform_2_Tablet()
  } else { // PC: 601px ~
    p4_platform_2_PC()
  }
}

function p4_platform_2_Tablet() {
  document.getElementById("p4_platform_1").style.display = "none";
  document.getElementById("p4_platform_2").style.display = "block";
  document.getElementById("btn_p4_1").style.color = "#ffffff";
  document.getElementById("btn_p4_1").style.textShadow = "none";
  document.getElementById("btn_p4_2").style.color = "#000000";
  document.getElementById("btn_p4_2").style.textShadow = "0 0 6px #f595f3";
}

function p4_platform_2_PC() {
  document.getElementById("p4_platform_1").style.display = "block";
  document.getElementById("p4_platform_2").style.display = "block";
  document.getElementById("btn_p4_1").style.color = "#ffffff";
  document.getElementById("btn_p4_1").style.textShadow = "none";
  document.getElementById("btn_p4_2").style.color = "#000000";
  document.getElementById("btn_p4_2").style.textShadow = "0 0 6px #f595f3";
}


// Responsive: Window Resize ------------------------------------------------

window.onresize = function(event) {
  p1_magicSpells_1();
  p1_magicSpells_2();
  p2_infiniteFigures_1();
  p2_infiniteFigures_2();
  p3_ghosts_1();
  p3_ghosts_2();
  p4_platform_1();
  p4_platform_2();
};
