export const FadeAnimate ={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }
}

export const imageAnimate={
    offscreen:{x:-500, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    // rotate:[0,10,0],
    transition: {type:"spring",
    // bounce:0.4,
    duration:1}
  }
}

export const rotateAnimate={
    offscreen:{x:-500, opacity:0, rotate: 90},
    onscreen:{
     x:0,
    opacity:1,
    rotate:0,
    transition: {type:"spring", bounce:0.6, duration:1}
  }
}


export const imageFade={
    offscreen:{ opacity:0},
    onscreen:{
    y:0,
    opacity:1,
    transition:{ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }

  }
}