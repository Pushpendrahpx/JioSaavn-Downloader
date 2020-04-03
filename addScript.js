
// Initialising Song URLs
var SONG_URLS = [];


async function postData(url, data) {
    const response = await fetch(url,
        { body:data, 
          headers:{ 'Content-type':'application/x-www-form-urlencoded'}
          ,method: 'POST', 
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
        })
    return await response.json(); 
  }
  





// var pu_e = document.querySelector("#q");
// console.log(pu_e);
// pu_e.value = "Shayad";

var Full_Section = document.querySelectorAll("#main-nav");
var Main_Download = document.createElement("div");
Main_Download.innerHTML = "Download This Song"
Main_Download.setAttribute("class","btn")


Full_Section[0].appendChild(Main_Download)

setInterval(()=>{
    Full_Section[0].removeChild(Main_Download)
    Full_Section[0].appendChild(Main_Download)

},1000)



Main_Download.addEventListener("click",()=>{
    console.log("Dowbloading Song");
    
    let URL = SONG_URLS[0].url;
    // URL = URL.replace(/[^a-zA-Z0-9/]/g,' ');


    console.log(URL)
    postData('https://www.jiosaavn.com/api.php', 
    "url="+URL+"&__call=song.generateAuthToken&_marker=false&_format=json&bitrate=64"
                    )
    .then((data) => {


        if(data.auth_url == false){
            alert("Try Another Song, we were not able to find mp3 Version of this")
        }else
        window.location.href = data.auth_url;

    console.log(data); // JSON data parsed by `response.json()` call




    });

})

setInterval(()=>{
    SONG_URLS = []
    var element = document.querySelectorAll(".song-json");
    console.log(element)
    
    
    
    for(let Song of element)
    {   
        let temp = JSON.parse(Song.innerHTML);
        SONG_URLS.push({name:temp.title,url:temp.url});
        // console.log(SONG_URLS)
    }
    
    },1000)


