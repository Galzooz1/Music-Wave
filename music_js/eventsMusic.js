const viewEventsInit = () => {
    searchBtn();
    sortFunc();
    costumelink();
    reverseEvent();
    shuffleEvent();
}

const searchBtn = () => {
    $("#id_btn").on("click", () => {
        if ($("#id_search").val().length >= 1) {
            let searchQ = $("#id_search").val();
            let myApi = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=" + searchQ;
            doApi(myApi);
        }
    })
    $("#id_search").on("keyup", (event) => {
        if (event.keyCode == 13) {
            event.preventDefault();
            $("#id_btn").click();
        }
    })
}

const sortFunc = () => {
    $("#id_select").on("change", () => {
        sortSongs($("#id_select").val());
    })

}

const costumelink = () => {
    $(".top a").on("click", function() {
        let searchlink = $(this).data("artist");
        let newUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${searchlink}`
        doApi(newUrl);
    })
}

const reverseEvent = () => {
    // $("#id_rev").toggleClass("btn btn-danger");
    // document.querySelector("#id_rev").className = "btn btn-danger";
    // $("#id_rev").addClass("btn btn-danger");
    $("#id_rev").toggleClass("btn-danger");


    // $("#id_rev").css("background", "red");
    $("#id_rev").on("click", () => {
        // if ($("#id_rev").css("background") != "green") {
        //     $("#id_rev").css("background", "green");
        // } else if ($("#id_rev").css("background") == "green") {
        //     $("#id_rev").css("background", "red");
        // }

        // if (document.querySelector("#id_rev").className == "btn-danger") {
        //     alert("show")
        // }
        // if ($("#id_rev").css({ "background": "red" })) {
        //     $("#id_rev").css({ "background": "green" })
        // }
        // $("#id_rev").toggleClass("btn-success");
        // if (("#id_rev").toggleClass("btn btn-danger")) {
        //     $("#id_rev").ClassRemove("btn btn-danger");
        //     $("#id_rev").toggleClass("btn btn-success");
        // } else {
        //     $("#id_rev").toggleClass("btn btn-danger");
        // }
        reversedItems();
    })
}

const shuffleEvent = () => {
    $("#id_shuf").on("click", () => {
        shuffleItems();
    })
}