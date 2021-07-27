import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class MageFire extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Resistência ao Fogo",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Jato de Chamas",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Jato de Chamas 1/3D Fadiga 1/3 Dur. 1s (Ataque Inato -4)");
        npc.Skills.push(new SkillInfo(
            "Chuva de Fogo",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Chuva de Fogo 2D-2 Fadiga 2 Dur. 1m");
        npc.Skills.push(new SkillInfo(
            "Bola de Fogo",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Bola de Fogo 1/3D Prec 1 Alcance 25/50 Fadiga 1/3 T.Op 1/3s");
        if (Dice.IfDo(50)) {
            npc.Skills.push(new SkillInfo(
                "Bola de Fogo Explosiva",
                AttributeEnum.Magic,
                DifficultyEnum.Hard,
                Dice.RollSkill()
            ));
            npc.ExtraDamage.push("Magia Bola de Fogo Explosiva 1/3D Prec 1 Alcance 25/50 Fadiga 2/6 T.Op 1/3s");
        }
        npc.Skills.push(new SkillInfo(
            "Ataque Inato (Projétil)",
            AttributeEnum.DX,
            DifficultyEnum.Easy,
            Dice.RollSkill()
        ));
    }
}