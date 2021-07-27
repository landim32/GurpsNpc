import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class MageBodyControl extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Coceira",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Espasmo",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Inabilidade",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Paralizar Membro",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Dor",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Dor (2 custo, T.Op. 2s, Dur. 1min)");
        npc.Skills.push(new SkillInfo(
            "Atrofiar Membro",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Atrofiar Membro 1D Alcance C Custo 5 (Incapacita membro)");
        npc.Skills.push(new SkillInfo(
            "Toque Mortal",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Toque Mortal 1/3D Alcance C Custo 1/3");
        npc.Skills.push(new SkillInfo(
            "Briga",
            AttributeEnum.DX,
            DifficultyEnum.Easy,
            Dice.RollSkill()
        ));
    }
}
