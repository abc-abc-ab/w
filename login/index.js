let id = (x) => document.getElementById(x);
/** 
 * @param {HTMLFormElement?} form
 * @param {string?} action
 * @param {string?} method
 */
let Submit = (form, action, method) => {
    if(!(form instanceof HTMLFormElement)){
        throw new TypeError(`"form"引数を'HTMLFormElement'にしてください。`)
    }else if(!(typeof action == "string")){
        throw new TypeError(`"action"引数を'string'にしてください。`)
    }else if(action.match(/(https?:\/\/[^\/]*\/[^\?] | \.{0,2}\/[^\?]*)/)){
        throw new TypeError(`"action"引数を'URL'にしてください。`)
    }else if(!(typeof method == "string")){
        throw new TypeError(`"method"引数を'string'にしてください。`)
    }else{
    if (method.match(/^GET$/i)) {
        console.log("GET処理")
        let ipt = form.querySelectorAll("input"), mp = new Map();
        ipt.forEach((e, i, a)=>{
            let k = e.getAttribute("name")
            let v = e.value
            mp.set(k, v)
        })
        /**@type {string} */
        let str = JSON.stringify(Object.fromEntries(mp))
        str = str.replace(/({|}|")/g, "").replace(/:/g, "=").replace(/,/g, "&")
        location.href = `${action.replace(/\?/g, "")}?${str}`;
    } else if (method.match(/^POST$/i)) {
        console.log(`POST処理`)
        let ipt = form.querySelectorAll("input"), mp = new Map();
        ipt.forEach((e, i, a)=>{
            let k = e.getAttribute("name")
            let v = e.value
            mp.set(k, v)
        })
        let str = JSON.stringify(Object.fromEntries(mp))
        str = str.replace(/({|}|")/g, "").replace(/:/g, "=").replace(/,/g, "&")
        localStorage.setItem("post", JSON.stringify({post: str}))
        location.href = `${action.replace(/\?/g, "")}`;
    } else {
        throw new TypeError(`"method"引数を'GET'か'POST'にしてください。`)
    }
}}