import { Dice } from "../../../../../Dice.js";
import { AttributeEnum } from "../../../../Model/AttributeEnum.js";
import { DamageInfo } from "../../../../Model/DamageInfo.js";
import { DamagePenetrationEnum } from "../../../../Model/DamagePenetrationEnum.js";
import { DamageTypeEnum } from "../../../../Model/DamageTypeEnum.js";
import { DifficultyEnum } from "../../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../../Model/SkillInfo.js";
import { WeaponInfo } from "../../../../Model/WeaponInfo.js";
import { Equipment } from "../../Equipment.js";

export class Knife extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new SkillInfo(
            "Faca",
            AttributeEnum.DX,
            DifficultyEnum.Easy,
            Dice.RollSkill()
        );
        s.CanUseToParry = true;
        npc.Skills.push(s);
        if (Dice.IfDo(70)) {
            npc.Skills.push(new SkillInfo(
                "Arremesso de Faca",
                AttributeEnum.DX,
                DifficultyEnum.Easy,
                Dice.RollSkill()
            ));
        }
        let w = new WeaponInfo("Faca", 30, 0.25);
        w.STMin = 5;
        w.Damages = [
            new DamageInfo(DamageTypeEnum.GdP, -1, "C", DamagePenetrationEnum.Perf),
            new DamageInfo(DamageTypeEnum.GeB, -3, "C,1", DamagePenetrationEnum.Cort),
        ];
        npc.Equipments.push(w);
    }
}
