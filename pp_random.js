// pp: Random Moving Div ------------------------------------------------

let origElementPool = [
  '.pp1', 
  '.pp2', 
  '.pp3', 
  '.pp4', 
  '.pp5',
  '.pp6', 
  '.pp7', 
  '.pp8', 
  '.pp9', 
  '.pp10',
  '.pp11', 
  '.pp12', 
  '.pp13', 
  '.pp14', 
  '.pp15',
  '.pp16',
  '.pp17',
  '.pp18',
  '.pp19',
  '.pp20',
  '.pp21'
];

let currElementPool;

$(document).ready(function(){
  shuffleArray(origElementPool);
    
  currElementPool = [...origElementPool];
  
  for(let i=0; i<3; i++) {
    if(currElementPool.length > 0) {
      console.log("init");
      animateDiv(currElementPool[0]);
      currElementPool.shift(); // remove currElementPool[0] in currElementPool array
    }
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function animateDiv(myclass){
    console.log("animateDiv");
    var newq = makeNewPosition();
    var oldq = $(myclass).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    // $(myclass).css("display", "block");
    $(myclass).css("pointer-events", "auto");
    $(myclass).animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(myclass);
      $(myclass).css("display", "block");
    });

    $(myclass).hover(function() {
        $(this).stop();
        $(this).children().css("opacity", "1");
    });
    $(myclass).off("click").click(function () {
      var $this = $(this);
      $this.css("display", "none");
      $this.children().css("opacity", "");
      
      // create new element
      if(currElementPool.length == 0) {
        shuffleArray(origElementPool);
    
        currElementPool = [...origElementPool];
        currElementPool = currElementPool.filter(function(element) {
            return !$(element).hasClass($this[0].classList[0]) && $(element).css("display") !== "block";
        });
      }
      
      console.log($this[0].classList[0] + " clicked");
      if($(currElementPool[0]).children().css("opacity") == 1) {
        console.log("opacity");
        $(currElementPool[0]).children().css("opacity", "");
      }
      animateDiv(currElementPool[0]);
      currElementPool.shift();
   });
};


function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.05;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}
