import type { Ticket } from "../entities/Ticket";

export interface TicketRepository {
  save(ticket: Ticket): Promise<void>;
  findAll(): Promise<Ticket[]>;
}
