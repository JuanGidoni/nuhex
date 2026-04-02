<script setup lang="ts">
import { useTickets } from "../composables/useTickets";
import TicketCard from "../components/TicketCard.vue";

const { ticketsQuery, createTicketMutation } = useTickets();

const createMockTicket = () => {
  createTicketMutation.mutate({
    id: crypto.randomUUID(),
    date: new Date(),
    store: "Mercadona",
    items: [
      { name: "Milk", price: 1.5, quantity: 2 },
      { name: "Bread", price: 1, quantity: 1 },
    ],
  });
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Tickets</h1>

    <button
      class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      @click="createMockTicket"
    >
      Add Ticket
    </button>

    <div v-if="ticketsQuery.isLoading">Loading...</div>

    <div v-else>
      <TicketCard
        v-for="ticket in ticketsQuery.data"
        :key="ticket.id"
        :ticket="ticket"
      />
    </div>
  </div>
</template>
