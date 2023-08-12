// Fonksyon pou kalkile mwayèn nan yon lis
function kalkileMwayen(nòtList) {
    let total = 0;
    for (let i = 0; i < nòtList.length; i++) {
        total += nòtList[i];
    }
    return total / nòtList.length;
}

// Fonksyon pou klasifye mwayèn yo
function klasifyeMwayen(mwayèn) {
    if (mwayèn >= 90) {
        return "A";
    } else if (mwayèn >= 80) {
        return "B";
    } else if (mwayèn >= 70) {
        return "C";
    } else if (mwayèn >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Rantre kantite nòt yo
const n = parseInt(prompt("Antre kantite nòt yo: "));
const nòtList = [];

// Mande itilizatè a rantre nòt yo
for (let i = 0; i < n; i++) {
    const nòt = parseFloat(prompt("Antre nòt la: "));
    nòtList.push(nòt);
}

// Kalkile mwayèn
const mwayèn = kalkileMwayen(nòtList);

// Klasifye mwayèn
const klasifikasyon = klasifyeMwayen(mwayèn);

// Afiche rezilta yo
console.log("Mwayèn:", mwayèn);
console.log("Klasifikasyon:", klasifikasyon);
