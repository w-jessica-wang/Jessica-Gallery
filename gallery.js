//Gallery Data
const themes=[
    { name: "Conducting", 
        images:[
        "Images/7.jpg",
        "Images/2.jpg", 
        "Images/5.jpg",
        "Images/1.jpg", 
        "Images/6.jpg",
        ]
    },
    { name: "Violin", 
        images: [
        "Images/violin2.jpg",
        "Images/violin7.jpg",
        "Images/violin1.jpg",
        "Images/violin3.jpg",
        "Images/violin5.jpg",
        "Images/violin6.jpg"
        ] 
    },
    { name: "Ballet",
        images: [
        "Images/ballet1.jpg",
        "Images/ballet2.jpg",
        "Images/ballet3.jpg",
        "Images/ballet4.jpg",
        "Images/ballet5.jpg"
        ]
    },
    { name: "C-Pop",
        images: [
        "Images/cpop5.jpg",
        "Images/cpop6.jpg",
        "Images/cpop1.jpg",
        "Images/cpop3.jpg",
        "Images/cpop2.jpg"
        ] 
    },
    { name: "Awards",
        images: [
        "Images/buttram.jpg",
        "Images/keith.jpg",
        "Images/solo20.jpg",
        "Images/group20.jpg",
        "Images/solo19.jpg",
        "Images/group19.jpg",
        "Images/ballet2nd.jpg"
        ],
        descriptions:["OKCPHIL Young Musician Competition Grand Prize ",
            "OKCPHIL Young Musician Competition Division 1st Prize",
            "Violin Solo 1st Prize Province Competition, Awarded by Tianjin Municipal Education Commission 2020",
            "Concertmaster, String Ensemble 1st Prize Province Competition, Awarded by Tianjin Municipal Education Commission 2020 ",
            "Violin Solo 1st Prize, 2019",
            "Concertmaster, String Ensemble 1st Prize, 2019",
            "Ballet Solo-Black Swan, 2nd Prize Distrct Competition, Awarded by Tianjin Municipal Education Commission 2020 "
    ],
}
];

let currentThemeIndex=0;
let currentImageIndex=0;

//Elements
const landing=$("#landing");
const gallery=$("#gallery");
const theEnd=$("#the-end");
const themeTitle=$("#theme-title");
const flipbook=$("#flipbook");

//Start Button
$("#start-button").click(()=> {
    landing.hide();
    gallery.show();
    loadImage();
});

//Restart Button
$("#restart-button").click(()=> {
    theEnd.hide();
    landing.show();
    currentThemeIndex=0;
    currentImageIndex=0;
});

//Load current image in flipbook
function loadImage(){

  window.scrollTo(0,0);

  const theme = themes[currentThemeIndex];
  const imageSrc = theme.images[currentImageIndex];
  const description = theme.descriptions
    ? theme.descriptions[currentImageIndex]
    : "";

  themeTitle.text(theme.name);
  flipbook.html(`<div><img src="${imageSrc}" alt="${theme.name}"></div>`);
  $("#image-description").text(description);
}



//Next Button
$("#next-button").click(()=> {
    const theme=themes[currentThemeIndex];
    if (currentImageIndex<theme.images.length-1) {
        currentImageIndex++;
        loadImage();
    } else if (currentThemeIndex<themes.length -1) {
        currentThemeIndex++;
        currentImageIndex=0;
        loadImage();
    } else {
        //End of gallery
        gallery.hide();
        theEnd.show();
        launchConfetti();
    }
});

//back button
$("#prev-button").click(()=> {
    if (currentImageIndex>0) {
        currentImageIndex--;
    } else if (currentThemeIndex>0){
        currentThemeIndex--;
        currentImageIndex=themes[currentThemeIndex].images.length-1;
    } else{
        // if user is on very first image of the first theme, go back to landing
        gallery.hide();
        landing.show();
        return;
    }
    loadImage();
});

//Confetti on the end
function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: {y:0.6}
    });
}

// Initialize Landing
landing.show();
