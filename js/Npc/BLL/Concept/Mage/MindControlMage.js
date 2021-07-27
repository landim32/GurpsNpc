import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class MindControlMage extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Medo",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Terror",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Pânico",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Atordoamento Mental",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Enfraquecer Vontade",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Lealdade",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
    }
}