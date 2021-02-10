const darkInit = () => {
    renderDarkWindow();
    declareDarkEvents();
}

const renderDarkWindow = () => {
    $('body').append(`
    <div class="dark_window" id="id_dark_window">
    <div class="dark_box_inside">
    <div class="center">
    <img id="id_dark_img" src="" class="w-50 float-left mr-2">
    </div>
    <h2 id="id_dark_title" class="text-center mt-3 display-5"></h2>
    <div id="id_dark_p" class="text-center my-3" style="font-size:1.5em;"></div>
      <div id="id_darkplay" class="my-3 d-flex justify-content-center align-items-end">
      </div>
      <div id="id_link" class="d-flex justify-content-center mb-3">
      </div>
      <div class="d-flex justify-content-center align-items-end">
      <button id="dark_close_btn" class="btn btn-danger">close</button>
      </div>
    </div>
  </div>
    `);
}

const declareDarkEvents = () => {
    $("#dark_close_btn").on("click", () => {
        $("#id_dark_window").fadeOut(300);
    })
}
const showDark = (_album, _title, _rank, _play, _artist, _link) => {
    $("#id_dark_window").fadeIn(500);
    $("#id_dark_window").css("display", "flex");
    $("#id_dark_img").attr("src", _album);
    $("#id_dark_title").html(_artist);
    $("#id_dark_p").html(_title)
    $("#id_link").html(`<a href="${_link}" target="_blank">Buy Me</a>`)
    $("#id_darkplay").html(`<audio controls><source src="${_play}"></audio>`);
    console.log(showDark);
}