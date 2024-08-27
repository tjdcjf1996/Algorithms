const solution = N =>{
    return (N+"").split("").reduce((acc,cur)=>acc+parseInt(cur),0)
}