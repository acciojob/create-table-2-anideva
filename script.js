function createTable() {
    //Write your code here
  //ask user for no of rows
  let rn = prompt ("Input number of rows");
  //ask user for the no of columns
  let cn = prompt ("Input number of columns");

  //convert input to numbers
  rn = Number(rn);
  cn = Number(cn);

  //check for the non numeric input 
if (isNaN(rn) || isNaN(cn)) {
    return; //this will ignore the input and do nothing 
}
//check for zero or negative values
if (rn<=0 ||cn<=0) {
    alert("Rows and Columns must be greater than 0")
    return;
}
//get the table element 
const table= document .getElementById("myTable");
//table content
table.innerHTML= "";
//create rows
for (let i=0;i<rn;i++){
    const row = table.insertRow();
    //create columns
    for (let j=0;j<cn; j++){
        const cell= row.insertCell();
        cell.innerText=`Row-${i} Column-${j}`;
    }
}
}
