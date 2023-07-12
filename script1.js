const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeslider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio("tunes/a.wav");
//by default, audio src is "a" tune  

const playTune =(key)=>{
    audio.src = `tunes/${key}.wav`
    audio.play(); //playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    //getting clicked key element
    clickedKey.classList.add("active");
    //adding active class to the clicked key
    setTimeout(()=>{
        clickedKey.classList.remove("active")
    },150)
    //removing the active class after 150ms from the clicked key element
    // console.log(allKeys);
}
pianoKeys.forEach(key =>{
    //calling the playTune function with passing data-key value as an argument
    allKeys.push(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key))
    console.log(key.dataset.key);
})

const pressedkey =(e)=>{
    //if the pressed key is in the allKey array, only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key);
}


const handleVolume = (e)=>{
      audio.volume = e.target.value;
      //passing the range slider value as an audio volume
      //to set audio volume, Value 
}
const showHideKeys = ()=>{
      pianoKeys.forEach(key => key.classList.toggle("hide"))
} 

keysCheckbox.addEventListener("input",showHideKeys); 
volumeslider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);

