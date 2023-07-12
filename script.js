const drumKeys = document.querySelectorAll(".drum-keys .key")


let allKey = []

let audio = new Audio("sounds/a.wav")
 //by default, audio src is "a" tune

const playTune= (key)=>{
    audio.src = `sounds/${key}.wav`;

    //passing audio src based on the key pressed
    audio.currentTime = 0;
    audio.play(); //playing audio 

    console.log(allKey);
}
   

drumKeys.forEach(key=> {
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click",()=>playTune(key.dataset.key))
    console.log(key.dataset.key);
    allKey.push(key.dataset.key)
})

const pressedKey = (e)=>{
    console.log(e)
    const pressed_Key = document.querySelector(`[data-key="${e.key}"]`)
    if(pressed_Key){
    pressed_Key.classList.add('key-pressed');
    setTimeout(()=>{
    pressed_Key.classList.remove('key-pressed');
     })
    }
    playTune(e.key)
}
    


document.addEventListener("keydown",pressedKey)




// const drumKeys = document.querySelectorAll(".drum-keys .key");

// let allKeys=[];

// let audio = new Audio("sounds/a.wav");

// const playTune =(key)=>{
    //  audio.src = `sounds/${key}.wav`
    //  audio.play(); //playing audio
   
//     //getting clicked key element
//     // clickedKey.classList.add("active");
//     //adding active class to the clicked key
//     // setTimeout(()=>{
//     //     clickedKey.classList.remove("active")
//     // },150)
//     //removing the active class after 150ms from the clicked key element

//     // console.log(allKeys);
// }

// drumKeys.forEach(key =>{
//     //calling the playTune function with passing data-key value as an argument

//     allKeys.push(key.dataset.key);
//     key.addEventListener("click",()=> playTune(key.dataset.key))

//     console.log(key.dataset.key);
// })

// const pressedkey =(e)=>{
//     //if the pressed key is in the allKey array, only call the playTune function

// if(allKeys.includes(e.key)) playTune(e.key);
// }

// document.addEventListener("keydown", pressedkey);