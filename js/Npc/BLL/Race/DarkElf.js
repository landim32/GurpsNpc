import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";
import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { SkillInfo } from "../../Model/SkillInfo.js";
import { AttributeEnum } from "../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../Model/DifficultyEnum.js";

export class DarkElf extends Race {

    get MyRace() {
        return RaceEnum.DarkElf;
    }

    get NameSingular() {
        return "Elfo Negro";
    }

    get NamePlural() {
        return "Elfos Negros";
    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Archer, ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.Mage, 
            ConceptEnum.SwordKnight, ConceptEnum.Swordman, ConceptEnum.Spearmen
        ];
    }

    get Locals() {
        return [
            LocalEnum.ElfRuins, LocalEnum.Keep, LocalEnum.Prison, LocalEnum.NightForest
        ];
    }

    get AlliesRaces() {
        return [];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.DarkElf;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod--;
        npc.DXRaceMod++;
        npc.IQRaceMod++;
        npc.Advantages.push(new FeatureInfo("Elfo Negro", 31));
        npc.Advantages.push(new FeatureInfo("Aparência (Atraente)", 0));
        npc.Advantages.push(new FeatureInfo("Abtidão Mágica 0", 0));
        npc.Advantages.push(new FeatureInfo("Idade Imutável", 0));
        npc.Disvantages.push(new FeatureInfo("Insensível", 0));
        npc.Disvantages.push(new FeatureInfo("Intolerância (Total)", 0));
        npc.Disvantages.push(new FeatureInfo("Obsessão(Destruir ou tomar controle de todos não-elfos)", 0));
        npc.Skills.push(new SkillInfo(
            "Arco",
            AttributeEnum.DX,
            DifficultyEnum.Medium,
            2
        ));
    }

    GenerateName() {
        return "Elfo";
    }
}
