//const api_key = API_KEY;

// Get the username input form
const brawlForm = document.getElementById('brawlForm');
const searchRepoButton = document.getElementById('searchRepoButton');

searchRepoButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchRepoButton.disabled = true;
    searchRepoButton.textContent = 'Wait';

    //start doing stuff
    let username = document.getElementById('usernameInput').value;
    if(username){
        console.log(username);
        let url = `https://api.brawlhalla.com/player/${username}/stats&api_key=${api_key}`;
        getUserInfo(url);
    }
    //end stuffs

    searchRepoButton.textContent = 'Search';
    searchRepoButton.disabled = false;
});

async function getUserInfo(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    updateProfile(data);
    updateGallery(data.legends);
}

function updateProfile(data){
    document.getElementById("miuser").textContent=data.name;
    document.getElementById("milvl").textContent=data.level+` (${(data.xp_percentage*100).toFixed(2)}%)`;
    document.getElementById("migames").textContent=data.games;
    document.getElementById("miwins").textContent=data.wins+` (${(100*data.wins/data.games).toFixed(2)}%)`;
}

function updateGallery(chars){
    let ul = document.getElementById('repoCommits');
    ul.innerHTML = "";
    for(let i in chars){
        let li = document.createElement('li');
        li.classList.add('list-group-item');

        li.innerHTML = (`
            <div class='input-group mb-3'>
                <div style="display: inline-block; vertical-align: middle; margin-left: 4px;">
                    <img style="width: 100px; height:100px; border-radius: 0%;" src="./assets/chars/${chars[i].legend_name_key}.webp">
                    <p><strong>${chars[i].legend_name_key.toUpperCase()}</strong></p>
                </div>
                <div style="display: inline-block; vertical-align: middle;">
                    <p><strong>Level: </strong> ${chars[i].level}</p>
                    <p><strong>KDA: </strong> ${chars[i].kos}/${(chars[i].falls+chars[i].suicides)}/${chars[i].teamkos} (${(chars[i].kos/(chars[i].falls+chars[i].suicides)).toFixed(2)})</p>
                    <p><strong>Winrate: </strong> ${(100*chars[i].wins/chars[i].games).toFixed(2)}%</p>
                </div>
            </div>
        `);

        ul.appendChild(li);

    }
    
    

}