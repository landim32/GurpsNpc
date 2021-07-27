import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class MetaMage extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Contra-Magia",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Pentagrama",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Anular Magia",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Remover Maldição",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
    }
}