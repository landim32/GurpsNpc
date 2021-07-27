import { Dice } from "../../../../../Dice.js";
import { AttributeEnum } from "../../../../Model/AttributeEnum.js";
import { DamageInfo } from "../../../../Model/DamageInfo.js";
import { DamagePenetrationEnum } from "../../../../Model/DamagePenetrationEnum.js";
import { DamageTypeEnum } from "../../../../Model/DamageTypeEnum.js";
import { DifficultyEnum } from "../../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../../Model/SkillInfo.js";
import { WeaponInfo } from "../../../../Model/WeaponInfo.js";
import { Equipment } from "../../Equipment.js";

export class Club extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new SkillInfo(
            "Espada de Lámina Larga",
            AttributeEnum.DX,
            DifficultyEnum.Medium,
            Dice.RollSkill()
        );
        s.CanUseToParry = true;
        npc.Skills.push(s);

        let w = new WeaponInfo("Bastão", 5, 1.5);
        w.STMin = 10;
        w.Damages = [
            new DamageInfo(DamageTypeEnum.GdP, 1, "1", DamagePenetrationEnum.Cont),
            new DamageInfo(DamageTypeEnum.GeB, 1, "1", DamagePenetrationEnum.Cont),
        ];
        npc.Equipments.push(w);
    }
}
