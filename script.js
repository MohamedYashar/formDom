//  create function on submit button.

var button = document.getElementById("submit");

button.addEventListener("click",function(x){
    x.preventDefault();

    // FOR GENDER INPUT IN FORM
var gender = document.getElementsByName("gender");
console.log(gender);
var inputvalue;
for(i=0;i<gender.length;i++){
    if(gender[i].checked){
        console.log(gender[i].checked);
        inputvalue = gender[i].value;
        console.log(inputvalue);
    }
}

// FOR FOOD INPUT 

var food =document.getElementsByName("food")
console.log(food);

var box =[];
var count =0;
for(i=0;i<food.length;i++){
    if(food[i].checked){
        box.push(food[i].value);
        count++;
        console.log(box);
    }
}

if (box.length>=2){
    var output =box.join(",");
    console.log(output);
}else{
    output= alert("Choose atleast 2 foods");
}

TableData(fname.value,lname.value,Address.value,pin.value,
    inputvalue,output,state.value,country.value)

fname.value=""
lname.value=""
Address.value=""
pin.value=""
inputvalue=""
output="";
state.value=""
country.value=""



});




//  create function to insert dynamic data in table


// HTML FORM VARIABLE
//  step 1 link html input with id ti JS
var fname   = document.getElementById("fname")
console.log(fname);
var lname   = document.getElementById("lname")
var Address = document.getElementById("Address")
var pin     = document.getElementById("pin")
var gender  = document.getElementById("gender")
var food    = document.getElementById("food")
var state   = document.getElementById("state")
var country = document.getElementById("country")

/* step 2 use the above vaviable  to insert 
the eneterd data dynamicllyfrom form to table*/

//  CREATE FUNCTION USE ABOVE VAR AS PARAMETER=> NOW IT ACTS AS BRIDGE FOR HTML AND JS INPUT DATA

function TableData(fname,lname,Address,pin,gender,food,state,country){
    console.log(fname);

// 1.CREATE VAR SEPARATELY FOR TABLE ROW AND TABLE DATE AND THEIR INNER TEXT = ABOVE INPUT VAR
// 2. WHEN U ENTER DATE IN FORM IT GOES TO TABLE


// TABLE VARIABLE

// use tbody id from html
var tbody = document.getElementById("tbody")

//below var to create dynamic data
// created trow
var trow  = document.createElement("tr")
// created tdata
var tdata1 = document.createElement("td")
var tdata2 = document.createElement("td")
var tdata3 = document.createElement("td")
var tdata4 = document.createElement("td")
var tdata5 = document.createElement("td")
var tdata6 = document.createElement("td")
var tdata7 = document.createElement("td")
var tdata8 = document.createElement("td")

// FINAL STEP DECLARE TABLE INPUT = FORM INPUT 
//now text inserted in tabled date
tdata1.innerHTML= fname;
tdata2.innerHTML= lname;
tdata3.innerHTML= Address.value;
tdata4.innerHTML= pin;
tdata5.innerHTML= gender;
tdata6.innerHTML= food;
tdata7.innerHTML= state;
tdata8.innerHTML= country;


// now append td => tr TASK 
trow.append(tdata1,tdata2,tdata3,tdata4,tdata5,tdata6,tdata7,tdata8);

// now append tr => tbody TASK COMPLETED OF LINKING FORM AND TABLE
tbody.append(trow);

}

