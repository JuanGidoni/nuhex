import { tickets } from "./store";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  tickets.push(body);

  return { success: true };
});
