const today = new Date();

const semester = 
    ["1. week", "2. week", "3. week", "4. week", "5. week", "6. week", "7. week", "8. week", "9. week", "10. week", "11. week", "12. week", "13. week", "14. week", "pót hét", "vizsgaidőszak"]

function getWeekIndex(_today) {
    const semester_start = new Date(2023, 1, 27);

    var difference = _today.getTime() - semester_start.getTime();

    if(difference < 0) {
        return -1;
    }
    
    var days = Math.ceil(difference / (1000 * 3600 * 24));
    var week = Math.floor(days / 7);

    if(week > 15){
        week = 15;
    }

    return week;
}

function fillPlaceholder() {
    let index = getWeekIndex(today);
    if(index < 0) {
        return "It's not even started baby.";
    }

    return semester[index];
}

document.getElementById("place-holder").innerHTML = fillPlaceholder();