document.addEventListener("DOMContentLoaded", function(){
        let canvasEl = document.getElementById("canvas");
        debugger
        canvasEl.width = 500;
        canvasEl.height = 500;

        const ctx = canvasEl.getContext("2d");

        ctx.fillStyle = "black";
        ctx.fillRectangle(0, 0, 500, 500);
})



