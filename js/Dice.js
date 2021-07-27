import { RaceEnum } from "./Npc/Model/RaceEnum.js";

export class Dice {
  static RollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  static Roll(minValue, maxValue) {
    let p = (maxValue - minValue) / 18;
    let d = this.RollDice();
    return Math.floor( minValue + (p * d) );
  }
  static Next(minValue, maxValue) {
    let p = (maxValue - minValue) / 18;
    let d = this.RollDice();
    return Math.floor( minValue + (p * d) );
  }
  static IfDo(percent) {
    return this.Next(0, 100) <= percent;
  }
  static RollRace() {
    //var v = Enum.GetValues(typeof(RaceEnum));
    //return (RaceEnum)v.GetValue(_dice.Next(v.Length));
    var i = Math.floor(Math.random() * Object.keys(RaceEnum).length);
    return RaceEnum[Object.keys(RaceEnum)[i]];
  }
  static RollSkill() {
    let pts = [
        1,1,1,1,1,1,1,1,1,1,
        2,2,2,2,2,2,2,2,
        4,4,4,4,4,4,
        8,8,8,8,
        12,12,
        16
    ];
    let i = Math.floor(Math.random() * pts.length);
    return pts[i];
  }
}
