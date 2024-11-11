const rateBtn = document.querySelector("button");


rateBtn.addEventListener("click", () => {
    console.log("button clicked");
    fetchApi("https://api.currencyapi.com/v3/latest?apikey=cur_live_NYHvSxa3EykLYZb9kLnvuvLWmjcEXo8JYLmPoWF1");
});

async function fetchApi(url){
    try{
        console.log("getting data.....");
        const api = await fetch(url);
        const refinedApi = await api.json();
        console.log(refinedApi);
    }
    catch(error){
        console.log("Could not fetch api, error:",error);
    }
}