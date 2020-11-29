$(document).ready(formSubmitAction);

var timers = new Map();
var growth = new Map();
var lastIndx = 1;


function formSubmitAction() {
    $("#circles").empty();
    $("#draw").click(onFormSubmit);
    $('#btnClear').click(clearAll);
    drawCircle(0);
    circleGrow(0);
}

function clearAll() {
    $("#circles").children().each((i, e) => {
        $(e).click();
    });
}

function onFormSubmit() {
    for (var i = 0; i < parseInt($("#number-circles").val()); ++i) {
        drawCircle(lastIndx + i);
        circleGrow(lastIndx + i);
    }
    lastIndx += parseInt($("#number-circles").val());
}

function drawCircle(indx) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    $("#circles").append($("<span>", {
        "id": "circle" + indx,
        "css": {
            "left": getRandomInt($( document ).width()),
            "height": $("#width").val() + "px",
            "width": $("#width").val() + "px",
            "background-color": "#" + randomColor,
            "border-radius": "50%",
            "position": "fixed",
            "margin": "10px",
            "opacity": "1"
        },
        "click": function () {
            $("#circle" + indx).remove();
            clearInterval(timers.get(indx));
            timers.delete(indx);
        },
        "mousemove": function () {
            $("#circle" + indx).css("opacity", parseFloat($("#circle" + indx).css("opacity")) - 0.005);
        },
        "mouseout": function () {
            $("#circle" + indx).css("opacity", "1");
        }
    }));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(parseInt(max) - parseInt($("#width").val())));
}

function circleGrow(indx) {
    growth.set(indx, parseInt($("#growth-amount").val()));
    timers.set(indx, setInterval(function () {
        $("#circle" + indx).css("height", function (idx, old) {
            return parseInt(old) + growth.get(indx) + "px";
        });
        $("#circle" + indx).css("width", function (idx, old) {
            return parseInt(old) + growth.get(indx) + "px";
        });
    }, parseInt($("#grow-rate").val())));
}

