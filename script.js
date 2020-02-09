const sleepBtn = document.getElementById("sleep");
const huntBtn = document.getElementById('hunt');
const listenbtn = document.getElementById('listen');
const danceBtn = document.getElementById('dance');
const playBtn = document.getElementById('play');
const restBtn = document.getElementById('rest');

const status =  document.getElementById('status');

function handleStart(){
    document.getElementById("image").src="assets/start1.png";
    setTimeout(function(){ document.getElementById("image").src="assets/start2.png"; }, 2000);

    setTimeout(function(){ document.getElementById("image").src="assets/start3.png"; }, 4000);

    status.innerHTML = 'Oi, sou o Tamagotchi, o que vamos fazer?'
}

rest.addEventListener('click', () => {
    document.body.setAttribute('class', '')
    document.body.classList.add('bg-rest')
    var element = document.getElementById('image');
    element.parentNode.removeChild(element);

    var imgDiv = document.getElementById('imgDiv');
    var newElement = document.createElement('IMG');
    newElement.setAttribute('id', 'image');
    newElement.src = 'assets/rest.png'
    imgDiv.appendChild(newElement)

    status.innerHTML = 'Tamagotchi está descansando'
    
})

play.addEventListener('click', () => {
    document.body.setAttribute('class', '')
    document.body.classList.add('bg-play')
    var element = document.getElementById('image');
    element.parentNode.removeChild(element);

    var imgDiv = document.getElementById('imgDiv');
    var newElement = document.createElement('IMG');
    newElement.setAttribute('id', 'image');
    newElement.src = 'assets/play.png'
    imgDiv.appendChild(newElement)

    status.innerHTML = 'Tamagotchi está brincando'
    
})

danceBtn.addEventListener('click', () => {
    document.body.setAttribute('class', '')
    document.body.classList.add('bg-dance')
    var element = document.getElementById('image');
    element.parentNode.removeChild(element);

    var imgDiv = document.getElementById('imgDiv');
    var newElement = document.createElement('IMG');
    newElement.setAttribute('id', 'image');
    newElement.src = 'assets/dance.png'
    imgDiv.appendChild(newElement)

    status.innerHTML = 'Tamagotchi está dançando'
    
})

listenbtn.addEventListener('click', () => {
    document.body.setAttribute('class', '')
    document.body.classList.add('bg-listen')
    var element = document.getElementById('image');
    element.parentNode.removeChild(element);

    var imgDiv = document.getElementById('imgDiv');
    var newElement = document.createElement('IMG');
    newElement.setAttribute('id', 'image');
    newElement.src = 'assets/music.png'
    imgDiv.appendChild(newElement)

    status.innerHTML = 'Tamagotchi está ouvindo música'
    
})

sleepBtn.addEventListener('click', () => {
    document.body.setAttribute('class', '')
    document.body.classList.add('bg-sleep')
    var element = document.getElementById('image');
    element.parentNode.removeChild(element);

    var imgDiv = document.getElementById('imgDiv');
    var newElement = document.createElement('IMG');
    newElement.setAttribute('id', 'image');
    newElement.src = 'assets/sleep.png'
    imgDiv.appendChild(newElement)

    status.innerHTML = 'Tamagotchi está dormindo'
    
})

huntBtn.addEventListener('click', () => {
    document.body.setAttribute('class', '')
    document.body.classList.add('bg-hunt')
    var element = document.getElementById('image');
    element.parentNode.removeChild(element);

    var imgDiv = document.getElementById('imgDiv');
    var newElement = document.createElement('IMG');
    newElement.setAttribute('id', 'image');
    newElement.src = 'assets/hunt.png'
    imgDiv.appendChild(newElement)

    status.innerHTML = 'Tamagotchi está comendo'
    
})