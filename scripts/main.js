const divToPlaceProjects = document.getElementById("projects-place")
var arrayLanguages = "";

const sber = () => `<svg width="157" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M69.92 7.188l3.262-2.412H62.258v14.448h10.924v-2.412H65.38v-3.689h6.668v-2.412H65.38V7.188h4.54zM54.006 10.404h-3.783V7.188h6.053l3.263-2.412H47.102v14.448h6.502c3.641 0 5.746-1.655 5.746-4.54 0-2.767-1.892-4.28-5.344-4.28zm-.52 6.408h-3.263v-3.996h3.263c1.986 0 2.908.662 2.908 2.01 0 1.347-.993 1.986-2.908 1.986zM82.026 4.776H76.09v14.448h3.121v-4.091h2.837c3.784 0 6.148-1.986 6.148-5.178s-2.364-5.179-6.171-5.179zm-.071 7.945h-2.767V7.188h2.767c2.01 0 3.097.993 3.097 2.767 0 1.773-1.087 2.766-3.097 2.766zM41.758 16.102c-.828.45-1.75.686-2.696.686-2.813 0-4.847-2.01-4.847-4.776 0-2.767 2.033-4.777 4.847-4.777a4.711 4.711 0 012.838.899l2.246-1.655-.142-.142c-1.3-1.159-3.05-1.75-5.036-1.75-2.152 0-4.115.733-5.533 2.057a7.12 7.12 0 00-2.176 5.273 7.465 7.465 0 002.176 5.368c1.49 1.395 3.475 2.175 5.509 2.128 2.246 0 4.209-.78 5.533-2.2l-2.01-1.489-.71.378zM125.722 4.8v14.447h3.121v-5.911h6.645v5.911h3.121V4.8h-3.121v5.935h-6.645V4.8h-3.121zm-5.367 14.447h3.286l-6.1-14.447h-3.169l-6.218 14.447h3.145l1.253-2.908h6.62l1.183 2.908zm-6.857-5.32l2.411-5.793 2.27 5.793h-4.681zm32.11-.52h1.939l4.776 5.817h4.02l-6.384-7.472 5.58-6.976h-3.571l-4.634 6.195h-1.726V4.776h-3.121v14.448h3.121v-5.817zm-47.764-2.98V7.213h8.158V4.8H94.723v14.447h6.503c3.641 0 5.745-1.655 5.745-4.54 0-2.766-1.891-4.28-5.343-4.28h-3.784zm0 6.409v-3.997h3.263c1.987 0 2.909.662 2.909 2.01 0 1.348-.97 2.01-2.909 2.01h-3.263v-.024zM21.494 4.682c.567.733 1.04 1.537 1.442 2.388l-10.924 8.063-4.587-2.885V8.796l4.563 2.861 9.506-6.975z" fill="#21A038"></path><path d="M2.767 12.012c0-.166 0-.308.023-.473l-2.766-.142c0 .19-.024.402-.024.591 0 3.31 1.348 6.314 3.523 8.489l1.963-1.963a9.088 9.088 0 01-2.72-6.502z" fill="url(#undefined::icon:app/logoFullA::31)"></path><path d="M11.988 2.79c.165 0 .307 0 .473.024l.142-2.767c-.19 0-.402-.023-.591-.023-3.31 0-6.314 1.347-8.49 3.523l1.964 1.962a9.13 9.13 0 016.502-2.719z" fill="url(#undefined::icon:app/logoFullA::32)"></path><path d="M11.988 21.233c-.165 0-.307 0-.473-.023l-.142 2.766c.19 0 .402.024.592.024 3.31 0 6.313-1.348 8.488-3.523l-1.962-1.963c-1.655 1.703-3.949 2.72-6.503 2.72z" fill="url(#undefined::icon:app/logoFullA::33)"></path><path d="M17.19 4.398l2.341-1.726A12.011 12.011 0 0011.988 0v2.767c1.94.023 3.736.614 5.202 1.631z" fill="url(#undefined::icon:app/logoFullA::34)"></path><path d="M24 12.012c0-.733-.071-1.443-.19-2.152l-2.577 1.915v.237a9.161 9.161 0 01-3.05 6.833l1.868 2.058A11.978 11.978 0 0024 12.011z" fill="#21A038"></path><path d="M11.988 21.233a9.161 9.161 0 01-6.833-3.05l-2.057 1.868A11.93 11.93 0 0011.988 24v-2.767z" fill="url(#undefined::icon:app/logoFullA::35)"></path><path d="M5.817 5.178L3.949 3.121A11.931 11.931 0 000 12.011h2.767a9.2 9.2 0 013.05-6.833z" fill="url(#undefined::icon:app/logoFullA::36)"></path><defs><linearGradient id="undefined::icon:app/logoFullA::31" x1="4.092" y1="20.14" x2="1.063" y2="11.384" gradientUnits="userSpaceOnUse"><stop offset=".144" stop-color="#F2E913"></stop><stop offset=".304" stop-color="#E7E518"></stop><stop offset=".582" stop-color="#CADB26"></stop><stop offset=".891" stop-color="#A3CD39"></stop></linearGradient><linearGradient id="undefined::icon:app/logoFullA::32" x1="4.312" y1="4.03" x2="12.114" y2="1.056" gradientUnits="userSpaceOnUse"><stop offset=".059" stop-color="#0FA8E0"></stop><stop offset=".538" stop-color="#0099F9"></stop><stop offset=".923" stop-color="#0291EB"></stop></linearGradient><linearGradient id="undefined::icon:app/logoFullA::33" x1="11.211" y1="22.31" x2="20.034" y2="20.316" gradientUnits="userSpaceOnUse"><stop offset=".123" stop-color="#A3CD39"></stop><stop offset=".285" stop-color="#86C339"></stop><stop offset=".869" stop-color="#21A038"></stop></linearGradient><linearGradient id="undefined::icon:app/logoFullA::34" x1="11.42" y1=".933" x2="18.963" y2="3.261" gradientUnits="userSpaceOnUse"><stop offset=".057" stop-color="#0291EB"></stop><stop offset=".79" stop-color="#0C8ACB"></stop></linearGradient><linearGradient id="undefined::icon:app/logoFullA::35" x1="3.801" y1="19.706" x2="12.012" y2="22.774" gradientUnits="userSpaceOnUse"><stop offset=".132" stop-color="#F2E913"></stop><stop offset=".298" stop-color="#EBE716"></stop><stop offset=".531" stop-color="#D9E01F"></stop><stop offset=".802" stop-color="#BBD62D"></stop><stop offset=".983" stop-color="#A3CD39"></stop></linearGradient><linearGradient id="undefined::icon:app/logoFullA::36" x1="1.038" y1="12.346" x2="4.334" y2="3.772" gradientUnits="userSpaceOnUse"><stop offset=".07" stop-color="#A3CD39"></stop><stop offset=".26" stop-color="#81C55F"></stop><stop offset=".922" stop-color="#0FA8E0"></stop></linearGradient></defs></svg>`


