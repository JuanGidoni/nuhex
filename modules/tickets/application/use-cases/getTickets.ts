import type { TicketRepository } from "../../domain/repositories/TicketRepository";
import type { Ticket } from "../../domain/entities/Ticket";

export class GetTickets {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async execute(): Promise<Ticket[]> {
    return this.ticketRepository.findAll();
  }
}
