//made by Rushi

gameovernow = false;

// function if user presses submit button
function func1(){
    var x = document.getElementById("inputform");
    var ttime;
    ttime = x[0].value;

    // if user enters time less than 5 then reset
    if (ttime >= 5) {
        window.totaltime = ttime;
        func2();
    }
    else {
        alert("Total Time should be greater than 5 min.");
        x.reset();
    }
}

// change page if 
function func2(){
    document.getElementById("inputform").innerHTML = "<button class='button button2' onclick='func3()'>start match</button>";
}

function func3() {
    window.tsecs1 = window.totaltime * 60;
    window.tsecs2 = window.totaltime * 60;
    window.player = 'white';
    document.getElementById("heading").innerHTML = "<p class='text text1'>White</p><p class='text text2'>Black</p>";
    document.getElementById("inputform").innerHTML = "";
    document.getElementById("turn").classList = 'text button2';
    document.getElementById("turn").innerHTML = "White's Turn";
    var tsec1 = window.tsecs1 % 60;
    var tmin1 = (window.tsecs1 - tsec1) / 60;
    var tsec2 = window.tsecs2 % 60;
    var tmin2 = (window.tsecs2 - tsec2) / 60;
    document.getElementById("maingame").innerHTML = "<pre class='text text1' id = 't1'>    " + tmin1 + ":" + tsec1 + "    </pre><pre class='text text2' id = 1>    " + tmin2 + ":" + tsec2 + "    </pre>";
    document.getElementById("but_main").innerHTML = "<button onclick='switchplayer()' class='button button1'>Shift Turn</button>";
    var idofvar = setInterval(() => {
        func4();
        if (window.gameovernow) {
            gameover();
            clearInterval(idofvar);
        }
    }, 1000);
}

function switchplayer() {
    if (window.player == 'white') {
        window.player = 'black';
        document.getElementById("turn").innerHTML = "Black's Turn";
    }
    else {
        window.player = 'white';
        document.getElementById("turn").innerHTML = "White's Turn";
    }
}

function gameover() {
    winner = window.player;
    document.body.innerHTML = "<div id = 'gameoverpage' class='text button2'>"+winner+" wins!</div>";
}

function func4() {
    if (player == 'white') {
        window.tsecs1 = window.tsecs1 - 1;
    }
    else {
        window.tsecs2 = window.tsecs2 - 1;
    }
    var tsec1 = window.tsecs1 % 60;
    var tmin1 = (window.tsecs1 - tsec1) / 60;
    var tsec2 = window.tsecs2 % 60;
    var tmin2 = (window.tsecs2 - tsec2) / 60;
    if ((window.tsecs1 <= 0) || (window.tsecs2 <= 0)) {
        window.gameovernow = true;
    }
    document.getElementById("maingame").innerHTML = "<pre class='text text1' id = 't1'>    " + tmin1 + ":" + tsec1 + "    </pre><pre class='text text2' id = 1>    " + tmin2 + ":" + tsec2 + "    </pre>";
}
