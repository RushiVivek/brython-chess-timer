$(() => {
    //made by Rushi

    var gameovernow = false;

    // function if user presses submit button
    $("#b1").on("click", event => {
        event.preventDefault();
        var ttime = $("#inp").val();

        // if user enters time less than 5 then reset
        if (ttime >= 5) {
            window.totaltime = ttime;
            func2();
        }
        else {
            alert("Total Time should be greater than 5 min.");
            $("#inputform").reset();
        }
    });

    // change page if 
    function func2(){
        $("#inputform").html("<button class='button button2' id='b2'>start match</button>");
        
        $("#b2").on("click", event => {
        window.tsecs1 = window.totaltime * 60;
        window.tsecs2 = window.totaltime * 60;
        window.player = 'white';
        $("#heading").html("<p class='text text1'>White</p><p class='text text2'>Black</p>");
        $("#inputform").html("");
        $("#turn").classList = 'text button2';
        $("#turn").html("White's Turn");
        var tsec1 = window.tsecs1 % 60;
        var tmin1 = (window.tsecs1 - tsec1) / 60;
        var tsec2 = window.tsecs2 % 60;
        var tmin2 = (window.tsecs2 - tsec2) / 60;
        $("#maingame").html("<pre class='text text1' id = 't1'>    " + tmin1 + ":" + tsec1 + "    </pre><pre class='text text2' id = 1>    " + tmin2 + ":" + tsec2 + "    </pre>");
        $("#but_main").html("<button id='sp' class='button button1'>Shift Turn</button>");
        $("#sp").on("click", event => {
            switchplayer();
        });
        var idofvar = setInterval(() => {
            func4();
            if (window.gameovernow) {
                gameover();
                clearInterval(idofvar);
            }
        }, 1000);
    });
    }

    function switchplayer() {
        if (window.player == 'white') {
            window.player = 'black';
            $("#turn").html("Black's Turn");
        }
        else {
            window.player = 'white';
            $("#turn").html("White's Turn");
        }
    }

    function gameover() {
        switchplayer();
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
        $("#maingame").html("<pre class='text text1' id = 't1'>    " + tmin1 + ":" + tsec1 + "    </pre><pre class='text text2' id = 1>    " + tmin2 + ":" + tsec2 + "    </pre>");
    }
});