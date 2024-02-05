const default_face = "./static/1.png";
const default_eye = "./static/2.png";
const default_eyebrow = "./static/3.png";
const default_nose = "./static/4.png";
const default_mouth = "./static/5.png";
const mouth_disgust = "./static/6.png";
const eye_close = "./static/7.png";
const eyebrow_mad = "./static/8.png";
const mouth_happy = "./static/9.png";
const eye_calm = "./static/10.png";
const mouth_smile = "./static/11.png";

const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const face = document.getElementById("face");
const nose = document.getElementById("nose");
const eyebrow = document.getElementById("eyebrow");
const mouth = document.getElementById("mouth");
const ear1 = document.getElementById("ear1");
const ear2 = document.getElementById("ear2");
const eyes = document.querySelectorAll(".eye");
const ears = document.querySelectorAll(".ear");
const message = document.getElementById("para");
const bubble = document.getElementById("msg-container");

var disable_click = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function backtodefault() {
    eye1.src = default_eye;
    eye2.src = default_eye;
    mouth.src = default_mouth;
    nose.src = default_nose;
    face.src = default_face;
    eyebrow.src = default_eyebrow;
    disable_click = false;
    message.style.animation = "none";
    bubble.style.display = "none";
    message.textContent = ""
}

async function chat_bubble(text_msg, rage = false) {
    bubble.style.display = "block";
    if (rage) {
        message.style.animation = "text_shake 0.1s infinite ease-in-out alternate-reverse"
    }
    for (let i = 0; i < text_msg.length; i++) {
        message.textContent += text_msg.charAt(i);
        await sleep(40);
      }
}

eye1.addEventListener("click", async function() {
    if (!disable_click) {
        disable_click = true;
        eye1.src = eye_close;
        eyebrow.src = eyebrow_mad;
        mouth.src = mouth_disgust;
        await chat_bubble("owww! that hurt! That is my eye!, it is very sensitive. Please careful!!", true);
        await sleep(4000);
        backtodefault();
    }
});

eye2.addEventListener("click", async function() {
    if (!disable_click) {
        disable_click = true;
        eye2.src = eye_close;
        eyebrow.src = eyebrow_mad;
        mouth.src = mouth_disgust;
        await chat_bubble("owww! that hurt! That is my eye!, it is very sensitive. Please careful!!", true);
        await sleep(4000);
        backtodefault();
    }
});

nose.addEventListener("click", async function() {
    if (!disable_click) {
        disable_click = true;
        for (let i = 0; i < eyes.length; i++) {
            eyes[i].src = eye_calm;
        }
        mouth.src = mouth_happy;
        await chat_bubble("ahhhhh, the air feels so good! Nose is a very useful organ to have! I feel blessed to have this for granted!");
        await sleep(4000);
        backtodefault();
    }
});

mouth.addEventListener("click", async function() {
    if (!disable_click) {
        disable_click = true;
        for (let i = 0; i < eyes.length; i++) {
            eyes[i].src = eye_calm;
        }
        mouth.src = mouth_smile;
        await chat_bubble("Look at my healthy teeth! I use it to bite foods into pieces. But what kind of glue would you use to keep your teeth together?... A toothpaste!!");
        await sleep(4000);
        backtodefault();
    }
});


for (let i = 0; i < ears.length; i++) {
    ears[i].addEventListener("click", async function() {
        if (!disable_click) {
            disable_click = true;
            for (let i = 0; i < eyes.length; i++) {
                eyes[i].src = eye_calm;
            }
            await chat_bubble("I got sick when I lost one of my ear buds..... It was mono hehehehhehhe. Jokes aside, Ear is one of the most important sensory organs we have, feel blessed to have those!");
            await sleep(4000);
            backtodefault();
        }
    })
}