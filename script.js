const cheeks = "./static/cheeks.png";
const default_face = "./static/default.png";
const eyes = "./static/eyes.png";
const hungry = "./static/hungry.png";
const mouth1 = "./static/mouth1.png";
const mouth2 = "./static/mouth2.png";
const sneeze1 = "./static/sneeze1.png";
const sneeze2 = "./static/sneeze2.png";
const sneeze3 = "./static/sneeze3.png";
const sneeze4 = "./static/sneeze4.png";
const ear = "./static/ear.png";

const eyesElement = document.getElementById("eyes");
const noseElement = document.getElementById("nose");
const bowElement = document.getElementById("bow");
const mouthElement = document.getElementById("mouth");
const cheeksElement = document.getElementById("cheeks");
const cheeks2Element = document.getElementById("cheeks2");
const earElement = document.getElementById("ear");
const ear2Element = document.getElementById("ear2");
const neckElement = document.getElementById("neck");
const yuki = document.getElementById("yuki");
const message = document.getElementById("text-area");

var disable_click = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function BackToDefault() {
    yuki.src = default_face;
}

async function DisplayImage(sequence_img) {
    for (let i = 0; i < sequence_img.length; i++) {
        yuki.src = sequence_img[i]["src"];
        await sleep(sequence_img[i]["duration"]);
    }
}

async function DisplayText(sequence_text) {
    message.innerHTML = ""
    for (let i = 0; i < sequence_text.length; i++) {
        for (let o = 0; o < sequence_text[i]["text"].length; o++) {
            message.innerHTML += sequence_text[i]["text"].charAt(o);
            await sleep(50);
        }
        message.innerHTML += "...&nbsp&nbsp&nbsp"
        await sleep(sequence_text[i]["duration"]);

        message.innerHTML += ' ';
    }
}

// Add event listeners to each element
earElement.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": ear, "duration": 3000},
        {"src": mouth2, "duration": 7000},
        {"src": default_face, "duration": 2000}
    ]), DisplayText([
        {"text": "RAWRRRRRRRRRR!", "duration": 1000},
        {"text": "DO YOU HEAR MY AUTHORITY MUWAHAHAHA!", "duration": 2000},
        {"text": "Well, you should because", "duration": 500},
        {"text": "The ears are sensory organs responsible for hearing, capturing sound waves and converting them into signals that the brain interprets. Additionally, the ears play a crucial role in maintaining balance and spatial orientation through the vestibular system located in the inner ear.", "duration": 500},
    ])]);
    BackToDefault();
    disable_click = false;
});

ear2Element.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": ear, "duration": 3000},
        {"src": mouth2, "duration": 7000},
        {"src": default_face, "duration": 2000}
    ]), DisplayText([
        {"text": "RAWRRRRRRRRRR!", "duration": 1000},
        {"text": "DO YOU HEAR MY AUTHORITY MUWAHAHAHA!", "duration": 2000},
        {"text": "Well, you should because", "duration": 500},
        {"text": "The ears are sensory organs responsible for hearing, capturing sound waves and converting them into signals that the brain interprets. Additionally, the ears play a crucial role in maintaining balance and spatial orientation through the vestibular system located in the inner ear.", "duration": 500},
    ])]);
    BackToDefault();
    disable_click = false;
});

bowElement.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": eyes, "duration": 2000},
        {"src": default_face, "duration": 2000}
    ]), DisplayText([
        {"text": "Behold my bow tie!", "duration": 1000},
        {"text": "It's my 16th birthday gift from my Mother. ", "duration": 500},
        {"text": "But do you know what hair does?", "duration": 500},
        {"text": "Hair serves to regulate body temperature by insulating against heat loss and providing protection against physical harm, such as abrasions and UV radiation, particularly on the scalp. Additionally, in some species, hair can play a role in sensory perception, aiding in the detection of touch or environmental stimuli.", "duration": 500},
    ])]);
    BackToDefault();
    disable_click = false;
});

