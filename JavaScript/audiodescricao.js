document.addEventListener('DOMContentLoaded', function() {

    function readContent() {
        for (let i = 0; i < 27; i++) {
            var text = document.getElementsByClassName('text')[i].innerText;
            if (segundo.state == false) {
            var voice = 'Brazilian Portuguese Female';
            responsiveVoice.speak(text, voice);
        }
        else if (segundo.state == true) {
            var voice = 'US English Male';
            responsiveVoice.speak(text, voice);
        }
    }};

    const primeiro = document.getElementById('primeiro');
    primeiro.addEventListener('click', function(){
        readContent();
    });
});