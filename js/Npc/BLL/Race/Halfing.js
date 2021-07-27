import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class Halfing extends Race {
    get MyRace() {
        return RaceEnum.Halfing;
    }

    get NameSingular() {
        return "Hobbit";

    }

    get NamePlural() {
        return "Hobbits";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Assassin, ConceptEnum.Thief,
            ConceptEnum.Crossbowman, ConceptEnum.TribalCrossbowman, ConceptEnum.Mage,
            ConceptEnum.Swordman, ConceptEnum.Spearmen, ConceptEnum.TribalSpearmen
        ];
    };

    get Locals() {
        return [
            LocalEnum.UndergroundVillage
        ];
    };

    get AlliesRaces() {
        return [
            RaceEnum.Gnome
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Halfing;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod -= 3;
        npc.DXRaceMod++;
        npc.HTRaceMod++;
        npc.BaseMoveMod--;
        npc.FadigaMod++;
        npc.Advantages.push(new FeatureInfo("Halfing", 0));
        npc.Advantages.push(new FeatureInfo("Talento 2 (Armas Longo Alcance)", 0));
        npc.Advantages.push(new FeatureInfo("Silencioso 1", 0));
        npc.Advantages.push(new FeatureInfo("Social Regard 1 (Bom vizinho)", 0));
        npc.Disvantages.push(new FeatureInfo("Amigável", 0));
        npc.Disvantages.push(new FeatureInfo("Código de Honra (Halfing)", 0));
        npc.Disvantages.push(new FeatureInfo("Gula (12)", 0));
        npc.Peculiarity.push(new FeatureInfo("Não gosta de grandes porções de água", 0));
        npc.Peculiarity.push(new FeatureInfo("Staid", 0));
    }

    GenerateName() {
        return "Hobbit";
    }
}
