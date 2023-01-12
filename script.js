const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var search = (tabs[0].url);
        getRepos(search)
    });
})

async function getRepos(search) {
    var repo1 = search.split('https://').join('')
    var repo = repo1.split(".com").join("")
    
    const url = "https://api.github.com/search/repositories?q="+repo+";per_page=1"
    console.log(url)
    btn.remove()
    const divResult = document.getElementById("divResult")
    const response = await fetch(url)
    const result = await response.json()
    result.items.forEach(i=>{

        const anchor = document.createElement("a")
        anchor.href = i.html_url
        console.log(anchor.href)
        anchor.target = "_blank"
        anchor.textContent = i.full_name
        divResult.appendChild(anchor)
        divResult.appendChild(document.createElement("br"))
    })
};
