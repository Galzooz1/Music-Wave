let songs_ar;
const managerInit = () => {
    let urlApi = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=arctic monkeys";
    doApi(urlApi);
}

const doApi = async(_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    createSongs(data.data);
}

const createSongs = (_ar) => {
    $("#id_songs").empty();
    _ar.map(item => {
        let songs = new Songs("#id_songs", item);
        songs.render();
    })
    songs_ar = _ar;
}

const sortSongs = (_sort) => {
    songs_ar = _.sortBy(songs_ar, _sort);
    songs_ar.reverse();

    createSongs(songs_ar);
}

const reversedItems = (_reverse) => {
    songs_ar = _.reverse(songs_ar, _reverse);
    createSongs(songs_ar);
}

const shuffleItems = (_shuffle) => {
    songs_ar = _.shuffle(songs_ar, _shuffle);
    createSongs(songs_ar);
}

const burgerInit = () => {
    $(document).ready(function() {
        $("#id_burger").on("click", () => {
            $("#id_nav_burger").slideToggle();
        })
    })
}