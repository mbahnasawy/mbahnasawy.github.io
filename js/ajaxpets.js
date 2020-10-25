window.onload = () => {
    $("input").click(updatePic);
};

let url = "http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php";

function updatePic(e) {
    $.ajax(url, {
        "data": { "animal": this.value },
        crossDomain: true
    }).done(displayPic)
        .fail((err) => { console.log(err); });
}

function displayPic(response) {
    console.log(response);
    $("#pictures > img").remove();
    $("#pictures").append(response);
}
