let nextPageToken="";function getvideos(){fetch("./build/js/video.json").then(e=>e.json()).then(e=>{console.log(e.nextPageToken);let i=e.items;nextPageToken=e.nextPageToken;let n=document.querySelector(".youtube-container");for(video of i)n.innerHTML+=`\n        <div class = "video-section container slide" role= "article" aria-describedby="videolist">\n            <div class = "video-image">\n            <img src="${video.snippet.thumbnails.high.url}" alt = "video-tetto">\n            </div>\n            <div class = "video-info">\n            <h3>${video.snippet.title}</h3>\n            <p>${video.snippet.description}</p>\n            <a href ="https://www.youtube.com/watch?v=${video.id.videoId}">Ingresa al Video</a>\n            </div>\n        </div>\n            `;document.querySelectorAll('[data-component="slideshow"]').forEach((function(e){var i=document.querySelectorAll(`#${e.id} [role="list"] .slide`),n=0;i[n].classList.add("active"),setInterval(()=>{i[n].classList.remove("active"),++n===i.length&&(n=0),i[n].classList.add("active")},5e3)}))})}getvideos();
//# sourceMappingURL=youtube.js.map
