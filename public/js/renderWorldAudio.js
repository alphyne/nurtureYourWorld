

function play() {
    const audio = document.getElementById('audio');
    audio.play();

    document.getElementById('scrim').classList.add('hidden');
    document.getElementById('buttonContainer').classList.add('hidden');
    document.getElementById('enterButton').classList.add('hidden');

    //document.getElementById('soundcloudButton').classList.add('show');
}