let nextPageToken="";function getvideos(){fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCeIWn_wj33h_-pnxOgViRyA&maxResults=10&order=date&key=AIzaSyDAz_Tw7oO840L-gfpwliC2w0hL4rerKA0&pageToken="+nextPageToken).then(e=>e.json()).then(e=>{console.log(e.nextPageToken);let t=e.items;nextPageToken=e.nextPageToken;let n=document.querySelector(".youtube-container");for(video of t)n.innerHTML+=`\n        <div class = "video-section container slide">\n            <div class = "video-image">\n            <img src="${video.snippet.thumbnails.high.url}">\n            </div>\n            <div class = "video-info">\n            <h3>${video.snippet.title}</h3>\n            <p>${video.snippet.description}</p>\n            <a href ="https://www.youtube.com/watch?v=${video.id.videoId}">Ingresa al Video</a>\n            </div>\n        </div>\n            `;document.querySelectorAll('[data-component="slideshow"]').forEach((function(e){var t=document.querySelectorAll(`#${e.id} [role="list"] .slide`),n=0;t[n].classList.add("active"),setInterval(()=>{t[n].classList.remove("active"),++n===t.length&&(n=0),t[n].classList.add("active")},5e3)}))})}getvideos();
//# sourceMappingURL=youtube.js.map