function getData(url, resolve) {
    
    fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => console.error(error))
    
    // console.log(json)

}

function getLanguages(json) {
    // return json.keys().join(";")
    
    // console.log(Object.keys(json).join(", "))
    // return Object.keys(json).join(", ")
    arrayLanguages = Object.keys(json).join(", ")  
}

function resolve(json) {
    /* формирует блоки с проектами на странице */

    let iterator = 1;
    let html = "";

    for (let element of json) {
        console.log(element)
        // console.log(getData(element.languages_url, getLanguages))
        // console.log(arrayLanguages)
        
        html += 
`
<div class="projects block" id="${element.node_id}" onclick="window.open('${element.html_url}')" title="Открыть ${element.name} на GitHub">
    <h3>${element.name}</h3>
    <span style="color: grey"><img src="https://icon-widget.codersrank.io/api/${element.language}" width=15px> ${element.language}</span><br>
    <p>${element.description}</p>
</div>
`

        // document.getElementById(element.node_id).addEventListener("click", window.open(element.html_url))

        // iterator++
    }


    divToPlaceProjects.innerHTML = html
}


function fillHeader() {
    document.getElementsByTagName("header")[0].innerHTML += 
`
<a href="./index.html" class="header-special-link">tankalxat34</a>
<a href="./index.html">главная</a>
<a href="./index.html">Обо мне</a>
<a href="./projects.html">проекты</a>
<a href="./index.html">Контакты</a>
`
}

function fillFooter() {
    document.getElementsByTagName("footer")[0].innerHTML +=
`
<span>© tankalxat34 - 2022</span>
<a href="https://github.com/tankalxat34">GitHub</a>
<a href="https://t.me/tankalxat34_official">Telegram</a>
<a href="https://trovo.live/s/tankalxat34">Trovo</a>
<a href="https://vk.com/tankalxat34/">ВКонтакте</a>
<a href="https://profile.codersrank.io/user/tankalxat34/">CodersRank</a>
<a href="https://pypi.org/user/tankalxat34/">PyPi</a>
`

    /* 
    position: absolute;
    bottom: 0;
    
    */
    // document.getElementsByTagName("footer")[0].style.marginTop = "-80px"
    // document.getElementsByTagName("footer")[0].style.position = "absolute"
    
}


getData("https://api.github.com/users/tankalxat34/repos", resolve)
fillHeader()
fillFooter()