noseElement.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": sneeze1, "duration": 1000},
        {"src": sneeze2, "duration": 1000},
        {"src": sneeze3, "duration": 1000},
        {"src": sneeze4, "duration": 3000}
    ]), DisplayText([
        {"text": "AHHH! My Nose!", "duration": 1000},
        {"text": "achooo! anyways!", "duration": 500},
        {"text": "Your nose acts as a filter for the air you breathe, trapping particles and humidifying it. Sneezing occurs as a reflex when irritants like dust, allergens, or viruses stimulate the sensitive membranes inside your nose, prompting a sudden and forceful expulsion to clear the airways of potential threats.", "duration": 1000}
    ])]);
    BackToDefault();
    disable_click = false;
});

eyesElement.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": eyes, "duration": 1000}
    ]), DisplayText([
        {"text": "Oh! My Eyes", "duration": 1000},
        {"text": "You've taken a likings of them? well", "duration": 500},
        {"text": "The eye captures light, transforming it into electrical signals that the brain interprets to form visual images, facilitating our perception of the surrounding environment. Additionally, it regulates our circadian rhythm by detecting changes in light levels, influencing our sleep-wake cycle.", "duration": 1000}
    ])]);
    BackToDefault();
    disable_click = false;
});

mouthElement.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": mouth1, "duration": 2000},
        {"src": mouth2, "duration": 4000},
        {"src": default_face, "duration": 2000},
    ]), DisplayText([
        {"text": "HEHE, MY TEETH!", "duration": 1000},
        {"text": "They're quite something, aren't they?", "duration": 1000},
        {"text": "The mouth functions as the primary entry point for food and drink into the digestive system, where chewing breaks down food into smaller pieces for swallowing. Additionally, the mouth plays a crucial role in speech and vocalization by controlling airflow and shaping sound produced by the vocal cords.", "duration": 500},
    ])]);
    BackToDefault();
    disable_click = false;
});

cheeksElement.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": cheeks, "duration": 7000},
        {"src": default_face, "duration": 1000},
    ]), DisplayText([
        {"text": "HEY!, I'm kind of sensitive there!", "duration": 1000},
        {"text": "My face turns red when someone touches them!", "duration": 1000},
        {"text": "Because blushing in the cheeks is a physiological response triggered by emotional arousal, such as embarrassment, excitement, or attraction. It occurs due to increased blood flow to the cheeks, leading to a reddening of the skin, which can serve as a nonverbal cue signaling emotional states to others.", "duration": 500},
    ])]);
    BackToDefault();
    disable_click = false;
});

cheeks2Element.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": cheeks, "duration": 7000},
        {"src": default_face, "duration": 1000},
    ]), DisplayText([
        {"text": "HEY!, I'm kind of sensitive there!", "duration": 1000},
        {"text": "My face turns red when someone touches them!", "duration": 1000},
        {"text": "Because blushing in the cheeks is a physiological response triggered by emotional arousal, such as embarrassment, excitement, or attraction. It occurs due to increased blood flow to the cheeks, leading to a reddening of the skin, which can serve as a nonverbal cue signaling emotional states to others.", "duration": 500},
    ])]);
    BackToDefault();
    disable_click = false;
});

neckElement.addEventListener("click", async function() {
    if (disable_click) {
        return
    } else {
        disable_click = true;
    }
    await Promise.all([DisplayImage([
        {"src": cheeks, "duration": 2000},
        {"src": hungry, "duration": 7000},
        {"src": default_face, "duration": 1000},
    ]), DisplayText([
        {"text": "Oi!, I'm also sensitive there!", "duration": 1000},
        {"text": "But I am kinda feeling hungry", "duration": 1000},
        {"text": "The neck serves as a flexible support structure for the head, allowing it to move in various directions. Additionally, it contains vital structures such as the spinal cord, blood vessels, and airway passages, facilitating the passage of nerves, blood, and air between the head and the rest of the body.", "duration": 500},
    ])]);
    BackToDefault();
    disable_click = false;
});