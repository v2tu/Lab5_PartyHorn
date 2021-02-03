// main.js
document.getElementById('volume-slider').addEventListener('input', function()
{
    var x = document.getElementById('volume-slider').value
    document.getElementById('volume-number').value = x
    if (x >= 67)
    {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById('honk-btn').disabled = false
    }else if(x >= 34)
    {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById('honk-btn').disabled = false
    }else if(x >= 1)
    {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById('honk-btn').disabled = false
    }else
    {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById('honk-btn').disabled = true
    }
});

document.getElementById('volume-number').addEventListener('input', function()
{
    var y = document.getElementById('volume-number').value
    document.getElementById('volume-slider').value = y
    if (y >= 67)
    {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById('honk-btn').disabled = false
    }else if(y >= 34)
    {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById('honk-btn').disabled = false
    }else if(y >= 1)
    {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById('honk-btn').disabled = false
    }else
    {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById('honk-btn').disabled = true
    }
});

document.getElementById('radio-air-horn').addEventListener('click', function()
{
    document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3"
    document.getElementById('sound-image').src = "./assets/media/images/air-horn.svg"
});

document.getElementById('radio-car-horn').addEventListener('click', function()
{
    document.getElementById('horn-sound').src = "./assets/media/audio/car-horn.mp3"
    document.getElementById('sound-image').src = "./assets/media/images/car.svg"
});

document.getElementById('radio-party-horn').addEventListener('click', function()
{
    document.getElementById('horn-sound').src = "./assets/media/audio/party-horn.mp3"
    document.getElementById('sound-image').src = "./assets/media/images/party-horn.svg"
});

document.getElementById('honk-btn').addEventListener('click', function(event)
{
    event.preventDefault()
    var vol = document.getElementById('volume-number').value
    if(vol >= 1)
    {
        document.getElementById('horn-sound').volume = vol / 100
        document.getElementById('horn-sound').play() 
    }
});