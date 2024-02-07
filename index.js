function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const gatekeeperPrice = 500;
    const totalStaff = 8;
    const staffPrice = 50;

    totalTicketPrice = ticketSale * ticketPrice;

    totalStaffPrice = totalStaff * staffPrice;
    dailyCost = totalStaffPrice + gatekeeperPrice;
    
    total = totalTicketPrice - dailyCost;

    if(ticketSale < 0) {
        return "Invalid Number";
    }else {
        return total;
    }
}


function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    
    var lastAlphabet = name[name.length - 1].toLowerCase();
    if(lastAlphabet === 'a' || lastAlphabet === 'y' || lastAlphabet === 'i' || lastAlphabet === 'e' || lastAlphabet === 'o' || lastAlphabet === 'u' || lastAlphabet === 'w') {
        return "Good Name";
    }else {
        return "Bad Name";
    }
}


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }

    return array.filter(item => typeof item === 'number' && !isNaN(item));
}


function password(obj) {
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
        return "invalid";
    }

    if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const website = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const password = website + "#" + obj.name + "@" + obj.birthYear;

    return password;
}


function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = arr.reduce((acc, arr) => {
        if (arr >= 3000) {
            acc += arr * 0.8;
        } else {
            acc += arr;
        }
        return acc;
    }, 0);

    let totalSavings = totalIncome - livingCost;

    if(totalSavings >= 0) {
        return totalSavings;
    }else {
        return "earn more";
    }
}