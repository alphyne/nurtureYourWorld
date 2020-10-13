

function play() {
    const audio = document.getElementById('audio');
    audio.play();

    document.getElementById('scrim').classList.add('hidden');
    document.getElementById('modalContainer').classList.add('hidden');
    document.getElementById('enterButton').classList.add('hidden');
    document.getElementById('enterDetails').classList.add('hidden');

    //document.getElementById('soundcloudButton').classList.add('show');
}