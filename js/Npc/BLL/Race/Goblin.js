import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class Goblin extends Race {

    get MyRace() {
        return RaceEnum.Goblin;
    }
    
    get NameSingular() {
        return "Goblin";

    }

    get NamePlural() {
        return "Goblins";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.Archer,
            ConceptEnum.TribalCrossbowman, ConceptEnum.Mage, ConceptEnum.TribalSpearmen,
            ConceptEnum.TribalAxemen
        ];
    };

    get Locals() {
        return [
            LocalEnum.Cave, LocalEnum.Dungeon, LocalEnum.AbandonedMine
        ];
    };

    get AlliesRaces() {
        return [
            RaceEnum.Hobgoblin
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Goblin;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod -= 2;
        npc.DXRaceMod++;
        npc.IQRaceMod++;
        npc.Height = (npc.Height * 0.67);
        npc.Weight -= 10;
        npc.Advantages.push(new FeatureInfo("Goblin", 19));
        npc.Advantages.push(new FeatureInfo("Visão Noturna 9", 0));
        npc.Disvantages.push(new FeatureInfo("Impulsivo", 0));
    }

    GenerateName() {
        return "Goblin";
    }
}
