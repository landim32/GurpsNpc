import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class Gnome extends Race {
    get MyRace() {
        return RaceEnum.Gnome;
    }

    get NameSingular() {
        return "Gnomo";

    }

    get NamePlural() {
        return "Gnomos";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Assassin, ConceptEnum.Crossbowman, ConceptEnum.Thief, ConceptEnum.Mage,
            ConceptEnum.Swordman, ConceptEnum.Spearmen
        ]
    };

    get Locals() {
        return [];
    }

    get AlliesRaces() {
        return [
            RaceEnum.Dwarf,
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
        npc.Race = RaceEnum.Gnome;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.FadigaMod++;
        npc.BaseMoveMod--;
        npc.Advantages.push(new FeatureInfo("Gnomo", -7));
        npc.Advantages.push(new FeatureInfo("RD 1 (Pele 40%)", 0));
        npc.Advantages.push(new FeatureInfo("Longevidade", 0));
        npc.Advantages.push(new FeatureInfo("Rosto Honesto", 0));
        npc.Advantages.push(new FeatureInfo("Dedo Verde", 0));
        npc.Disvantages.push(new FeatureInfo("Senso de Dever (Natureza)", 0));
        npc.Peculiarity.push(new FeatureInfo("Não gosta de viver no subsolo", 0));
    }

    GenerateName() {
        return "Gnomo";
    }
}
