import { DarkElf } from "../BLL/Race/DarkElf.js";
import { Dwarf } from "../BLL/Race/Dwarf.js";
import { Elf } from "../BLL/Race/Elf.js";
import { Gnome } from "../BLL/Race/Gnome.js";
import { Goblin } from "../BLL/Race/Goblin.js";
import { HalfElf } from "../BLL/Race/HalfElf.js";
import { Halfing } from "../BLL/Race/Halfing.js";
import { HalfOrc } from "../BLL/Race/HalfOrc.js";
import { Hobgoblin } from "../BLL/Race/Hobgoblin.js";
import { Human } from "../BLL/Race/Human.js";
import { Ogre } from "../BLL/Race/Ogre.js";
import { Orc } from "../BLL/Race/Orc.js";
import { Reptile } from "../BLL/Race/Reptile.js";
import { Skeleton } from "../BLL/Race/Skeleton.js";
import { RaceEnum } from "../Model/RaceEnum.js";

export class RaceFactory {
    /**
     * @param {RaceEnum} race
     * @retuns Race
     */
    static Create(race) {
        let r = null;
        switch (race) {
            case RaceEnum.Elf:
                r = new Elf();
                break;
            case RaceEnum.HalfElf:
                r = new HalfElf();
                break;
            case RaceEnum.DarkElf:
                r = new DarkElf();
                break;
            case RaceEnum.Dwarf:
                r = new Dwarf();
                break;
            case RaceEnum.Gnome:
                r = new Gnome();
                break;
            case RaceEnum.Orc:
                r = new Orc();
                break;
            case RaceEnum.HalfOrc:
                r = new HalfOrc();
                break;
            case RaceEnum.Goblin:
                r = new Goblin();
                break;
            case RaceEnum.Hobgoblin:
                r = new Hobgoblin();
                break;
            case RaceEnum.Halfing:
                r = new Halfing();
                break;
            case RaceEnum.Ogre:
                r = new Ogre();
                break;
            case RaceEnum.Reptile:
                r = new Reptile();
                break;
            case RaceEnum.Skeleton:
                r = new Skeleton();
                break;
            default:
                r = new Human();
                break;
        }
        return r;
    }
}