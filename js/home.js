var aboutUsObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        document.getElementById("about-us-nav").classList.add("active");
    }else{
        document.getElementById("about-us-nav").classList.remove("active");
    }
}, { threshold: [0] });
aboutUsObserver.observe(document.getElementById("about-us-title"));


var testimoniesObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        document.getElementById("testimonies-nav").classList.add("active");
    }else{
        document.getElementById("testimonies-nav").classList.remove("active");
    }
}, { threshold: [0] });
testimoniesObserver.observe(document.getElementById("testimonies-title"));
