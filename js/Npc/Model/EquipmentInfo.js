export class EquipmentInfo {

  constructor(name, price, weight) {
    this._Name = name;
    this._Price = price;
    this._Weight = weight;
    this._Qtde = 1;
  }

  get Name() {
    return this._Name;
  }
  set Name(value) {
    this._Name = value;
  }

  get Price() {
    return this._Price;
  }
  set Price(value) {
    this.Price = value;
  }

  get Weight() {
    return this._Weight;
  }
  set Weight(value) {
    this._Weight = value;
  }

  get Qtde() {
    return this._Qtde;
  }
  set Qtde(value) {
    this._Qtde = value;
  }
}
