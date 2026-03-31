import { shuffle } from "@std/random";

export const getTicketCards = () => {
  const ticketCards = [
    { id: "BOS-MIM", src: "Boston", dest: "Miami", points: 12 },
    { id: "DLS-NYC", src: "Dallas", dest: "New York", points: 11 },
    { id: "CHG-NOL", src: "Chicago", dest: "New Orleans", points: 7 },
    { id: "DVR-ELP", src: "Denver", dest: "El Paso", points: 4 },
    { id: "WPG-LRK", src: "Winnipeg", dest: "Little Rock", points: 11 },
  ];

  return shuffle(ticketCards);
};
