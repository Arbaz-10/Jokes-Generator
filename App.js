const BtnEl = document.getElementById("Btn");
const JokeEl = document.getElementById("joke");

const apiKey = "h2GKHnEzTbm6vB4QDRRBvA==nuKLK32jS9aZqToO";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=1';

async function getJoke(){
    try{
        JokeEl.innerText = "Updating...";
        BtnEl.disabled = true;
        BtnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        BtnEl.disabled = false;
        BtnEl.innerText = "Tell me a Joke";
        JokeEl.innerText = data[0].joke;

    } catch(error){
        JokeEl.innerText = "An error, Please try again later..."

        console.log(error);
        BtnEl.disabled = false;
        BtnEl.innerText = "Tell me a Joke";
    }
}

BtnEl.addEventListener("click", getJoke);