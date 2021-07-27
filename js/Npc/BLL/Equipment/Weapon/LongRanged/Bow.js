import { Dice } from "../../../../../Dice.js";
import { AttributeEnum } from "../../../../Model/AttributeEnum.js";
import { DamageInfo } from "../../../../Model/DamageInfo.js";
import { DamagePenetrationEnum } from "../../../../Model/DamagePenetrationEnum.js";
import { DamageTypeEnum } from "../../../../Model/DamageTypeEnum.js";
import { DifficultyEnum } from "../../../../Model/DifficultyEnum.js";
import { EquipmentInfo } from "../../../../Model/EquipmentInfo.js";
import { SkillInfo } from "../../../../Model/SkillInfo.js";
import { WeaponInfo } from "../../../../Model/WeaponInfo.js";
import { Equipment } from "../../Equipment.js";

export class Bow extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        npc.Skills.push(new SkillInfo(
            "Arco",
            AttributeEnum.DX,
            DifficultyEnum.Medium,
            Dice.RollSkill()
        ));
        if (Dice.IfDo(70)) {
            npc.Skills.push(new SkillInfo(
                "Sacar Rápido (Flecha)",
                AttributeEnum.DX,
                DifficultyEnum.Easy,
                Dice.RollSkill()
            ));
        }
        let w = null, dmg = null;
        switch (Dice.Next(1, 4)) {
            case 1:
                w = new WeaponInfo("Arco Curto", 50, 1);
                w.STMin = 7;
                dmg = new DamageInfo(DamageTypeEnum.GdP, 0, "", DamagePenetrationEnum.Perf);
                dmg.HalfReach = 10;
                dmg.FullReach = 15;
                dmg.Prec = 1;
                dmg.CdT = 1;
                dmg.Tiros = "1(2)";
                dmg.Magnitude = -6;
                w.Damages = [dmg];
                npc.Equipments.push(w);
                break;
            case 2:
                w = new WeaponInfo("Arco Comum", 100, 1);
                w.STMin = 10;
                dmg = new DamageInfo(DamageTypeEnum.GdP, 1, "", DamagePenetrationEnum.Perf);
                dmg.HalfReach = 15;
                dmg.FullReach = 20;
                dmg.Prec = 2;
                dmg.CdT = 1;
                dmg.Tiros = "1(2)";
                dmg.Magnitude = -7;
                w.Damages = [dmg];
                npc.Equipments.push(w);
                break;
            case 3:
                w = new WeaponInfo("Arco Longo", 200, 1.5);
                w.STMin = 11;
                dmg = new DamageInfo(DamageTypeEnum.GdP, 2, "", DamagePenetrationEnum.Perf);
                dmg.HalfReach = 15;
                dmg.FullReach = 20;
                dmg.Prec = 3;
                dmg.CdT = 1;
                dmg.Tiros = "1(2)";
                dmg.Magnitude = -8;
                w.Damages = [dmg];
                npc.Equipments.push(w);
                break;
            case 4:
                w = new WeaponInfo("Arco Composto", 900, 2);
                w.STMin = 10;
                dmg = new DamageInfo(DamageTypeEnum.GdP, 3, "", DamagePenetrationEnum.Perf);
                dmg.HalfReach = 20;
                dmg.FullReach = 25;
                dmg.Prec = 3;
                dmg.CdT = 1;
                dmg.Tiros = "1(2)";
                dmg.Magnitude = -7;
                w.Damages = [dmg];
                npc.Equipments.push(w);
                break;
        }
        npc.Equipments.push(new EquipmentInfo(
            "Aljava (10 Flechas)",
            45,
            2.5,
        ));
    }
}
