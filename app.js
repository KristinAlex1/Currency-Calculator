let apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_NYHvSxa3EykLYZb9kLnvuvLWmjcEXo8JYLmPoWF1"
let convertButton = document.querySelector("button");
let forSelectionOption = document.querySelector("#for-select");
let toSelectionOption = document.querySelector("#to-select");
let forImage = document.querySelector("#for-image");
let toImage = document.querySelector("#to-image");
let forValue = document.querySelector("#for-input");
let toValue = document.querySelector("#to-input");
let currencyValues = {};
let option1 = [];
let msgContent = document.querySelector("#message");



async function callFirst(){
    
    await fetchApi(apiUrl);
        addValues(currencyValues.data);
        

}

callFirst();



// function to fetch Api
async function fetchApi(url){
    try{
        const response = await fetch(url);
        currencyValues = await response.json();
        return currencyValues;
    }catch(error){
        console.log("Error shown:",error);
    }
}



/// added event when get exchange rate button is clicked
 convertButton.addEventListener("click", async (event) => {
    event.preventDefault();
    converter();
    

    

})


function addValues(obj){
    option1.push(...Object.keys(obj));
    forSelectionOption.innerHTML = "";
    toSelectionOption.innerHTML = "";
    for (let el of option1){
        forSelectionOption.innerHTML += `<option value = "${el}">${el}</option>`;
        toSelectionOption.innerHTML += `<option value = "${el}">${el}</option>`;
        
    }    

}

function converter(){
    if(!forValue || !forSelectionOption || !toSelectionOption) {
        alert("Please fill all the fields");
    }

    else {
        let forCode = forSelectionOption.value;
        let toCode = toSelectionOption.value;

        let forExchangeRate = currencyValues.data[forCode].value;
        let toExchangeRate = currencyValues.data[toCode].value;

        let val = (parseFloat(forValue.value) / forExchangeRate) * toExchangeRate;
        toValue.value = val.toFixed(3);

        

        msgContent.innerText = "";
        msgContent.innerText += `1 ${forCode} = ${toExchangeRate} ${toCode}` ;
    };


    

}

function changeflags(){

    let valFor = forSelectionOption.value;
    let valTo = toSelectionOption.value;

    let valFor2 = countryList[valFor];
    let valTo2 = countryList[valTo];

    forImage.src = `https://flagsapi.com/${valFor2}/flat/64.png`;
    toImage.src = `https://flagsapi.com/${valTo2}/flat/64.png`;

    


}


forSelectionOption.addEventListener("change", changeflags);
toSelectionOption.addEventListener("change", changeflags);



