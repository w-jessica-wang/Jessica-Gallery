// Gallery Data
const themes = [
    { 
        name: "Conducting", 
        images: [
            "images/7.jpg",
            "images/2.jpg", 
            "images/5.jpg",
            "images/1.jpg", 
            "images/6.jpg"
        ]
    },
    { 
        name: "Violin", 
        images: [
            "images/violin2.jpg",
            "images/violin7.jpg",
            "images/violin1.jpg",
            "images/violin3.jpg",
            "images/violin5.jpg",
            "images/violin6.jpg"
        ] 
    },
    { 
        name: "Ballet",
        images: [
            "images/ballet1.jpg",
            "images/ballet2.jpg",
            "images/ballet3.jpg",
            "images/ballet4.jpg",
            "images/ballet5.jpg"
        ]
    },
    { 
        name: "C-Pop",
        images: [
            "images/cpop5.jpg",
            "images/cpop6.jpg",
            "images/cpop1.jpg",
            "images/cpop3.jpg",
            "images/cpop2.jpg"
        ] 
    },
    { 
        name: "Awards",
        images: [
            "images/buttram.jpg",
            "images/keith.jpg",
            "images/solo20.jpg",
            "images/group20.jpg",
            "images/solo19.jpg",
            "images/group19.jpg",
            "images/ballet2nd.jpg"
        ],
        descriptions:[
            "OKCPHIL Young Musician Competition Grand Prize",
            "OKCPHIL Young Musician Competition Division 1st Prize",
            "Violin Solo 1st Prize, Province Competition, Tianjin 2020",
            "Concertmaster, String Ensemble 1st Prize, Province Competition, Tianjin 2020",
            "Violin Solo 1st Prize, 2019",
            "Concertmaster, String Ensemble 1st Prize, 2019",
            "Ballet Solo - Black Swan, 2nd Prize District Competition, Tianjin 2020"
        ]
    }
];

let currentThemeIndex = 0;
let currentImageIndex = 0;

// Elements
const landing = $("#landing");
const gallery = $("#gallery");
const theEnd = $("#the-end");
const themeTitle = $("#theme-title");
const flipbook = $("#flipbook");
const imageDescription = $("#image-description");

// Start Button
$("#start-button").click(() => {
    landing.hide();
    gallery.show();
    loadImage();
});

// Restart Button
$("#restart-button").click(() => {
    theEnd.hide();
    landing.show();
    currentThemeIndex = 0;
    currentImageIndex = 0;
});

// Load current image
function loadImage() {
    window.scrollTo(0,0); // scroll to top on each image

    const theme = themes[currentThemeIndex];
    const imageSrc = theme.images[currentImageIndex];
    const description = theme.descriptions 
        ? theme.descriptions[currentImageIndex] 
        : "";

    themeTitle.text(theme.name);
    flipbook.html(`<div><img src="${imageSrc}" alt="${theme.name}"></div>`);
    imageDescription.text(description);
}

// Next Button
$("#next-button").click(() => {
    const theme = themes[currentThemeIndex];
    if (currentImageIndex < theme.images.length - 1) {
        currentImageIndex++;
        loadImage();
    } else if (currentThemeIndex < themes.length - 1) {
        currentThemeIndex++;
        currentImageIndex = 0;
        loadImage();
    } else {
        gallery.hide();
        theEnd.show();
        launchConfetti();
    }
});

// Back Button
$("#prev-button").click(() => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else if (currentThemeIndex > 0){
        currentThemeIndex--;
        currentImageIndex = themes[currentThemeIndex].images.length - 1;
    } else {
        gallery.hide();
        landing.show();
        return;
    }
    loadImage();
});

// Confetti on the end
function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: {y:0.6}
    });
}

// Initialize Landing
landing.show();
