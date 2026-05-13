/*
Priority Scoring Engine
*/

function calculatePriority(impact, urgency) {

    if (impact === "High" && urgency === "High") {
        return "Critical";
    }

    if (impact === "Medium") {
        return "Moderate";
    }

    return "Low";
}

console.log(calculatePriority("High", "High"));
