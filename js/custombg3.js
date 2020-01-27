class SimonBg {
        paint(ctx, size, props) {
            for (var i = 0; i < size.width; i++) {
                let fraction = i * 2
                ctx.beginPath();
                ctx.fillStyle = i % 2 == 0 ?  'cyan' :  'red';
                ctx.strokeStyle = "green"; // Green path
                ctx.arc(20 + (fraction*10), i % 2 == 0 ? size.height - 10 : size.height - 5, 8, 0, 2*Math.PI);
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 3;
                ctx.shadowBlur    = 5;
                ctx.shadowColor   = "gray";
                ctx.fill();
            }
        }
}

registerPaint('simonbg', SimonBg)