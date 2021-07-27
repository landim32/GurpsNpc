import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class HalfElf extends Race {
    get MyRace() {
        return RaceEnum.HalfElf;
    }

    get NameSingular() {
        return "Meio-Elfo";

    }

    get NamePlural() {
        return "Meios-Elfos";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Barbarian, ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.Archer,
            ConceptEnum.Crossbowman, ConceptEnum.TribalCrossbowman, ConceptEnum.Mage,
            ConceptEnum.SwordKnight, ConceptEnum.AxeKnight, ConceptEnum.Paladin, ConceptEnum.Swordman,
            ConceptEnum.Spearmen, ConceptEnum.TribalSpearmen, ConceptEnum.TribalAxemen
        ];
    };

    get Locals() {
        return [];
    }

    get AlliesRaces() {
        return [
            RaceEnum.Elf,
            RaceEnum.Human
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.HalfElf;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.IQRaceMod++;
        npc.Advantages.push(new FeatureInfo("Aptidão Mágica 0", 0));
        npc.Advantages.push(new FeatureInfo("Expectativa de Vida Ampliada 1", 0));
    }

    GenerateName() {
        return "Meio-Elfo";
    }
}
