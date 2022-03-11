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
    let oneandhalf = await one.json()

    let two = await fetch('/data3.json')
    let twoandhalf = await two.json()

    let three = await fetch('/data4.json')
    let threeandhalf = await three.json()

    console.log(oneandhalf, twoandhalf, threeandhalf)
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
