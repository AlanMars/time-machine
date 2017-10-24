var videoshow = require('videoshow')

var images = [
    __dirname + '/asset/images/step1.jpg',
    __dirname + '/asset/images/step2.jpg',
    __dirname + '/asset/images/step3.jpg',
    __dirname + '/asset/images/step4.jpg'
]

var audio = __dirname + '/asset/audios/medium-Life is  AmPm feat.Hiro-A-Key.mp3'

var outputVideo = __dirname + '/output/video.mp4'

var videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
}

videoshow(images, videoOptions)
    .audio(audio)
    .save(outputVideo)
    .on('start', function(command) {
        console.log('=> FFmpeg process started:', command)
    })
    .on('error', function(err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
    })
    .on('end', function(output) {
        console.error('=> Video created in:', output)
    })
