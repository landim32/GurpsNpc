import { AttributeEnum } from "../../Model/AttributeEnum.js";
import { ConceptEnum } from "../../Model/ConceptEnum.js";
import { DifficultyEnum } from "../../Model/DifficultyEnum.js";
import { FeatureInfo } from "../../Model/FeatureInfo.js";
import { LocalEnum } from "../../Model/LocalEnum.js";
import { RaceEnum } from "../../Model/RaceEnum.js";
import { SkillInfo } from "../../Model/SkillInfo.js";
import { Race } from "./Race.js";

export class Orc extends Race {
    get MyRace() {
        return RaceEnum.Orc;
    }

    get NameSingular() {
        return "Orc";

    }

    get NamePlural() {
        return "Orcs";

    }

    get PossibleConcepts() {
        return [
            ConceptEnum.Barbarian, ConceptEnum.Assassin, ConceptEnum.Thief, ConceptEnum.Archer,
            ConceptEnum.TribalCrossbowman, ConceptEnum.SwordKnight, ConceptEnum.AxeKnight,
            ConceptEnum.Swordman, ConceptEnum.TribalSpearmen, ConceptEnum.TribalAxemen
        ];
    }

    get Locals() {
        return [
            LocalEnum.Abyss, LocalEnum.Dungeon, LocalEnum.Keep, LocalEnum.Prison
        ];
    }

    get AlliesRaces() {
        return [
            RaceEnum.HalfOrc,
            RaceEnum.Goblin,
            RaceEnum.Hobgoblin,
            RaceEnum.Ogre,
            RaceEnum.Kobold
        ];
    };

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoRace(npc) {
        super.DoRace(npc);
        npc.Race = RaceEnum.Orc;
        npc.RaceSingular = this.NameSingular;
        npc.RacePlural = this.NamePlural;
        npc.IQRaceMod--;
        npc.HTRaceMod += 2;
        npc.PVMod += 3;
        npc.Advantages.push(new FeatureInfo("Recuperação Aligéra 2"));
        npc.Disvantages.push(new FeatureInfo("Orc", -22));
        npc.Disvantages.push(new FeatureInfo("Briguento"));
        npc.Disvantages.push(new FeatureInfo("Intolerância (Total)"));
        npc.Disvantages.push(new FeatureInfo("Estigma Social (Bárbaro)"));
        npc.Peculiarity.push(new FeatureInfo("Não considera traição errado"));
        npc.Peculiarity.push(new FeatureInfo("Admira pessoas fortes"));
        npc.Peculiarity.push(new FeatureInfo("Considera o controle como status social"));
        npc.Skills.push(new SkillInfo(
            "Briga",
            AttributeEnum.DX,
            DifficultyEnum.Easy,
            1
        ));
    }

    GenerateName() {
        return "Orc";
    }
}