import type { TicketRepository } from "../../domain/repositories/TicketRepository";
import type { Ticket } from "../../domain/entities/Ticket";

export class TicketApiRepository implements TicketRepository {
  async save(ticket: Ticket): Promise<void> {
    await $fetch("/api/tickets", {
      method: "POST",
      body: ticket,
    });
  }

  async findAll(): Promise<Ticket[]> {
    const data = await $fetch<Ticket[]>("/api/tickets");
    return data;
  }
}
