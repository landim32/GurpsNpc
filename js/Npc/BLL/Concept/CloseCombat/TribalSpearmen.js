import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { Spearmen } from './Spearmen.js';

export class TribalSpearmen extends Spearmen {

    /**
    * @returns ArmorEnum[]
    */
    get PossibleArmor() {
        return [
            ArmorEnum.LegsLeatherArmor,
            ArmorEnum.LeatherArmorWithoutHelm
        ];
    }
}
