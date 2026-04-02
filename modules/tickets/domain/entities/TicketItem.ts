export type TicketItemProps = {
  name: string;
  price: number;
  quantity: number;
};

export class TicketItem {
  public readonly name: string;
  public readonly price: number;
  public readonly quantity: number;

  constructor(props: TicketItemProps) {
    this.validate(props);

    this.name = props.name;
    this.price = props.price;
    this.quantity = props.quantity;
  }

  get total(): number {
    return this.price * this.quantity;
  }

  private validate(props: TicketItemProps): void {
    if (!props.name || props.name.trim().length === 0) {
      throw new Error("TicketItem name is required");
    }

    if (props.price < 0) {
      throw new Error("Price cannot be negative");
    }

    if (props.quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }
  }
}
