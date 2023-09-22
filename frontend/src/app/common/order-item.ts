export class OrderItem {
  constructor(
    public productId: string,
    public name: string,
    public price: number,
    public quantity: number,
    public imgUrl: string
  ) {}
}

