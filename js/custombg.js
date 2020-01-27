class SimonBg {
        paint(ctx, size, props) {
            console.log(ctx, size, props)
            ctx.beginPath();
            ctx.fillStyle = 'cyan';
            ctx.strokeStyle = "green"; // Green path
            ctx.arc(20, 20, 8, 0, 2*Math.PI);
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowBlur    = 5;
            ctx.shadowColor   = "gray";
            ctx.fill();
        }
}

registerPaint('simonbg', SimonBg)