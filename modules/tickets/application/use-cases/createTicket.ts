import type { TicketRepository } from "../../domain/repositories/TicketRepository";
import { Ticket } from "../../domain/entities/Ticket";
import { TicketItem } from "../../domain/entities/TicketItem";

export type CreateTicketInput = {
  id: string;
  date: Date;
  store: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

export class CreateTicket {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async execute(input: CreateTicketInput): Promise<void> {
    const items = input.items.map(
      (item) =>
        new TicketItem({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        }),
    );

    const ticket = new Ticket({
      id: input.id,
      date: input.date,
      store: input.store,
      items,
    });

    await this.ticketRepository.save(ticket);
  }
}
