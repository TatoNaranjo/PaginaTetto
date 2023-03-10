let nextPageToken = ""


function getvideos(){
    fetch("./build/js/video.json")
    .then((result)=>{
        return result.json()
    }).then((data)=>{
        console.log(data.nextPageToken)
        let videos = data.items
        nextPageToken =data.nextPageToken
        let videoContainer = document.querySelector(".youtube-container")
        let i = 0;
        for(video of videos){
            i++;
            videoContainer.innerHTML += `
        <div class = "video-section container slide">
            <div class = "video-image">
            <img src="${video.snippet.thumbnails.high.url}">
            </div>
            <div class = "video-info">
            <h3>${video.snippet.title}</h3>
            <p>${video.snippet.description}</p>
            <a href ="https://www.youtube.com/watch?v=${video.id.videoId}" class = "video-button">Ingresa al Video</a>
            </div>
        </div>
            `
            
        }

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}
    })
}
getvideos();
