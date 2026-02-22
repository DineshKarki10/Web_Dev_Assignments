function printPattern (num){
    for(let i = 1; i <=num;i++){
        let p ="";
        // for space
        for (let j = 1; j<=num-1;j++){
            p+=" ";
    }
    // for star
    for (let k = 1; k <=2*i-1;k++){
        p+="*";
    }
    console.log(p)
}
}

printPattern(5);