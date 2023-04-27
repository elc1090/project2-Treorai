export default function updateGallery(chars){
    const profilehead = document.getElementById("profilehead");
    const sortfield = document.getElementById("sortfield");

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
    
    sortfield.style.display = 'block';
    profilehead.style.display = 'block';
}