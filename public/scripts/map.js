import { stationIds } from "./route_id.js";

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
    { id: "STL-CLC", trackColor: "transparent" },
    { id: "HLN-CLC", trackColor: "red" },
    { id: "STL-HLN", trackColor: "yellow" },
    { id: "STL-VCR", trackColor: "transparent" },
    { id: "VCR-CLC", trackColor: "transparent" },
  ];

  data.forEach((route) => {
    const track = map.querySelector(`#${route.id}`);

    track.setAttribute("class", "route");
    track.setAttribute("data-route-color", route.trackColor);
    track.setAttribute("data-owner-color", "none");
  });
};

const createStations = () => {
  const posX = 100;
  let posY = 0;
  const container = document.querySelector("#routes_and_stations");
  const stationRef = document.querySelector("#station_ref");
  Object.entries(stationIds).forEach(([name, short]) => {
    const station = stationRef.cloneNode(true);
    station.id = short;
    const text = station.querySelector("tspan");
    text.textContent = name.toUpperCase();
    station.setAttribute("transform", `translate(${posX}, ${posY += 20})`);
    station.setAttribute("inkscape:label", `stn-${short}`);

    container.appendChild(station);
  });
};

const ROUTES = [
  "STL-CLC",
  "HLN-CLC",
  "STL-HLN",
  "STL-VCR",
  "VCR-CLC",
];

const createRoutes = () => {
  const posX = 0;
  let posY = 30;
  const container = document.querySelector("#routes_and_stations");
  const routeRef = document.querySelector("#route_ref");
  ROUTES.forEach((id) => {
    const route = routeRef.cloneNode(true);
    route.id = id;
    route.setAttribute("inkscape:label", `route-${id}`);
    route.setAttribute("transform", `translate(${posX}, ${posY += 30})`);
    route.removeAttribute("style");
    container.appendChild(route);
  });
};

globalThis.onload = async () => {
  const mapContainer = document.querySelector("#map");

  await fetch("/assets/map2.svg")
    .then((res) => res.text())
    .then((data) => {
      const parser = new DOMParser();
      const map = parser.parseFromString(data, "image/svg+xml").documentElement;
      mapContainer.appendChild(map);
    });

  createStations();
  createRoutes();

  loadRoute(mapContainer);
  mapContainer.addEventListener("click", claimRoute);
  // const routes = document.querySelectorAll(".route");
  // console.log([...routes]);
  // routes.forEach((route) => {
  //   console.log(route);
  //   route.addEventListener("click", claimRoute);
  // });
};
