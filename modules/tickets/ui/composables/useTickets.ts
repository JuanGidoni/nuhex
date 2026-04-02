import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";
import { useNuxtApp } from "nuxt/app";
import type { TicketsService } from "../../application/types/TicketsService";

export function useTickets() {
  const nuxtApp = useNuxtApp();
  const $tickets = nuxtApp.$tickets as TicketsService;

  const queryClient = useQueryClient();

  const ticketsQuery = useQuery({
    queryKey: ["tickets"],
    queryFn: () => $tickets.getTickets.execute(),
  });

  const createTicketMutation = useMutation({
    mutationFn: $tickets.createTicket.execute.bind($tickets.createTicket),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
  });

  return {
    ticketsQuery,
    createTicketMutation,
  };
}
