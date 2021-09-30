function reverseString(string){
    var listOfChars = string.split(''); 
    var reverseListOfChars = listOfChars.reverse();
    var reversedString = reverseListOfChars.join('');
    return reversedString;
    // return string.split('').reverse().join('');
}


function isPalindrome(string){
    const reverse = reverseString(string);
    return(string === reverse)  
}


function convertDateToString(date){
    const dateString = {day: '', month: '', year: ''};

    if(date.day < 10){
        dateString.day = "0" + date.day; 
    } else {
        dateString.day = date.day.toString();
    }
    if(date.month < 10){
        dateString.month = "0" + date.month; 
    } else {
        dateString.month = date.month.toString();
    }
    dateString.year = date.year.toString();

    return dateString
}

var date = {
    day: 12,
    month: 11,
    year: 2020
};

function getAllDateFormats(date){
    const dateString = convertDateToString(date)

    const ddmmyyyy = dateString.day + dateString.month + dateString.year;
    const mmddyyyy = dateString.month + dateString.day + dateString.year;
    const yyyymmdd = dateString.year + dateString.month + dateString.day;
    const ddmmyy = dateString.day + dateString.month + dateString.year.slice(-2);
    const mmddyy = dateString.month + dateString.day + dateString.year.slice(-2);
    const yymmdd = dateString.year.slice(-2) + dateString.month + dateString.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date){
    const listOfPalindromes = getAllDateFormats(date)

    var flag = false;

    for(var i=0; i< listOfPalindromes.length; i++){
        if (isPalindrome(listOfPalindromes[i])){
            flag = true;
            break;
        }
    }
    return flag;
}

console.log(checkPalindromeForAllDateFormats(date))
