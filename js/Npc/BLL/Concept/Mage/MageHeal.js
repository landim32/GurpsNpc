import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class MageHeal extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Cura Superficial",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Cura Superficial",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Cura Superficial (1/3 PV, 1/3 Fadiga)");
        npc.Skills.push(new SkillInfo(
            "Cura Profunda",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Cura Profunda (4/8 PV, 1/4 Fadiga)");
    }
}
