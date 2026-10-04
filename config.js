const disableSetup = true;
const disableLdCfg = true;
var topBarCenterText = "Bolivia - Station 7";

// Grid layout desired
var layout_cols = 1;
var layout_rows = 2;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "#2196f3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/34.07/-78.15",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=34.07&lon=-78.15&zoom=5",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.15,34.07,3000",
    1,
    "R"
  ]
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  [
    "Radar",
    "https://radar.weather.gov/ridge/standard/SOUTHEAST_loop.gif",
    "https://radar.weather.gov/ridge/standard/KLTX_loop.gif",
    "https://www.weather.gov/images/rah/statebrief/MaxT_SFC-Day1State.png",
    "https://www.weather.gov/wwamap/png/ilm.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_pac_7d0.png",
    "https://www.weather.gov//images/ilm/WxStory/WeatherStory1.png",
    "https://www.weather.gov//images/ilm/WxStory/WeatherStory5.png",
  ],
  [
    "Fire Weather",
    "https://www.weather.gov/images/ilm/ghwo/FireWeatherDay1.jpg",
    "https://www.spc.noaa.gov/products/fire_wx/day1otlk_fire.png",
    "https://droughtmonitor.unl.edu/data/png/current/current_wfoilm_trd.png",
    "https://www.weather.gov/images/ilm/GraphiDSSforDSSBuilder/MaxHeatIndex_D1.png",
    "https://www.weather.gov/images/ilm/GraphiDSSforDSSBuilder/MinRH_Day1.png"
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  10000,  
  10000
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  // [
  //   "https://www.brunswickcountync.gov/RSSFeed.aspx?ModID=63&CID=Severe-Weather-7",
  //   5
  // ],
  [
    "https://www.nhc.noaa.gov/xml/TWDAT.xml",
    60
  ],
  // [
  //   "https://www.brunswickcountync.gov/RSSFeed.aspx?ModID=1&CID=Emergency-Management-15",
  //   60
  // ],
  [
    "https://www.brunswickcountync.gov/RSSFeed.aspx?ModID=1&CID=Fire-Marshals-Office-14",
    60
  ]
];