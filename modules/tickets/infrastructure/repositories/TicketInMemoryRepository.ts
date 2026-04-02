import type { TicketRepository } from "../../domain/repositories/TicketRepository";
import type { Ticket } from "../../domain/entities/Ticket";

export class TicketInMemoryRepository implements TicketRepository {
  private tickets: Ticket[] = [];

  async save(ticket: Ticket): Promise<void> {
    this.tickets.push(ticket);
  }

  async findAll(): Promise<Ticket[]> {
    return this.tickets;
  }
}
