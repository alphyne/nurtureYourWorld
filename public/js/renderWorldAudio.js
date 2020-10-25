


function play() {

    audio.play();
}

function enter() {

    play();
    document.getElementById('scrim').classList.add('hidden');
    document.getElementById('modalContainer').classList.add('hidden');
    document.getElementById('enterButton').classList.add('hidden');
    document.getElementById('enterDetails').classList.add('hidden');
    entered = true;

    //document.getElementById('soundcloudButton').classList.add('show');
}


function pause() {
    audio.pause();

    document.getElementById('pauseMobile').classList.add('hidden');
    document.getElementById('playMobile').classList.remove('hidden');
}

function resume() {
    play();

    document.getElementById('pauseMobile').classList.remove('hidden');
    document.getElementById('playMobile').classList.add('hidden');
}

function replay() {
    document.getElementById('pauseMobile').classList.add('hidden');
    document.getElementById('playMobile').classList.remove('hidden');
    console.log('audio ended');
};