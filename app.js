let apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_NYHvSxa3EykLYZb9kLnvuvLWmjcEXo8JYLmPoWF1"
let convertButton = document.querySelector("button");
let forSelectionOption = document.querySelector("#for-select");
let toSelectionOption = document.querySelector("#to-select");
let currencyValues = {};
let option1 = [];
let option2 = []; 


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







