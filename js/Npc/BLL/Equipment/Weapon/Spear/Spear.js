import { Dice } from "../../../../../Dice.js";
import { AttributeEnum } from "../../../../Model/AttributeEnum.js";
import { DamageInfo } from "../../../../Model/DamageInfo";
import { DamagePenetrationEnum } from "../../../../Model/DamagePenetrationEnum.js";
import { DamageTypeEnum } from "../../../../Model/DamageTypeEnum.js";
import { DifficultyEnum } from "../../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../../Model/SkillInfo.js";
import { WeaponInfo } from "../../../../Model/WeaponInfo.js";
import { Equipment } from "../../Equipment.js";

export class Spear extends Equipment {
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
        let w = new WeaponInfo("Lança", 40, 2);
        w.STMin = 9;
        let dmg2hands = new DamageInfo(DamageTypeEnum.GdP, 3, "1,2", DamagePenetrationEnum.Perf);
        dmg2hands.Name = "Com 2 mãos";
        w.Damages = [
            new DamageInfo(DamageTypeEnum.GdP, 2, "1", DamagePenetrationEnum.Perf),
            dmg2hands
        ];
        npc.Equipments.push(w);
    }
}
