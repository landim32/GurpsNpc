import { DamagePenetrationEnum } from "../Model/DamagePenetrationEnum.js";
import { DamageSTInfo } from "../Model/DamageSTInfo.js";
import { DamageTypeEnum } from "../Model/DamageTypeEnum.js";

export class Damage {

    /**
     * @param  {type} int ST                  description
     * @param  {type} DamageTypeEnum t        description
     * @param  {type} int b                   description
     * @param  {type} DamagePenetrationEnum p description
     * @return {type} string                  description
     */
    GetDamage(ST, t, b, p) {
        let dice = 0, bonus = 0;
        let dmg = this.GetBaseDamage(ST);
        if (t == DamageTypeEnum.GeB) {
            dice = dmg.GeB.Dice;
            bonus = dmg.GeB.Bonus;
        }
        else {
            dice = dmg.GdP.Dice;
            bonus = dmg.GdP.Bonus;
        }
        bonus += b;
        let str = "{0}D".format(dice);
        if (bonus != 0) {
            if (bonus > 0) {
                str += "+{0}".format(bonus);
            }
            else {
                str += "-{0}".format(Math.abs(bonus));
            }
        }
        switch (p) {
            case DamagePenetrationEnum.Cont:
                str += " cont";
                break;
            case DamagePenetrationEnum.Perf:
                str += " perf";
                break;
            case DamagePenetrationEnum.Cort:
                str += " cort";
                break;
        }
        return str;
    }


    /**
     * @param  {type} int ST
     * @return {type} DamageSTInfo
     */
    GetBaseDamage(ST) {
        let dmg = null;
        switch (ST) {
            case 1:
            case 2:
                dmg = new DamageSTInfo(1, -6, 1, -5);
                break;
            case 3:
            case 4:
                dmg = new DamageSTInfo(1, -5, 1, -4);
                break;
            case 5:
            case 6:
                dmg = new DamageSTInfo(1, -4, 1, -3);
                break;
            case 7:
            case 8:
                dmg = new DamageSTInfo(1, -3, 1, -2);
                break;
            case 9:
                dmg = new DamageSTInfo(1, -2, 1, -1);
                break;
            case 10:
                dmg = new DamageSTInfo(1, -2, 1, 0);
                break;
            case 11:
                dmg = new DamageSTInfo(1, -1, 1, 1);
                break;
            case 12:
                dmg = new DamageSTInfo(1, -1, 1, 2);
                break;
            case 13:
                dmg = new DamageSTInfo(1, 0, 2, -1);
                break;
            case 14:
                dmg = new DamageSTInfo(1, 0, 2, 0);
                break;
            case 15:
                dmg = new DamageSTInfo(1, 1, 2, 1);
                break;
            case 16:
                dmg = new DamageSTInfo(1, 1, 2, 2);
                break;
            case 17:
                dmg = new DamageSTInfo(1, 2, 3, -1);
                break;
            case 18:
                dmg = new DamageSTInfo(1, 2, 3, 0);
                break;
            case 19:
                dmg = new DamageSTInfo(2, -1, 3, 1);
                break;
            case 20:
                dmg = new DamageSTInfo(2, -1, 3, 2);
                break;
            case 21:
                dmg = new DamageSTInfo(2, -1, 4, -1);
                break;
            case 22:
                dmg = new DamageSTInfo(2, 0, 4, 0);
                break;
            case 23:
                dmg = new DamageSTInfo(2, 1, 4, 1);
                break;
            case 24:
                dmg = new DamageSTInfo(2, 1, 4, 2);
                break;
            case 25:
                dmg = new DamageSTInfo(2, 2, 5, -1);
                break;
            default:
                throw new Error("Não existe dano básico para ST {0}.".format(ST));
                //dmg = new DamageSTInfo(2, 2, 5, -1);
                break;
        }
        return dmg;
    }
}
