function promise(){
    return fetch('/one.json')
    }
    
    async function siva(){
       try{
            
            let three = await promise() 
            let two = await three.json()
            console.log(two)
        }catch{
            console.log("not working!!")
        }
    }
    siva()
    
async function mulitiplepromise(){
    
     let one = await fetch("/data2.json")

    let two = await fetch('/data3.json')

    let three = await fetch('/data4.json')
    
    const responses = await Promise.all([one, two, three])
    const json = await Promise.all(responses.map(t => t.json()))

    console.log(json)
}
mulitiplepromise()

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
