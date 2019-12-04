let bills = [124, 48, 268];
let tips =[];
function calculator(){
    for (let i=0; i < bills.length; i++){
        if (bills[i] < 50){
            tips[i] = bills[i] * 0.2;
        }
        else if (bills[i] >= 50 && bills[i] <= 200){
            tips[i] = bills[i] * 0.15;
        }
        else if (bills[i] > 200){
            tips[i] = bills[i] * 0.1;
        }
    }    
}
calculator();
let billsAll = ['You paid $123 with the tip: ' + tips[0].toFixed(2)+'<br>You paid $48 with the tip: ' +tips[1].toFixed(2)+ '<br>You paid $268 with the tip: '+ tips[2].toFixed(2)];
document.write(billsAll);



