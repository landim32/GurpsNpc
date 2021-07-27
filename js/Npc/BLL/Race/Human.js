import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { Race } from "./Race.js";

export class Human extends Race {
    get MyRace() {
        return RaceEnum.Human;
    }

    get NameSingular() {
        return "Humano";

    }

    get NamePlural() {
        return "Humanos";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Barbarian, ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.Archer,
            ConceptEnum.Crossbowman, ConceptEnum.TribalCrossbowman, ConceptEnum.Mage,
            ConceptEnum.SwordKnight, ConceptEnum.AxeKnight, ConceptEnum.Paladin, ConceptEnum.Swordman,
            ConceptEnum.Spearmen, ConceptEnum.TribalAxemen, ConceptEnum.TribalSpearmen
        ];
    };

    get Locals() {
        return [
            LocalEnum.Castle, LocalEnum.Cave, LocalEnum.Prison
        ];
    };

    get AlliesRaces() {
        return [
            RaceEnum.Dwarf,
            RaceEnum.Elf,
            RaceEnum.Gnome
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Human;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
    }

    GenerateName() {
        return "Humano";
    }
}