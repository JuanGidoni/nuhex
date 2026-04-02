import type { GetTickets } from "../use-cases/getTickets";
import type { CreateTicket } from "../use-cases/createTicket";

export type TicketsService = {
  getTickets: GetTickets;
  createTicket: CreateTicket;
};
