import { routeDetails, stationIds } from "./route_id.js";

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
  routeDetails.forEach((route) => {
    console.log(route);
    const track = map.querySelector(`#${route.id}`);

    track.setAttribute("class", "route");
    track.setAttribute("data-route-color", route.trackColor);
    track.setAttribute("data-route-length", route.trackLength);
    track.setAttribute("data-owner-color", "none");
  });
};

export const createStations = () => {
  const posX = 100;
  let posY = 0;
  const container = document.querySelector("#routes_and_stations");
  const stationRef = document.querySelector("#station_ref");
  Object.entries(stationIds).forEach(([name, short]) => {
    if (container.querySelector(`stn-${short}`)) return;

    const station = stationRef.cloneNode(true);
    station.id = short;
    const text = station.querySelector("tspan");
    text.textContent = name.toUpperCase();
    station.setAttribute("transform", `translate(${posX}, ${posY += 20})`);
    station.setAttribute("inkscape:label", `stn-${short}`);

    container.appendChild(station);
  });
};

export const createRoutes = () => {
  const posX = 0;
  let posY = 30;
  const container = document.querySelector("#routes_and_stations");
  const routeRef = document.querySelector("#route_ref");
  routeDetails.forEach(({ id }) => {
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

  // createStations();
  // createRoutes();

  loadRoute(mapContainer);
  mapContainer.addEventListener("click", claimRoute);
};
