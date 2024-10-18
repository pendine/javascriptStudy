const job = (a,b) => {
    const c= Math.random()*b;
    setTimeout(() =>{
        console.log(a);
    }
    , c );
}

job(1,100);
job(2,100);
job(3,100);
