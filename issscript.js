const $APODButton = $(".APODButton");
const $imageryButton = $(".imageryButton");
const $APODcontainer = $(".APODsubContainer");
const $pictureContainer = $(".pictureContainer");
const $calender = $(".date");
const $solSearch = $(".solSearch");
const $issButton = $(".issButton");
const $issContainer = $(".issDataContainer");
const $solarButton = $(".solarPositions");
const $ISSmainContainer = $('.ISSmainContainer')

let date = $calender.val();
$calender.change(() => {
  date = $calender.val();
  console.log(date);
});
$APODButton.click(() => {
  $.get(
    `https://api.nasa.gov/planetary/apod?api_key=XpaEtffKhHiVgIXumgaV7YBjZaC5kEV2naWyLtKg&date=${date}`,
    (data) => {
      console.log(data);
      $APODcontainer.empty();
      const $APODtitleContainer = $("<div></div>")
        .addClass("titleandtitle")
        .appendTo($APODcontainer);

      const $APODTitle = $("<h3></h3>");
      $APODtitleContainer.append($APODTitle);
      const $APODinformation = $("<h2></h2>").addClass("APODInformation");
      $APODtitleContainer.append($APODinformation);
      const $APODImagecontainer = $("<div></div>").addClass("APODpicture");
      $APODcontainer.append($APODImagecontainer);
      const $APODImage = $("<img></img>");
      $APODImagecontainer.append($APODImage);
      $APODImage.attr("src", data.hdurl);
      $APODTitle.text(data.title);
      console.log(data.title);
      $APODinformation.text(`"${data.explanation}"`);
    }
  );
});

$calender.change(() => {
  let date = $calender.val();
  console.log(date);
});
$calender.click(() => {
  $.get(
    `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=XpaEtffKhHiVgIXumgaV7YBjZaC5kEV2naWyLtKg`,
    (data) => {
      console.log(data);
    }
  );
});

$imageryButton.click(() => {
  console.log("click");
  $pictureContainer.empty();
  $.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solDate}&api_key=XpaEtffKhHiVgIXumgaV7YBjZaC5kEV2naWyLtKg`,
    (data) => {
      for (let i = 0; i < 26; i++) {
        const $marsPic = $("<div></div>").addClass("marsPic");
        $pictureContainer.append($marsPic);
        const $marsImg = $("<img></img>");
        $marsPic.append($marsImg);
        $marsImg.attr("src", data.photos[i].img_src);
      }
    }
  );
});

let solDate = 1000;
$solSearch.change(() => {
  solDate = $solSearch.val();
});

const getISSdata = () => {
  $.get("https://api.wheretheiss.at/v1/satellites/25544", (data) => {
    $issContainer.empty();
    $issContainer.appendTo($ISSmainContainer);
    const $issTitle = $("<div></div>")
      .addClass("issTitle")
      .appendTo($issContainer)
      .text("International Space Station");
    const $altitude = $("<div></div>")
      .appendTo($issContainer)
      .addClass("altitude")
      .text(`Altitude: ${data.altitude} KM`);
    const $latitude = $("<div></div>")
      .addClass("latitude")
      .appendTo($issContainer)
      .text(`Latitude: ${data.latitude}`);
    const $longitude = $("<div></div>")
      .addClass("longitude")
      .appendTo($issContainer)
      .text(`Longitude: ${data.longitude}`);
    const $solar_lat = $("<div></div>")
      .addClass("solar_lat")
      .appendTo($issContainer)
      .text(`Solar Latitude: ${data.solar_lat}`);
    const $solar_lon = $("<div></div>")
      .addClass("solar_lon")
      .appendTo($issContainer)
      .text(`Solar Longitude: ${data.solar_lon}`);
  });
};
getISSdata();
setInterval(getISSdata, 5000);

$solarButton.click(() => {
  $.get("https://api.le-systeme-solaire.net/rest/bodies/", (data) => {
    console.log(data);
  });
});
