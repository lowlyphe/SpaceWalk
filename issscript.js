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


const getISSdata = () => {
  $.get("https://api.wheretheiss.at/v1/satellites/25544", (data) => {
    $issContainer.empty();
    $issContainer.appendTo($ISSmainContainer);
    const $issTitle = $("<div></div>")
      .addClass("issTitle")
      .appendTo($issContainer)
      .text("Location Data");
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

