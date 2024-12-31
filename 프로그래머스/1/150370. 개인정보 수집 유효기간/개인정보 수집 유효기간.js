// origin("2021.05.02") 에서 add_months(6)개월 이후의 유효기간 마지막 날짜
function addMonths(origin,add_months) {
    let [year,month,date] = origin.split(".").map(Number);
    console.log(year,month,date, add_months);
    // 1. month 더하기
    let new_month = month + add_months;
    console.log(new_month);
    year += Math.floor(new_month / 12);
    month = new_month % 12;
    if(month === 0) {
        year -= 1;
        month = 12;
    }
    console.log("after month add");
    console.log(year,month,date);
    
    // 2. day -1 하기
    if(date===1) {
        if(month === 1) {
            // console.log("1");
            year -= 1;
            month = 12;
            date = 28;
        }
        else {
            // console.log("2");
            month -= 1;
            date = 28;            
        }
    }
    else {
        date -= 1;
    }
    return year+"."+month+"."+date;   
}
// Today (2022.05.19) vs dueDAte(2022.5.19) : True
// Today (2022.05.19) vs dueDAte(2022.5.18) : False
function isInRange(today, dueDate) {
    const [t_year,t_month,t_date] = today.split(".").map(Number);
    console.log(t_year,t_month,t_date);
    console.log(dueDate);
    const [d_year,d_month,d_date] = dueDate.split(".").map(Number);
    
    // 1. Year 비교
    if(t_year > d_year) {
        return false;
    }
    else if(t_year < d_year){
        return true;
    }
    else {
        // 2. Month 비교
        if(t_month > d_month) {
            return false;
        }
        else if(t_month < d_month) {
            return true;
        }
        else {
            if(t_date > d_date){
                return false;
            }
            else {
                return true;
            }
        }
    }
    return true;
}
function solution(today, terms, privacies) {
    // #1. terms 객체
    let term_obj = {};
    for(const elm of terms) {
        const [privace,month] = elm.split(" ")
        term_obj[privace] = parseInt(month);
    }
    
    // #2. privacies 마다 끝나는 날짜 구하기
    let dueDates = [-1]; // index: 0 -> 무시
    console.log("Test");
    console.log("최종:",addMonths("2021.12.02",12));
    for(const privace of privacies) {
        const [date, term] = privace.split(" ");
        // 1. 끝나는 날짜 구하기
        const endDate = addMonths(date, term_obj[term]);
        dueDates.push(endDate);
    }
    console.log(dueDates);
    
    // #3. Today와 비교해서 넘어간 날짜 구하기
    let answers = [];
    for(const [index,dueDate] of dueDates.entries()){
        console.log("Testing today:",today, "dueDate:",dueDate);
        
        if(index !== 0) {
            console.log(isInRange(today, dueDate));
            if(!isInRange(today, dueDate)) {
                answers.push(index);
            }
        }
    }
    
    return answers;
}