function checkCashRegister(price, cash, cid) {
    var output = {status: "", change: []};
    var value = {
      "ONE HUNDRED": 100,
      "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.1,
      "NICKEL": 0.05,
      "PENNY": 0.01
    }
    var totalChange = cash - price;
    var totalCash = 0;
    for (let item of cid){
        totalCash += item[1];
    }
    if (totalChange == totalCash){
      output.status = "CLOSED";
      output.change = cid;
      return output;
    }
    var keyIndex = 8;
    for (let key in value){
      if (totalChange > value[key]){
        let num_of_unit = Math.floor(totalChange / value[key]);
        let num_of_possible = cid[keyIndex][1] / value[key];
        if (num_of_unit <= num_of_possible){
          output.change.push([key, value[key] * num_of_unit]);
          totalChange -= value[key] * num_of_unit;
        }else{
          output.change.push([key, value[key] * num_of_possible]);
          totalChange -= value[key] * num_of_possible;
        }
        totalChange = totalChange.toFixed(2);
      }
      keyIndex -=1;
    }

    if (totalChange > 0){
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
      return output;
    }
    output.status = "OPEN";
    return output;
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));