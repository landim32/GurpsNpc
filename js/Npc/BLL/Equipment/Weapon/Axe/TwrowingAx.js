import { Dice } from "../../../../../Dice.js";
import { AttributeEnum } from "../../../../Model/AttributeEnum.js";
import { DamageInfo } from "../../../../Model/DamageInfo.js";
import { DamagePenetrationEnum } from "../../../../Model/DamagePenetrationEnum.js";
import { DamageTypeEnum } from "../../../../Model/DamageTypeEnum.js";
import { DifficultyEnum } from "../../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../../Model/SkillInfo.js";
import { WeaponInfo } from "../../../../Model/WeaponInfo.js";
import { Equipment } from "../../Equipment.js";

export class TwrowingAx extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new SkillInfo(
            "Machado/Maça",
            AttributeEnum.DX,
            DifficultyEnum.Medium,
            Dice.RollSkill()
        );
        s.CanUseToParry = true;
        npc.Skills.push(s);

        npc.Skills.push(new SkillInfo(
            "Arremesso de Machado",
            AttributeEnum.DX,
            DifficultyEnum.Easy,
            Dice.RollSkill()
        ));

        let w = new WeaponInfo("Machado de Arremesso", 60, 2);
        w.STMin = 11;
        w.Damages = [
            new DamageInfo(DamageTypeEnum.GeB, 2, "1", DamagePenetrationEnum.Cort)
        ];
        npc.Equipments.push(w);
    }
}
