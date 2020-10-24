

function play() {
    const audio = document.getElementById('audio');
    audio.play();
}

function enter() {

    play();
    document.getElementById('scrim').classList.add('hidden');
    document.getElementById('modalContainer').classList.add('hidden');
    document.getElementById('enterButton').classList.add('hidden');
    document.getElementById('enterDetails').classList.add('hidden');

    //document.getElementById('soundcloudButton').classList.add('show');
}


function pause() {
    const audio = document.getElementById('audio');
    audio.pause();

    document.getElementById('pauseMobile').classList.add('hidden');
    document.getElementById('playMobile').classList.remove('hidden');
}

function resume() {
    play();

    document.getElementById('pauseMobile').classList.remove('hidden');
    document.getElementById('playMobile').classList.add('hidden');
}