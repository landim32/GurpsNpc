import { DamageBlowInfo } from "./DamageBlowInfo.js";

export class DamageSTInfo {
  constructor(gdpDice, gdpBonus, gebDice, gebBonus) {
    this.GdP = new DamageBlowInfo();
    this.GdP.Dice = gdpDice;
    this.GdP.Bonus = gdpBonus;

    this.GeB = new DamageBlowInfo();
    this.GeB.Dice = gebDice;
    this.GeB.Bonus = gebBonus;
  }


  /**
   * @return DamageBlowInfo  description
   */
  get GdP() {
    return this._GdP;
  }

  /**
   * @param  DamageBlowInfo value description
   */
  set GdP(value) {
    this._GdP = value;
  }

  /**
   * @return DamageBlowInfo  description
   */
  get GeB() {
    return this._GdP;
  }

  /**
   * @param  DamageBlowInfo value description
   */
  set GeB(value) {
    this._GdP = value;
  }
}
