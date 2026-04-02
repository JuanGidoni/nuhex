import { TicketItem } from "./TicketItem";

export type TicketProps = {
  id: string;
  date: Date;
  store: string;
  items: TicketItem[];
};

export class Ticket {
  public readonly id: string;
  public readonly date: Date;
  public readonly store: string;
  public readonly items: TicketItem[];

  constructor(props: TicketProps) {
    this.validate(props);

    this.id = props.id;
    this.date = props.date;
    this.store = props.store;
    this.items = props.items;
  }

  get total(): number {
    return this.items.reduce((acc, item) => acc + item.total, 0);
  }

  get totalItems(): number {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  private validate(props: TicketProps): void {
    if (!props.id) {
      throw new Error("Ticket id is required");
    }

    if (!props.store || props.store.trim().length === 0) {
      throw new Error("Store is required");
    }

    if (!(props.date instanceof Date)) {
      throw new Error("Invalid date");
    }

    if (!props.items || props.items.length === 0) {
      throw new Error("Ticket must have at least one item");
    }
  }
}
