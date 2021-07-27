import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { Axemen } from './Axemen.js';

export class TribalAxemen extends Axemen {

    /**
    * @returns ArmorEnum[]
    */
    get PossibleArmor() {
        return [
            ArmorEnum.LegsLeatherArmor,
            ArmorEnum.LeatherArmorWithoutHelm,
        ];
    }
}
