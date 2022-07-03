/*

8 KYU kata




*/

function setAlarm(employed, vacation) {
    if (employed === true && vacation === false) {
        return true;
    } else {
        return false;
    }
}

// OR

const setAlarm = (employed, vacation) => employed && !vacation;