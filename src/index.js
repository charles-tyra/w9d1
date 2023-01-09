console.log("Hello World!");


document.addEventListener("DOMContentLoaded", function(){
        let canvasEl = document.getElementById("game-canvas");
        debugger
        canvasEl.width = 500;
        canvasEl.height = 500;

        const ctx = canvasEl.getContext("2d");

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 400, 400);
        ctx.fill();
})
