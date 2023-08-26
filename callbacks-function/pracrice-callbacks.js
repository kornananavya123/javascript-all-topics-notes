function downloadSong(song,writeToFile) {
    console.log("song downloading started...")
    console.log("song downloading completed")
    console.log("your song =>", song)
}

isSongDownloaded="true"

if(isSongDownloaded) {
    writeToFile(song)
} else {
    console.log("songdownloaded not true")
}

downloadSong("natu.mp3",function writeToFile(song){
    console.log("writing to file started")
    console.log("writing completed")

    let songFileName = song + ".text";
    console.log("your file=>", songfilenmae)

})