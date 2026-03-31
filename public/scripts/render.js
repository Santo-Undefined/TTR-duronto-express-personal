export const displayPlayerHandTickets = (ticketChoices) => {
  const ticketsContainer = document.querySelector(
    ".hand-destination-tickets > .container",
  );

  const ticketContainers = ticketsContainer.children;

  Object.values(ticketContainers).forEach((ticketElement, index) => {
    const imageElement = document.createElement("img");
    imageElement.setAttribute(
      "src",
      `assets/destination-cards-images/${ticketChoices[index]}.png`,
    );

    ticketElement.append(imageElement)
  });
};