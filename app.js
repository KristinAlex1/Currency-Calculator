const rateBtn = document.querySelector("button");
const msg = document.querySelector("#message");


rateBtn.addEventListener("click", (event) => {
    
    event.preventDefault();
    fetchApi("https://api.currencyapi.com/v3/latest?apikey=cur_live_NYHvSxa3EykLYZb9kLnvuvLWmjcEXo8JYLmPoWF1")
    .then((data) => {
        updateMessage(data);
    })
    });

async function fetchApi(url){
    try{
        
        const api = await fetch(url);
        const refinedApi = await api.json();
        return refinedApi;
    }
    catch(error){
        console.log("Could not fetch api, error:",error);
    }
};

function updateMessage(data){
    const message = data.meta.last_updated_at;
    msg.innerText = `Last updated at ${message}`;

};

