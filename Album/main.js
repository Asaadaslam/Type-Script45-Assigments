"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artist1", "title1");
console.log(album1);
const album2 = make_album("Artist2", "title2");
console.log(album2);
const album3 = make_album("Artist3", "title3", 12);
console.log(album3);
