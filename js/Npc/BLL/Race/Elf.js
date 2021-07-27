import { AttributeEnum } from "../../Model/AttributeEnum.js";
import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { DifficultyEnum } from "../../Model/DifficultyEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { SkillInfo } from "../../Model/SkillInfo.js";
import { Race } from "./Race.js";

export class Elf extends Race {
    get MyRace() {
        return RaceEnum.Elf;
    }

    get NameSingular() {

        return "Elfo";

    }

    get NamePlural() {
        return "Elfos";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Archer, ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.Mage,
            ConceptEnum.SwordKnight, ConceptEnum.Paladin, ConceptEnum.Swordman, 
            ConceptEnum.Spearmen
        ];
    };

    get Locals() {
        return [
            LocalEnum.ElfRuins, LocalEnum.Keep, LocalEnum.NightForest
        ];
    };

    get AlliesRaces() {
        return [
            RaceEnum.HalfElf,
            RaceEnum.Human,
            RaceEnum.Gnome
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Elf;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod--;
        npc.DXRaceMod++;
        npc.IQRaceMod++;
        npc.Advantages.push(new FeatureInfo("Elfo", 41));
        npc.Advantages.push(new FeatureInfo("Aparência(Atraente)", 0));
        npc.Advantages.push(new FeatureInfo("Talento Musical 1", 0));
        npc.Advantages.push(new FeatureInfo("Abtidão Mágica 0", 0));
        npc.Advantages.push(new FeatureInfo("Talento Musical 1", 0));
        npc.Advantages.push(new FeatureInfo("Idade Imutável", 0));
        npc.Disvantages.push(new FeatureInfo("Código de Honra(Elfos)", 0));
        npc.Disvantages.push(new FeatureInfo("Senso de Dever(Natureza)", 0));
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
