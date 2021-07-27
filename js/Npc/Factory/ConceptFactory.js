import { Assassin } from '../BLL/Concept/CloseCombat/Assassin.js';
import { Axemen } from '../BLL/Concept/CloseCombat/Axemen.js';
import { Barbarian } from '../BLL/Concept/CloseCombat/Barbarian.js';
import { Shieldmen } from '../BLL/Concept/CloseCombat/Shieldmen.js';
import { Spearmen } from '../BLL/Concept/CloseCombat/Spearmen.js';
import { Swordman } from '../BLL/Concept/CloseCombat/Swordman.js';
import { Thief } from '../BLL/Concept/CloseCombat/Thief.js';
import { TribalAxemen } from '../BLL/Concept/CloseCombat/TribalAxemen.js';
import { AxeKnight } from '../BLL/Concept/Knight/AxeKnight.js';
import { Paladin } from '../BLL/Concept/Knight/Paladin.js';
import { SwordKnight } from '../BLL/Concept/Knight/SwordKnight.js';
import { TribalArcher } from '../BLL/Concept/LongRanged/TribalArcher.js';
import { Archer } from '../BLL/Concept/LongRanged/Archer.js';
import { Crossbowman } from '../BLL/Concept/LongRanged/Crossbowman.js';
import { TribalCrossbowman } from '../BLL/Concept/LongRanged/TribalCrossbowman.js';
import { ConceptEnum } from '../Model/ConceptEnum.js';
import { TribalSpearmen } from '../BLL/Concept/CloseCombat/TribalSpearmen.js';
import { Mage } from '../BLL/Concept/Mage/Mage.js';
import { Priest } from '../BLL/Concept/Mage/Priest.js';

export class ConceptFactory {

    /**
     * 
     * @returns Concept
     */
    static GetRandomConcept() {
        var i = Math.floor(Math.random() * Object.keys(ConceptEnum).length);
        let c = ConceptEnum[Object.keys(ConceptEnum)[i]];
        //var concepts = Enum.GetValues(typeof(ConceptEnum));
        //var c = (ConceptEnum)concepts.GetValue(Dice.Next(concepts.Length));
        return ConceptFactory.GetConcept(c);
    }

    /**
     * 
     * @param {ConceptEnum} c 
     * @returns Concept
     */
    static GetConcept(c) {
        let v = null;
        switch (c) {
            case ConceptEnum.Assassin:
                v = new Assassin();
                break;
            case ConceptEnum.Axemen:
                v = new Axemen();
                break;
            case ConceptEnum.Barbarian:
                v = new Barbarian();
                break;
            case ConceptEnum.Shieldmen:
                v = new Shieldmen();
                break;
            case ConceptEnum.Spearmen:
                v = new Spearmen();
                break;
            case ConceptEnum.Swordman:
                v = new Swordman();
                break;
            case ConceptEnum.Thief:
                v = new Thief();
                break;
            case ConceptEnum.TribalAxemen:
                v = new TribalAxemen();
                break;
            case ConceptEnum.TribalSpearmen:
                v = new TribalSpearmen();
                break;
            case ConceptEnum.AxeKnight:
                v = new AxeKnight();
                break;
            case ConceptEnum.Paladin:
                v = new Paladin();
                break;
            case ConceptEnum.SwordKnight:
                v = new SwordKnight();
                break;
            case ConceptEnum.TribalArcher:
                v = new TribalArcher();
                break;
            case ConceptEnum.Archer:
                v = new Archer();
                break;
            case ConceptEnum.Crossbowman:
                v = new Crossbowman();
                break;
            case ConceptEnum.TribalCrossbowman:
                v = new TribalCrossbowman();
                break;
            case ConceptEnum.Mage:
                v = new Mage();
                break;
            case ConceptEnum.Priest:
                v = new Priest();
                break;
        }
        return v;
    }
}