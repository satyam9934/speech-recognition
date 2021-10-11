const texts = document.querySelector(".texts");

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p")

recognition.addEventListener("result", (e) => {
    texts.appendChild(p);
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

    p.innerText = text;
    if (e.results[0].isFinal) {
        if (text.includes("how are you")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "I am fine";
            texts.appendChild(p);
        }
        if (
            text.includes("what is your name") ||
            text.includes("What is your name")
        ) {
            p = document.createElement("p")
            p.classList.add("replay")
            p.innerText = "My name is satyam ";
            texts.appendChild(p);
        }
        if (text.includes("open YouTube")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "Opening Youtube chanel";
            texts.appendChild(p);
            console.log("opening youtube");
            window.open("https://www.youtube.com/");
        };
        if (text.includes("open Google")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "Opening google";
            texts.appendChild(p);
            //  console.log("opening google");
            window.open("https://www.google.com/");
        };
        if (text.includes("play a song ")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "ok";
            texts.appendChild(p);
            console.log("ok");
            window.open("https://www.youtube.com/watch?v=WPQ2R2DjWJY&ab_channel=T-Series");
        }
        p = document.createElement("p");
    }
});

recognition.addEventListener("end", () => {
    recognition.start();
});
recognition.start();