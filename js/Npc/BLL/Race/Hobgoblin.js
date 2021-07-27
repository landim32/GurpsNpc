import { AttributeEnum } from "../../Model/AttributeEnum.js";
import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { DifficultyEnum } from "../../Model/DifficultyEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { SkillInfo } from "../../Model/SkillInfo.js";
import { Race } from "./Race.js";

export class Hobgoblin extends Race {
    get MyRace() {
        return RaceEnum.Hobgoblin;
    }

    get NameSingular() {
        return "Hobgoblin";

    }

    get NamePlural() {
        return "Hobgoblins";

    }
    get PossibleConcepts() {
        return [
            ConceptEnum.Barbarian, ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.TribalCrossbowman,
            ConceptEnum.TribalAxemen, ConceptEnum.TribalSpearmen
        ];
    };

    get Locals() {
        return [];
    }

    get AlliesRaces() {
        return [
            RaceEnum.Goblin
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Hobgoblin;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.STRaceMod++;
        npc.DXRaceMod++;
        npc.IQRaceMod -= 2;
        npc.Disvantages.push(new FeatureInfo("Hobgoblin", -15));
        npc.Advantages.push(new FeatureInfo("Visão Noturna 9", 0));
        npc.Disvantages.push(new FeatureInfo("Bad temper (9)", 0));
        npc.Disvantages.push(new FeatureInfo("Teimosia", 0));
        npc.Skills.push(new SkillInfo(
            "Briga",
            AttributeEnum.DX,
            DifficultyEnum.Easy,
            1
        ));
    }

    GenerateName() {
        return "Hobgoblin";
    }
}
