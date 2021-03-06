import { Dice } from "../../../../../Dice.js";
import { AttributeEnum } from "../../../../Model/AttributeEnum.js";
import { DamageInfo } from "../../../../Model/DamageInfo.js";
import { DamagePenetrationEnum } from "../../../../Model/DamagePenetrationEnum.js";
import { DamageTypeEnum } from "../../../../Model/DamageTypeEnum.js";
import { DifficultyEnum } from "../../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../../Model/SkillInfo.js";
import { WeaponInfo } from "../../../../Model/WeaponInfo.js";
import { Equipment } from "../../Equipment.js";

export class TwoHandedAx extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new SkillInfo(
            "Machado/Maça de 2 mãos",
            AttributeEnum.DX,
            DifficultyEnum.Medium,
            Dice.RollSkill()
        );
        s.CanUseToParry = true;
        npc.Skills.push(s);


        let w = new WeaponInfo("Machado de 2 mãos", 100, 4);
        w.STMin = 12;
        w.Damages = [
            new DamageInfo(DamageTypeEnum.GeB, 3, "1,2", DamagePenetrationEnum.Cort)
        ];
        npc.Equipments.push(w);
    }
}