
let time = document.getElementById('display');

setTimeout(() => {
    time.innerHTML = 10;
    setTimeout(() =>{
        time.innerHTML = 9;
        setTimeout(() =>{
            time.innerHTML = 8;
            setTimeout(() =>{
                time.innerHTML = 7;
                setTimeout(() =>{
                    time.innerHTML = 6;
                    setTimeout(() =>{
                        time.innerHTML = 5;
                        setTimeout(() =>{
                            time.innerHTML = 4;
                            setTimeout(() =>{
                                time.innerHTML = 3;
                                setTimeout(() =>{
                                    time.innerHTML = 2;
                                    setTimeout(() =>{
                                        time.innerHTML = 1;
                             
                                        setTimeout(() =>{
                                                         
                                            time.innerHTML = "Happy Independence Day"

                                        
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
}, 1000); 