


function blink(target, color, duration){
    const tl = gsap.timeline({defaults: {duration: 0}});
    let oldTint = target.tint;
    tl.to(target, {tint: color})
    tl.to(target, {tint: 0xFFFFFF}, `+=${duration}`)

    return tl;
}


function toRadians (angle) {
    return angle * (Math.PI / 180);
}