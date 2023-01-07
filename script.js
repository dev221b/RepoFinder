// alert("Hello")

const btn = document.getElementById("btn")

btn.addEventListener("click", getRepos)


// var form = document.getElementById("myForm")
// form.addEventListener("submit", function(e) {
//     e.preventDefault()



    // var search = document.getElementById("search").value 
    // var origName = search.split('https://').join('')
    // var originalName = origName.split('.com').join('')
   
   
   
    // var repo = document.getElementById("rsearch").value
    // var repo1 = repo.split('https://').join('')
    // var repo2 = repo1.split('.com').join('')
    // getRepos()



    // var page = 1
    // var per_page = 1
    // var sort = "created"
    // var order = 
    // fetch("https://api.github.com/repos/" + originalName + "/" + repo)
    


    // fetch("https://api.github.com/search/repositoris?q="+repo2)
    // .then((result) => result.json())
    // .then((data) => {
    //     console.log(data)



        // document.getElementById('result').innerHTML = `
        // <h1> ${data.created_at} </h1>
        // <a href="${data.clone_url.split('.git').join('')}">${data.clone_url.split('.git').join('')}</a>
        // `



    // 
    
    

    async function getRepos(){
        const repo = document.getElementById("rsearch").value
        const url = "https://api.github.com/search/repositories?q="+document.location.hostname
        console.log(url)
        const divResult = document.getElementById("divResult")
        const response = await fetch(url)
        const result = await response.json()
        result.items.forEach(i=>{

            const anchor = document.createElement("a")
            anchor.href = i.html_url
            anchor.textContent = i.full_name
            divResult.appendChild(anchor)
            divResult.appendChild(document.createElement("br"))
        })
    }
    
// })