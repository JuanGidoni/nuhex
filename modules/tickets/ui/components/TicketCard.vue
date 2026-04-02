<script setup lang="ts">
import type { Ticket } from "@/modules/tickets/domain/entities/Ticket";

defineProps<{
  ticket: Ticket;
}>();
</script>

<template>
  <div class="border p-4 rounded mb-2">
    <div class="font-bold">{{ ticket.store }}</div>
    <div class="text-sm text-gray-500">
      {{ new Date(ticket.date).toLocaleDateString() }}
    </div>
    <div class="mt-2">Total: {{ ticket.total }} €</div>
  </div>
</template>
