interface Address{
  street: String;
  city: String;
  state: String;
}

export class User {
  constructor(
    public email: String,
    public phone: String,
    public course: String,
    public shift: String,
    public sendPromotion: boolean,
    public address: Address,
  ){}
}