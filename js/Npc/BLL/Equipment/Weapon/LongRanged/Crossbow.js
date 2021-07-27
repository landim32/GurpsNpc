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

export class Crossbow extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        npc.Skills.push(new SkillInfo(
            "Besta",
            AttributeEnum.DX,
            DifficultyEnum.Easy,
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
        let w = new WeaponInfo("Besta", 150, 3);
        w.STMin = 7;
        let dmg = new DamageInfo(DamageTypeEnum.GdP, 0, "", DamagePenetrationEnum.Perf);
        dmg.HalfReach = 20;
        dmg.FullReach = 25;
        dmg.Prec = 4;
        dmg.CdT = 1;
        dmg.Tiros = "1(4)";
        dmg.Magnitude = -6;
        w.Damages = [dmg];
        npc.Equipments.push(w);

        npc.Equipments.push(new EquipmentInfo(
            "Aljava (10 Flechas)",
            45,
            2.5,
        ));
    }
}
