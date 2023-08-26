function downloadSong(song,  writeToFile) {
    console.log(" song downloading started......");

    console.log("song downloading complete....");

    console.log("your song =>", song);
    
   isSongDownloaded = true;
   // isSongDownloaded = false;

   if(isSongDownloaded) {
    writeToFile(song);
   } else {
    console.log("song is not downloaded");
   }
    
}

downloadSong("natu.mp3", function writeToFile(song) {
 console.log("writing to file started......");

    console.log("writing completed...........");

    let songFileName = song +  ".text";
    console.log("your file =>", songFileName);
    
    let isFileRead = true;

    if(isFileRead) {
 uploadToDrive(); // first we write function after the fucction is complted then we will write function before if condition 
    } else {
      console.log("uploading can't done");
    }

function uploadToDrive() {
    console.log("uploading to drive stared.....");

    console.log("uploading completed....");

    let uploadLink ="https//www.abc.com/link/" + songFileName;

    console.log("uploaded link => ", uploadLink);
}
  });