console.log("sunkesni");


 console.log("1uzd");

let sumOfNumb = 0;
let text = "";
for (let i = 0; i < 300; i++) {
let eile = Math.round(Math.random() * 300);

if (eile > 150) {
    sumOfNumb++
}
if (eile > 275) {
    text += "[" + eile + "]";
} else {
    text += eile + " "
    }

}
console.log(text);
console.log("didesni nei 150 yra " +  sumOfNumb + " skaiciai");


console.log("2uzd");
let print = " "
for ( let i = 1; i <= 3000; i++) {
    if (i % 77 == 0) {
        print += i + ","
    }
}
console.log(print.slice(0, -1));


console.log("3uzd");

for (let a = 0; a < 10; a++) {
    
    let line = "";
    for (let i = 0; i < 10; i++) {
        line += "*";
    }
    console.log(line);

}

console.log("5uzd");
for (let i = 0; i < 10; i++) {
    let e = Math.round(Math.random() * 1);
    if (e === 0) { break }
    else (e === 1)
    console.log("S");
    
}

console.log("(b)");
let count2 = 0;

while (true) {
let e = Math.round(Math.random() * 1);
    if (e === 0) {
        console.log("H");
        count2++;
    }
    else {
        console.log("S");
        break;
    }
    

}

console.log("(c)");


let count3 = 0;
while (true) {
    let coin = Math.round(Math.random());
    if (coin === 0) {
        count3++;
        console.log("H");
    } else {
        console.log("S");
    }

    if (count3 == 3) {
        break;
    }
}


console.log("6uzd");

let petrasSum = 0;
let kazysSum = 0;

while (true) {
    let petras = 10 + Math.round(Math.random() * 10);
    let kazys = 5 + Math.round(Math.random() * 20);
    petrasSum += petras;
    kazysSum += kazys;

    if (petrasSum >= 222 || kazysSum >= 222) {
        break;
    }
}



if (petrasSum > kazysSum) {
    console.log("partiją laimėjo: Petras " + petrasSum);
} else {
    console.log("partiją laimėjo: Kazys " + kazysSum);
}


console.log("8uzd (a)");
 let hits = 0;
 while (hits <= 8.5) {
    let hitOne = Math.round(5 + Math.random() * 15);
    hits += hitOne;
    console.log(hits);
    }

    console.log("8uzd (b)");
 

    console.log("masyvai");
    console.log("1uzd");

    rnd2dArr = [];
    for (let i = 0; i < 10; i++) {
        rnd2dArr[i] = [];
        for (let a = 0; a < 3; a++) {
            rnd2dArr[i][a] = 5 + Math.round(Math.random() * 20)
            
            
        }
        rnd2dArr[i] = [7,12];
    }

    console.log(rnd2dArr);
    console.log(rnd2dArr [0]);

    console.log("2uzd");
    
    let sum = 0;
    for (let x = 0; x < rnd2dArr.length; x++) {
        for (let y = 0; y < rnd2dArr.length; y++) {
            if (rnd2dArr [x][y > 10]) {
                sum += rnd2dArr[x][y];

            }
        }
        
    }
    console.log(sum);

    console.log("2uzd (b)");
    
    //let sum1 = 0
    //for (let v = 0; v < rnd2dArr.length; v++) {
        //console.log(":)");
        //for (let c = 0; c < rnd2dArr [v].length; c++) {
           
                //sum1 += rnd2dArr[v][c];
            // }
         //}
    //}
    //console.log(sum1);





    
