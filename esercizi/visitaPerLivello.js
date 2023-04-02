function visita(t){
    let queue = [t];
    while(queue.length > 0){
        let p = queue[0];
        console.log(p.val);
        if(p.sx) queue.push(p.sx);
        if(p.dx) queue.push(p.dx);
        queue.shift();
    }
}

let t = {
    val:8,
    sx:{
        val: -4,
        sx: {val: 32},
        dx: {
            val:12, 
            sx: {
                val: 2,
                dx:{val:-2},
                sx:{val: 812}
            }
        }
    },
    dx:{
        val: 112,
        dx: {val: 32}, 
        sx: {
            val:82,
            sx: {val: 632}
        }
    }
}

visita(t)