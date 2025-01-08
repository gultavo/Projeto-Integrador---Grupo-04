document.addEventListener('DOMContentLoaded', function() {

    function readContent() {
        for (let i = 0; i < 27; i++) {
            var text = document.getElementsByClassName('text')[i].innerText;
            var voice = 'Brazilian Portuguese Female';
            responsiveVoice.speak(text, voice);
        
    }}

    const primeiro = document.getElementById('primeiro');
    primeiro.addEventListener('click', function(){
        readContent();
    });
});