
document.addEventListener('DOMContentLoaded', function() {
    var x = document.querySelector("#SearchInput");
    var results = document.querySelector("#results");
    var progress = document.querySelector("#progress");
    
    var move_forward = document.querySelector(".panel-block");

    progress.style.display = "none"
x.addEventListener("keyup",async (e)=>{
    // console.log(e)
    results.innerHTML = ""
    progress.style.display = "block";
    
    if(x.value == '' || e.key == 'Shift'){
        console.log(e.key)
    }else {
        let response = await fetch('https://www.jiosaavn.com/api.php?__call=autocomplete.get&_marker=0&query='+x.value);
    let data = await response.json();
    data.songs.data.map(song=>{
        // console.log(song)
        var songbox = document.createElement("a");
        songbox.setAttribute("class","panel-block")
        songbox.setAttribute("href",song.url)
        songbox.textContent = song.title
        results.appendChild(songbox)
        progress.style.display = "none"
    })
    }
    progress.style.display = "none"
})

move_forward.addEventListener("click",(value)=>{
    console.log(value)
})

  });