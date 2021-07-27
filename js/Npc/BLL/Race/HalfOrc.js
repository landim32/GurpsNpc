import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class HalfOrc extends Race {
    get MyRace() {
        return RaceEnum.HalfOrc;
    }

    get NameSingular() {
        return "Meio-Orc";

    }

    get NamePlural() {
        return "Meio-Orcs";

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
            RaceEnum.Orc
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.HalfOrc;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.HTRaceMod++;
        npc.PVMod += 2;
        npc.Advantages.push(new FeatureInfo("Meio-Orc", 6));
        npc.Advantages.push(new FeatureInfo("Recuperação Aligéra 1", 0));
        npc.Disvantages.push(new FeatureInfo("Estigma Social (Mínoria)", 0));
    }

    GenerateName() {
        return "Meio-Orc";
    }
}
