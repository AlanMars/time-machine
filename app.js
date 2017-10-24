var videoshow = require('videoshow')

var images = [
    __dirname + '/asset/images/1.jpg',
    __dirname + '/asset/images/2.jpg',
    __dirname + '/asset/images/3.jpg',
    __dirname + '/asset/images/4.jpg',
    __dirname + '/asset/images/5.jpg',
    __dirname + '/asset/images/6.jpg',
    __dirname + '/asset/images/7.jpg',
    __dirname + '/asset/images/8.jpg',
    __dirname + '/asset/images/9.jpg',
    __dirname + '/asset/images/10.jpg'
]

var audio = __dirname + '/asset/audios/slow-shape of you lyrics.mp3'

var outputVideo = __dirname + '/output/USS-video.mp4'

var videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '1920x1080', //'640x?',
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
