$(() => {
    $("#load").click(getBoot);
    creatingLoadingScreen();
});

let url = "https://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/loader.php?delay=1";

function creatingLoadingScreen() {
    let loadingScreen = $("<img>", { src: 'images/loading.gif', class: "loadingScreen" }).hide();
    let loadingText = $('<div>', { 'text': "loading...", class: "loadingScreen" }).hide();
    $(document).ajaxStart(() => {
        $(".loadingScreen").show();
    }).ajaxStop(() => {
        $(".loadingScreen").hide();
    })
    $("#container").append(loadingText, loadingScreen);
}

function getBoot() {
    $("#boot").children().remove();
    $.get(url, { "delay": 0 })
        .done((data) => { $("#boot").append($("<img>", { src: data })); })
        .fail((xhr, status) => console.error(xhr, status));
}
