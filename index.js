let search = document.querySelector("#search");
let result = document.querySelector("#result");
let input = document.querySelector("input")
let translation = document.querySelector("#definition");
let example = document.querySelector("#example");
let secondDefinition = document.querySelector("#second-definition");
let secondExample = document.querySelector("#second-example");
let thirdDefinition = document.querySelector("#third-definition");
let body = document.body;


search.addEventListener("submit", function(a){
    a.preventDefault();

    let word = input.value;

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/advance") 
    .then((data) => {return data.json()})
    .then((data) => {data.forEach(element => {
        if(word == element.word){
            let wrap = document.createElement("div");
            wrap.setAttribute("class", "result");
            let pTrans = document.createElement("p");
            pTrans.setAttribute("class", "translation");
            let span1 = document.createElement("span")
            span1.setAttribute("class", "first")
            let span2 = document.createElement("span")
            span2.setAttribute("class", "second");
            let pDef1 = document.createElement("p");
            pDef1.setAttribute("class", "definition");
            let pDef2 = document.createElement("p");
            pDef2.setAttribute("class", "second-definiton");
            let pDef3 = document.createElement("p");
            pDef3.setAttribute("class", "third-definition");
            let pExam1 = document.createElement("p");
            pExam1.setAttribute("class", "example");
            let pExam2 = document.createElement("p");
            pExam2.setAttribute("class", "second-example");
            let audio = document.createElement("audio");
            audio.setAttribute("controls", "");
            audio.src = element.phonetics[3].audio

            body.append(wrap);
            wrap.append(pTrans);
            pTrans.append(span1)
            pTrans.append(span2)
            wrap.append(pDef1);
            wrap.append(pExam1);
            wrap.append(pDef2);
            wrap.append(pExam2);
            wrap.append(pDef3);
            wrap.append(audio)

            span1.textContent = word;
            span2.textContent = " - " + element.phonetic
            pDef1.textContent = element.meanings[0].definitions[0].definition
            pExam1.textContent = element.meanings[0].definitions[0].example
            pDef2.textContent = element.meanings[0].definitions[1].definition
            pExam1.textContent = element.meanings[0].definitions[0].example
            pDef3.textContent = element.meanings[0].definitions[2].definition
            pExam2.textContent = element.meanings[0].definitions[2].example
            
            console.log(element.word);
        } 
        // else{
        //     let h1 = document.createElement("h1");
        //     body.append(h1);
        //     h1.textContent = "Enter Only 'advance'!"
        // }
        })})
    
    input.value = ''
})
