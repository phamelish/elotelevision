document.addEventListener("DOMContentLoaded", function() {

    let spanishButton = document.getElementById('spanish');
    spanishButton.addEventListener('click', function(){
        translate('esp');
    });
});

function translate(lang){
    new google.translate.TranslateElement({pageLanguage: lang}, 'google_translate_element');
}
