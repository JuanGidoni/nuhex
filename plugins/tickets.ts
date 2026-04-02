import { createTicketRepository } from "@/modules/tickets/infrastructure/repositories/ticketRepositoryFactory";
import { GetTickets } from "@/modules/tickets/application/use-cases/getTickets";
import { CreateTicket } from "@/modules/tickets/application/use-cases/createTicket";
import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const repository = createTicketRepository(config.public.repositoryType);

  const getTickets = new GetTickets(repository);
  const createTicket = new CreateTicket(repository);

  return {
    provide: {
      tickets: {
        getTickets,
        createTicket,
      },
    },
  };
});
