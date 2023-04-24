let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')
let submit = document.getElementById('submit')
let error = document.getElementById('error')
const present = new Date()

const calculate = ()=>{
    if(!date.value || date.value>31){
        error.innerHTML='Please input valid data for Date input'
    }else if(!month.value || month.value>12){
        error.innerHTML='Please input valid data for Month input'
    }else if(!year.value ||year.value.length != 4 || year.value>present.getFullYear()){
        error.innerHTML='Please input valid data for Year input'
    }else{
        let birth = new Date(`${month.value}/${date.value}/${year.value}`)
        if(birth>present){
        return error.innerHTML='Please enter valid input'
        }
        
        let gapYear
        if(present.getMonth()>=birth.getMonth()){
            gapYear = present.getFullYear()-birth.getFullYear()
        }else{
            gapYear = present.getFullYear()-birth.getFullYear()-1
        }

        let gapMonth
        if(present.getDate()>=birth.getDate()){
            gapMonth = present.getMonth()-birth.getMonth()
        }else{
            gapMonth = present.getMonth()-birth.getMonth()-1
        }
        
        gapMonth = gapMonth<0 ? gapMonth+12 : gapMonth


        let gapDate
        const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
        if(present.getDate()>=birth.getDate()){
            gapDate = present.getDate() - birth.getDate()
        }else{
            gapDate = present.getDate() - birth.getDate()+monthDays[birth.getMonth()]
        }
        
        error.innerHTML=`Your Age is ${gapYear} Years ${gapMonth} Months ${gapDate} Days`


    }
}

submit.addEventListener("click",calculate)

