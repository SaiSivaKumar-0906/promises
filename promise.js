function promise(){
    return fetch('/one.json')
    }
    
    async function siva(){
       let three = await promise() 
       let two = await three.json()
       console.log(two)
    }
    siva()
    
    async function custompromise(one){
       let four = await new Promise((res, rej)=>{
          if(one === 10){
              res(one = 11)
          }else{
              rej('error')
          }
      })  
      console.log(four)
    };
    custompromise(10)