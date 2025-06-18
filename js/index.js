const div = document.getElementById("modal")

function openModalWindow() {
    div.classList.add("active")
}

function closeModalWindow() {
    div.classList.remove("active")
}

words = [
    "aaaaa",
    "bbbbbb",
    "ccccccc",
    "dddddddd"
]

const hidden = document.getElementById("hidden")

let char = 0
let word = 0

const wordPrinter = () => {
    if (char <= words[word].length) {
        let s = words[word].substr(0, char)
        hidden.innerHTML = s
        char++
        setTimeout(wordPrinter, 200)
    }
    else {
        setTimeout(del, 500)
    }
}

const del = () => {
    if (char >= 0) {
        let s = words[word].substr(0, char)
        hidden.innerHTML = s
        char--
        setTimeout(del, 50)
    }
    else {
        word++
        if (word >= words.length) {
            word = 0
            
        }
        setTimeout(wordPrinter, 200)
    }
}

wordPrinter()