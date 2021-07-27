import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class StormMage extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Vento",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Imunidade a Relâmpagos",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Relâmpago",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Relâmpago 1D-1/3D-3 Prec 3 Alcance 50/100 Fadiga 1/3 T.Op 1/3s");
        if (Dice.IfDo(50)) {
            npc.Skills.push(new SkillInfo(
                "Relâmpago Explosivo",
                AttributeEnum.Magic,
                DifficultyEnum.VeryHard,
                Dice.RollSkill()
            ));
            npc.ExtraDamage.push("Magia Relâmpago Explosivo 1D-1/3D-3 Prec 3 Alcance 50/100 Fadiga 2/6 T.Op 1/3s");
        }
        npc.Skills.push(new SkillInfo(
            "Toque Chocante",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
    }
}
