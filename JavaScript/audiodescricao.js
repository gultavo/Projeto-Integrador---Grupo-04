document.addEventListener('DOMContentLoaded', function() {

    function readContent() {
        for (let i = 0; i < 100; i++) {
            var text = document.getElementsByClassName('text')[i];
            if (text.tagName.toLowerCase() === 'img'){
                if (segundo.state == false) {
                    var alt = text.alt;
                    var voice = 'Brazilian Portuguese Female';
                    responsiveVoice.speak(alt, voice);
                }
                else if (segundo.state == true) {
                    var alt = text.alt;
                    var voice = 'US English Male';
                    responsiveVoice.speak(alt, voice);
                }
            }
            else{
                if (segundo.state == false) {
                    var text = text.innerHTML;
                    var voice = 'Brazilian Portuguese Female';
                    responsiveVoice.speak(text, voice);
                }
                else if (segundo.state == true) {
                    var text = text.innerHTML;
                    var voice = 'US English Male';
                    responsiveVoice.speak(text, voice);
                }
            }

    }};

    const primeiro = document.getElementById('primeiro');
    primeiro.addEventListener('click', function(){
        readContent();
    });
});