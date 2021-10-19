// resimleri ve sesleri burada dizi içinde tanımladım 
images = ["resources/images/1.png", "resources/images/2.png", "resources/images/3.png","resources/images/4.png","resources/images/5.png"]; 
audios = ["resources/audios/1.mp3", "resources/audios/2.mp3"]

//resim ve ses id'lerini değiştirelemez şeklinde const ile tanımladım
const imageContent = document.getElementById("imageContent");
const audioContent = document.getElementById("audioContent");

//içerik butonları başlangıç ataması dinamik şekilde yapılıyor
function initializeContentButtons()
{
    contentButtons = document.getElementsByClassName("contentButton");
    for (let i = 0; i < contentButtons.length; i++)
    {
        loadImageFunc = "loadImage(" + i + ", event); ";
        loadAudioFunc = "loadAudio(" + i % 2 + ")"; // elimizde 2 adet ses dosyası var
        contentButtons[i].setAttribute("onclick", loadImageFunc + loadAudioFunc);

        contentButtons[i].innerHTML = (i + 1) + ". İçerik";//html kısmına innerHtml kodu ile içeriklerimizi yazdırıyoruz
    }
}

initializeContentButtons();

// eğer butona tıklandı ise contentbutton'a buton tıklandı class'ını ekliyoruz
function loadImage(contentIndex, event)
{
    imageContent.src = images[contentIndex];

    contentButton = event.target;
    contentButton.classList.add("buttonClicked");

    checkAllClickedState();
}

//bütün butonlara tıklanıp tıklanmadığını kontrol edip ileri butonunu görünür hale getirdim
function checkAllClickedState()
{
    query = document.querySelectorAll(".contentButton:not(.buttonClicked)");
    if(query.length == 0)
    {
        continueButton = document.getElementById("continueButton");
        continueButton.style.visibility = "visible";
    }
}

// ses butonlarını aktif etme
function loadAudio(contentIndex)
{
    audioButtons = document.getElementsByClassName("audioButton");
    for (let i = 0; i < audioButtons.length; i++)
    {
        audioButtons[i].style.visibility = "visible";
    }

    audioContent.src = audios[contentIndex];

    audioPlayStop('Play');
}

// ses dosyalarının başlatma ve durdurma işlemini bu fonksiyonda gerçekleştirdim
function audioPlayStop(PlayStop)
{
    if(PlayStop == 'Play')
    {
        audioContent.play();
    }
    else if(PlayStop == 'Stop')
    {
        audioContent.pause();
    }
}