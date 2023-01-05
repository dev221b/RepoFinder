// alert("Hello")
var form = document.getElementById("myForm")
form.addEventListener("submit", function(e) {
    e.preventDefault()
    var search = document.getElementById("search").value 
    var originalName = search.split(' ').join('')
    var repo = document.getElementById("rsearch").value
    fetch("https://api.github.com/repos/" + originalName + "/" + repo)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        document.getElementById('result').innerHTML = `
        <h1> ${data.created_at} </h1>
        <a href="${data.clone_url.split('.git').join('')}">${data.clone_url.split('.git').join('')}</a>
        `
    })
    
})