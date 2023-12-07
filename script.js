"use strict";
const amuludunFm = document.querySelector(".amuludunFm");
const premierFm = document.querySelector(".premierFm");
const paramountFm = document.querySelector(".paramountFm");
const positiveFm = document.querySelector(".positiveFm");
const progressFm = document.querySelector(".progressFm");
const goldFm = document.querySelector(".goldFm");
const ogoIluFm = document.querySelector(".ogoIluFm");
const asabariFm = document.querySelector(".asabariFm");
const displayImage = document.querySelector(".display-image");
const playBtn = document.querySelector(".play");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const radioStations = {
  amuludunFm: {
    name: "Amuludun Fm",
    url: "https://eu8.fastcast4u.com/proxy/amuludun?mp=/1%27",
  },
  premierFm: {
    name: "Premier Fm",
    url: "https://eu8.fastcast4u.com/proxy/premierfm?mp=/1",
  },
  paramountFm: {
    name: "Paramount Fm",
    url: "https://eu8.fastcast4u.com/proxy/paramountfm?mp=/1",
  },
  positiveFm: {
    name: "Positive Fm",
    url: "https://eu8.fastcast4u.com/proxy/positive?mp=/1",
  },
  progressFm: {
    name: "Progress Fm",
    url: "https://eu8.fastcast4u.com/proxy/progress?mp=/1",
  },
  goldFm: {
    name: "Gold Fm",
    url: "https://eu8.fastcast4u.com/proxy/gold?mp=/1",
  },
  ogoIluFm: {
    name: "Ogo Ilu Fm",
    url: "https://eu8.fastcast4u.com/proxy/ogoilu?mp=/1",
  },
  // asabariFm: {
  //   name: "Asabari Fm",
  //   url:
  // }
};

const stations = [
  amuludunFm,
  premierFm,
  paramountFm,
  positiveFm,
  progressFm,
  goldFm,
  ogoIluFm,
  // asabariFm,
];
function removeDefaultBackgroundColor(el) {
  el.classList.remove("default-background-color");
}

function removeDefault(currentStation, allStations) {
  allStations.forEach((station) => {
    if (station !== currentStation) {
      removeDefaultBackgroundColor(station);
    }
  });
}
// function playPauseStation(station) {
//   const audio = new Audio(station.url);
//   audio.play();
// }
function changeStationImage(imgContainer, imgSource) {
  imgContainer.src = imgSource;
}
// function checkBackgroundColor(stations) {
//   const result = stations.find((station) => {
//     station.classList.contains("default-background-color");
//     return result;
//   });
//   // console.log(result)
// }

function checkBackgroundColor(stations) {
  console.log("Hello");
  // Find the station that has the class default-background-color
  const result = stations.find((station) =>
    station.classList.contains("default-background-color")
  );
  return result;
}

checkBackgroundColor(stations);

let currentlyPlaying = null;
let audioPlayer = null;



function pauseRadioStation() {
  if (audioPlayer !== null) {
    audioPlayer.pause();
    audioPlayer = null;
    currentlyPlaying = null;

    // Change play button icon to the stop icon
    // playBtn.setAttribute("name", "stop");
  }
}
// const markup = `<ion-icon name="stop"></ion-icon>`;
function playRadioStation() {
  const radioStationToPlay = checkBackgroundColor(stations);

  if (radioStationToPlay) {
    const selectedStation = radioStationToPlay.classList[0];

    // If the selected station is already playing, pause it
    if (currentlyPlaying === selectedStation) {
      // playBtn.setAttribute("name", "stop");
      pauseRadioStation();
    } else {
      // Stop the currently playing station if there is one
      if (currentlyPlaying !== null) {
        // playBtn.setAttribute("name", "play");
        pauseRadioStation();
      }

      // Play the selected station
      const audio = new Audio(radioStations[selectedStation].url);
      audio.play();
      audioPlayer = audio;
      currentlyPlaying = selectedStation;
    }
  } else {
    console.error("No station with default background color found.");
  }
}

function getStationImageSource(station) {
  const stationName = station.classList[0];
  return `img/${stationName.toLowerCase()}.png`;
}

function previousStation() {
  const currentIndex = stations.findIndex((station) => {
    return station.classList.contains("default-background-color");
  });
  if (currentIndex > 0) {
    // removeDefault(stations[currentIndex], stations);
    removeDefaultBackgroundColor(stations[currentIndex]);
    stations[currentIndex - 1].classList.add("default-background-color");

    const currentStation = stations[currentIndex - 1];
    const currentImage = getStationImageSource(currentStation);
    changeStationImage(displayImage, currentImage);
  }
}

function nextStation() {
  const currentIndex = stations.findIndex((station) => {
    return station.classList.contains("default-background-color");
  });
  if (currentIndex < stations.length) {
    removeDefaultBackgroundColor(stations[currentIndex]);
    stations[currentIndex + 1].classList.add("default-background-color");
    const currentStation = stations[currentIndex + 1];
    const currentImage = getStationImageSource(currentStation);
    changeStationImage(displayImage, currentImage);
  }
}

amuludunFm.addEventListener("click", function () {
  removeDefault(amuludunFm, stations);

  this.classList.add("default-background-color");
  changeStationImage(displayImage, "img/amuludunfm.png");
  // playPauseStation(radioStations.amuludun);
});
premierFm.addEventListener("click", function () {
  removeDefault(premierFm, stations);

  this.classList.add("default-background-color");
  changeStationImage(displayImage, "img/premierfm.png");
  // playPauseStation(radioStations.premier);
});

paramountFm.addEventListener("click", function () {
  removeDefault(paramountFm, stations);

  this.classList.add("default-background-color");
  changeStationImage(displayImage, "img/paramountfm.png");
  // playPauseStation(radioStations.paramount);
});

positiveFm.addEventListener("click", function () {
  removeDefault(positiveFm, stations);

  this.classList.add("default-background-color");
  changeStationImage(displayImage, "img/positivefm.png");
  // playPauseStation(radioStations.positive);
});

progressFm.addEventListener("click", function () {
  removeDefault(progressFm, stations);

  this.classList.add("default-background-color");
  changeStationImage(displayImage, "img/progressfm.png");
  // playPauseStation(radioStations.progress);
});

goldFm.addEventListener("click", function () {
  removeDefault(goldFm, stations);

  this.classList.add("default-background-color");
  changeStationImage(displayImage, "img/goldfm.png");
  // playPauseStation(radioStations.gold);
});
ogoIluFm.addEventListener("click", function () {
  removeDefault(ogoIluFm, stations);

  this.classList.add("default-background-color");
  changeStationImage(displayImage, "img/ogoilufm.png");
  // playPauseStation(radioStations.ogoIlu);
});
// asabariFm.addEventListener("click", function () {
//   removeDefault(asabariFm, stations);
//   this.classList.add("default-background-color");
//   changeStationImage(displayImage, "img/Asabari.png");
// });

previousBtn.addEventListener("click", function () {
  previousStation();
});
nextBtn.addEventListener("click", function () {
  nextStation();
});
playBtn.addEventListener("click", function () {
  playRadioStation();
  // pauseRadioStation();
});
