import type { TicketRepository } from "../../domain/repositories/TicketRepository";
import { TicketInMemoryRepository } from "./TicketInMemoryRepository";
import { TicketApiRepository } from "./TicketApiRepository";

export function createTicketRepository(type: string): TicketRepository {
  switch (type) {
    case "memory":
      return new TicketInMemoryRepository();

    case "api":
      return new TicketApiRepository();

    default:
      throw new Error(`Unknown repository type: ${type}`);
  }
}
