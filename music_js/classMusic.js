class Songs {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.song = _item.title;
        this.artist = _item.artist.name;
        this.artistimg = _item.artist.picture;
        this.album = _item.album.cover;
        this.albumbig = _item.album.cover_big;
        this.duration = _item.duration;
        this.play = _item.preview;
        this.rank = _item.rank;
        this.link = _item.artist.link;
    }
    render() {
        const secsToTime = (_secs) => {
            let mins = Math.floor(_secs / 60);
            if (mins < 10) {
                mins = "0" + mins;
            }
            let secs = _secs % 60;
            if (secs < 10) {
                secs = "0" + secs;
            }
            return mins + ":" + secs;
        }
        let newDiv = $(`<div class="menu"></div>`);
        $(this.parent).append(newDiv);
        $(newDiv).append(`
        <div class="content artist">
        <img src="${this.artistimg}">
    </div>
    <div class="content name">${this.song}</div>
    <div class="content album">
        <img src="${this.album}">
    </div>
    <div class="content duration">${secsToTime(this.duration)}</div>
    <div class="content rank">${this.rank}</div>
    `)
        $(this.parent).append(`<hr>`);
        $(newDiv).on("click", () => {
            showDark(this.albumbig, this.song, this.rank, this.play, this.artist, this.link);
        })
    }
}