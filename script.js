const $APODButton = $(".APODButton");
const $imageryButton = $(".imageryButton");
const $APODcontainer = $(".APODsubContainer");
const $pictureContainer = $(".pictureContainer");
const $calender = $(".date");
const $solSearch = $(".solSearch");
const $issButton = $(".issButton");
const $issContainer = $("<div></div>").addClass("issDataContainer");
const $solarButton = $(".solarPositions");
const $solarContainer = $(".solarContainer");

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let date = `${yyyy}-${mm}-${dd}`
console.log(date)

$calender.change(() => {
  date = $calender.val()
  console.log(date)
});
$APODButton.click(() => {
  $.get(
    `https://api.nasa.gov/planetary/apod?api_key=XpaEtffKhHiVgIXumgaV7YBjZaC5kEV2naWyLtKg&date=${date}`,
    (data) => {
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
      $APODinformation.text(`"${data.explanation}"`);
    }
  );
});

$calender.change(() => {
  let date = $calender.val();
});
$calender.click(() => {
  $.get(
    `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=XpaEtffKhHiVgIXumgaV7YBjZaC5kEV2naWyLtKg`,
    (data) => {
    }
  );
});

$imageryButton.click(() => {
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

$solarButton.click(() => {
  $.get("https://api.le-systeme-solaire.net/rest/bodies/", (data) => {
    for (let i = 0; i < 100; i++) {
      const $smallSolarContainer = $("<div></div>")
        .addClass("smallSolarContainer")
        .appendTo($solarContainer);
      $solarName = $("<div></div>")
        .addClass("solarName")
        .text(data.bodies[i].englishName)
        .appendTo($smallSolarContainer);
      $avgTemp = $("<div></div>")
        .addClass("avgTemp")
        .text(`Average Temperature: ${data.bodies[i].avgTemp}`)
        .appendTo($smallSolarContainer);
      $bodyType = $("<div></div>")
        .addClass("bodyType")
        .text(`Body Type: ${data.bodies[i].bodyType}`)
        .appendTo($smallSolarContainer);
      $gravity = $("<div></div>")
        .addClass("gravity")
        .text(`Gravity: ${data.bodies[i].gravity}`)
        .appendTo($smallSolarContainer);
      $bodyType = $("<div></div>")
        .addClass("bodyType")
        .text(`Body Type: ${data.bodies[i].bodyType}`)
        .appendTo($smallSolarContainer);
    }
  });
});
