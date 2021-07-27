export class DamageInfo {

  /**
   * 
   * @param {DamageTypeEnum} atype 
   * @param {int} bonus 
   * @param {string} alcance 
   * @param {DamagePenetrationEnum} penetration 
   */
  constructor(atype, bonus, alcance, penetration){
    this._Name = "";
    this._Type = atype;
    this._Bonus = bonus;
    this._Alcance = alcance;
    this._Penetration = penetration;
  }

  get Name() {
    return this._Name;
  }
  set Name(value) {
    this._Name = value;
  }


  /**
   * @return DamageTypeEnum
   */
  get Type() {
    return this._Type;
  }
  /**
   * @param  DamageTypeEnum value Damage Type
   */
  set Type(value) {
    this._Type = value;
  }

  get Bonus() {
    return this._Bonus;
  }
  set Bonus(value) {
    this._Bonus = value;
  }

  /**
   * @return DamagePenetrationEnum description
   */
  get Penetration() {
    return this._Penetration;
  }

  /**
   * @param  DamagePenetrationEnum value description
   */
  set Penetration(value) {
    this._Penetration = value;
  }


  get Alcance() {
    return this._Alcance;
  }

  set Alcance(value) {
    this._Alcance = value;
  }
}
