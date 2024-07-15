let d=document,language = (window.navigator.languages && window.navigator.language) ||
window.navigator.language ||
window.navigator.userLanguage ||
window.navigator.browserLanguage,
search = JSON.parse(`{
    "foo": 32,
    "bar": 54
}`),
moneyE = d.createElement("span"), moneyN = 0,
textI = d.createElement("span"),
spanEYE = d.createElement("span"),
me =d.createElement("script"),

LoadGO = () => {
    !(GetCookie("money"))?
    SetCookie("money", encode(0), now):
    0;
    SetCookie("lang", language.toString(), now)

    moneyN = Number(decode(GetCookie("money")))
    moneyE.textContent = `${moneyN.toLocaleString()}`
    SetCookie("money", encode(Number(moneyN)?Number(moneyN):0), now)


    // Location
        let Imap = new Map();
        for (let i of lct.replace("?","").split("&")){
            let ii = i.split("=");
            Imap.set(ii[0], ii[1])
        };
        search = Object.fromEntries(Imap);
        if (typeof search.from != "undefined")
            SetCookie("from", encode( decode(GetCookie("from"))+", "+search.from ), now)
    // Location
    

    window.setInterval(() => {
        moneyN == decode(GetCookie("money"))?
        textI.style.display = "none":
        textI.style.display = "block";
        if ( !(spanEYE.className.match(/.+click.+/i)) ){
            
        }
        else{

        }
    }, 1000);
   // d.head.removeChild(scr)
};

/**@type {HTMLScriptElement} */let scr;
/**@type {HTMLScriptElement} */let scr2;
window.onload = () => {
    a( x => d.createElement(x) )
    setTimeout(() => {
    moneyE = $("#monetary"),
    textI = $("#textI");
    spanEYE = $("span.eye")[0]
    me = $("script[src='./index.js']")[0]
    },3000)
}
/**
 * 
 * @param {Function} cr 
 */
let a = cr => {
    scr = cr("script");
    scr2 = cr("script");
    scr.src = "/convert.js";
    scr2.src = "/maru.min.js";
    d.querySelector("script[src='./index.js']")
    .insertAdjacentElement("beforebegin", scr)
    d.querySelector("script[src='./index.js']")
    .insertAdjacentElement("beforebegin", scr2)
    setTimeout(() => {
        LoadGO();
    },3000)
}