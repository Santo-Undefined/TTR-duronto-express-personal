const CITIES = {
  "Vancouver": "VCR",
  "Seattle": "STL",
  "Portland": "PLD",
  "San Francisco": "SFO",
  "Salt Lake City": "SLC",
  "Boston": "BSN",
  "Charleston": "CLN",
  "Nashville": "NVL",
  "Pittsburgh": "PBH",
  "Duluth": "DLT",
  "New Orleans": "NOL",
  "Raleigh": "RGH",
  "El Paso": "ELP",
  "Phoenix": "PHX",
  "Santa Fe": "SFE",
  "Denver": "DVR",
  "Helena": "HLN",
  "New York": "NYC",
  "Miami": "MIM",
  "St Louis": "SLS",
  "Toronto": "TRT",
  "Kansas City": "KCT",
  "Houston": "HTN",
  "Calgary": "CLC",
  "Winnipeg": "WPG",
  "Las Vegas": "LVS",
  "Oklahoma City": "OKC",
  "Sault St. Marie": "SSM",
  "Montreal": "MTL",
  "Washington": "WDC",
  "Atlanta": "ATL",
  "Chicago": "CHG",
  "Omaha": "OMH",
  "Little Rock": "LRK",
  "Dallas": "DLS",
};

const claimRoute = (e) => {
  const userData = {
    color: "green",
  };

  const route = e.target.closest(".route");
  if (route.getAttribute("data-owner-color") === "none") {
    route.setAttribute("data-owner-color", userData.color);
  } else {
    route.setAttribute("data-owner-color", "none");
  }
};

const loadRoute = (map) => {
  const data = [
    { id: "route-STL-CLC", trackColor: "transparent" },
    { id: "route-HLN-CLC", trackColor: "transparent" },
    { id: "route-STL-HLN", trackColor: "yellow" },
    { id: "route-STL-VCR", trackColor: "transparent" },
    { id: "route-VCR-CLC", trackColor: "transparent" },
  ];

  data.forEach((route) => {
    const track = map.querySelector(`#${route.id}`);
    track.setAttribute("data-route-color", route.trackColor);
    track.setAttribute("data-owner-color", "none");
  });
};

const createStations = () => {
  const posX = 100;
  let posY = 0;
  const container = document.querySelector("#routes_and_stations");
  const stationRef = document.querySelector("#station_ref");
  Object.entries(CITIES).forEach(([name, short]) => {
    const station = stationRef.cloneNode(true);
    station.id = short.toUpperCase();
    const text = station.querySelector("tspan");
    text.textContent = name;
    station.setAttribute("transform", `translate(${posX}, ${posY += 20})`);
    container.appendChild(station);
  });
};

const ROUTES = ["HLN-MIM", "STL-CLC", "VCR-CLC"];

const createRoutes = () => {
  const posX = 0;
  let posY = 30;
  const container = document.querySelector("#routes_and_stations");
  const routeRef = document.querySelector("#route_ref");
  console.log(routeRef);
  ROUTES.forEach((id) => {
    const route = routeRef.cloneNode(true);
    route.id = id;
    route.setAttribute("transform", `translate(${posX}, ${posY += 30})`);
    container.appendChild(route);
  });
};

globalThis.onload = async () => {
  const mapContainer = document.querySelector("#map");

  await fetch("/assets/map.svg")
    .then((res) => res.text())
    .then((data) => {
      const parser = new DOMParser();
      const map = parser.parseFromString(data, "image/svg+xml").documentElement;
      mapContainer.appendChild(map);
    });

  createStations();
  createRoutes();

  const routes = document.querySelectorAll(".route");

  loadRoute(mapContainer);
  routes.forEach((route) => {
    route.addEventListener("click", claimRoute);
  });
};
