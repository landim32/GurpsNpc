import { Dice } from "../../../../../Dice.js";
import { AttributeEnum } from "../../../../Model/AttributeEnum.js";
import { DamageInfo } from "../../../../Model/DamageInfo.js";
import { DamagePenetrationEnum } from "../../../../Model/DamagePenetrationEnum.js";
import { DamageTypeEnum } from "../../../../Model/DamageTypeEnum.js";
import { DifficultyEnum } from "../../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../../Model/SkillInfo.js";
import { WeaponInfo } from "../../../../Model/WeaponInfo.js";
import { Equipment } from "../../Equipment.js";

export class Longspear extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new SkillInfo(
            "Lança",
            AttributeEnum.DX,
            DifficultyEnum.Medium,
            Dice.RollSkill()
        );
        s.CanUseToParry = true;
        npc.Skills.push(s);
        if (Dice.IfDo(70)) {
            npc.Skills.push(new SkillInfo(
                "Arremesso(Lança)",
                AttributeEnum.DX,
                DifficultyEnum.Medium,
                Dice.RollSkill()
            ));
        }
        let w = new WeaponInfo("Lança Longa", 60, 2.5);
        w.STMin = 10;
        let dmg2hands = new DamageInfo(DamageTypeEnum.GdP, 2, "2,3", DamagePenetrationEnum.Perf);
        dmg2hands.Name = "Com 2 mãos";
        w.Damages = [
            new DamageInfo(DamageTypeEnum.GdP, 2, "2,3", DamagePenetrationEnum.Perf),
            dmg2hands
        ];
        npc.Equipments.push(w);
    }
}
