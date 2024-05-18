// №1
//
// const text = "1823783"
// const regExp = /[0-9]
// const containsOnlyDigits = (str) => {
//     if (text === regExp) {
//         console.log(true)
//     }else {
//         console.log(false)
//     }
// }
// console.log(containsOnlyDigits)

const tims = () => {
    const time= () => {
        console.log('прошла секунда')
    }
    setInterval(time,1000)
}

tims()

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i)
        i++
        if (i > 10) {
            clearInterval(interval)
        }
    },1000)
}
count()


let xhr = new XMLHttpRequest()

xhr.open("GET", "./data.json")
xhr.send()

xhr.onload=()=>{
    let res = xhr.response
    const data = JSON.parse(res)
    console.log = data.map((item)=>(
    `
    key1
    key2
    key3
    `
    ))
}


