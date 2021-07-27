import { Dice } from "../../../../../Dice.js";
import { AttributeEnum } from "../../../../Model/AttributeEnum.js";
import { DamageInfo } from "../../../../Model/DamageInfo.js";
import { DamagePenetrationEnum } from "../../../../Model/DamagePenetrationEnum.js";
import { DamageTypeEnum } from "../../../../Model/DamageTypeEnum.js";
import { DifficultyEnum } from "../../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../../Model/SkillInfo.js";
import { WeaponInfo } from "../../../../Model/WeaponInfo.js";
import { Equipment } from "../../Equipment.js";

export class Shortsword extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new SkillInfo(
            "Espada Curta",
            AttributeEnum.DX,
            DifficultyEnum.Medium,
            Dice.RollSkill()
        );
        s.CanUseToParry = true;
        npc.Skills.push(s);
        let w = new WeaponInfo("Espada Curta", 400, 1);
        w.STMin = 8;
        w.Damages = [
            new DamageInfo(DamageTypeEnum.GdP, 0, "1", DamagePenetrationEnum.Perf),
            new DamageInfo(DamageTypeEnum.GeB, 0, "1", DamagePenetrationEnum.Cort),
        ];
        npc.Equipments.push(w);
    }
}