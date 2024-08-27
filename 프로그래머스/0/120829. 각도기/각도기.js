const solution = (angle) =>{
    if((angle/90)<1){
        return 1;
    }else if((angle/90)==1){
        return 2;
    }else if((angle/90)<2){
        return 3;
    }else if((angle/90)==2){
        return 4;
    }else{
        return Err();
    }
};