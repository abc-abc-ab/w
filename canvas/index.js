Math.TAU = Math.PI * 2
window.addEventListener("DOMContentLoaded", () => {((d, t)=>{

    let canvas = d.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 300, 150);
    ctx.strokeRect(0, 0, 300, 150);
    ctx.fillStyle = "#000";
    
    ctx.beginPath();
    ctx.font = "50px Serif";
    ctx.strokeText("Canvas", 75, 95);
    ctx.fillText("Canvas", 70, 85);
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(50, 50, 20, .7, 5.5);
    ctx.stroke();
    ctx.closePath();
    // 一回閉じる
    ctx.beginPath();
    ctx.strokeStyle = "#666";
    ctx.arc(55, 60, 20, .7, 5.5);
    ctx.stroke();
    ctx.closePath();


    canvas.toBlob((b) => {
        /**@type {HTMLAnchorElement} */// JSDoc
        let anchor = d.getElementById("download");
        let href = URL.createObjectURL(b);
        anchor.href = href;
        anchor.addEventListener("click", (e) => {
            t.setTimeout(() => {
                URL.revokeObjectURL(href)
            }, 10);
        });
    }, "image/jpg");
    
    ctx.beginPath();
    ctx.font = "15px Serif"
    ctx.fillStyle = "#f36";
    ctx.fillText("Image", 3, 15)
    ctx.closePath();

    canvas.toBlob((b) => {
        let href = URL.createObjectURL(b);
        /**@type {HTMLImageElement}  */// JSDoc
        let im = d.getElementById("blob");
        im.src = href;
    })

    ctx.fillStyle = "#fff";
    ctx.fillRect(3, 3, 40, 20)

})(document, window)}, {})