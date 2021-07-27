import { Dice } from '../../Dice.js';
import { ConceptFactory } from '../Factory/ConceptFactory.js';
import { RaceFactory } from '../Factory/RaceFactory.js';
import { ArmorInfo } from '../Model/ArmorInfo.js';
import { AttributeEnum } from '../Model/AttributeEnum.js';
import { DamagePenetrationEnum } from '../Model/DamagePenetrationEnum.js';
import { DamageTypeEnum } from '../Model/DamageTypeEnum.js';
import { NpcInfo } from '../Model/NpcInfo.js';
import { RaceEnum } from '../Model/RaceEnum.js';
import { ShieldInfo } from '../Model/ShieldInfo.js';
import { WeaponInfo } from '../Model/WeaponInfo.js';
import { Damage } from './Damage.js';

const TITLE_HTML = "<b>{0}</b><br />";
const DESCRIPTION_HTML = " {0}<br />";
const ATRIBUTE_HTML = " ST {0}, DX {1}, IQ {2}, HT {3}<br />\n";
const ADVANTAGES_HTML = " <i>Vantagens:</i> {0}<br />";
const DISVANTAGES_HTML = " <i>Desvantagens:</i> {0}<br />";
const QUALITS_HTML = " <i>Qualidades:</i> {0}<br />";
const PECULIARITY_HTML = " <i>Pecularidades:</i> {0}<br />";
const SKILL_HTML = " <i>Perícias:</i> {0}<br />";
const MAGICS_HTML = " <i>Magias:</i> {0}<br />";
const DEFENSE_HTML = " <i>Defesa:</i> {0}<br />";
const DAMAGE_HTML = " <i>Dano:</i> {0}<br />";
const WEAPON_HTML = " <i>Armas:</i> {0}<br />";
const ARMOR_HTML = " <i>Armadura:</i> {0}<br />";

const TITLE_TEXT = "{0}";
const DESCRIPTION_TEXT = " {0}";
const ATRIBUTE_TEXT = " ST {0}, DX {1}, IQ {2}, HT {3}";
const ADVANTAGES_TEXT = " Vantagens: {0}";
const DISVANTAGES_TEXT = " Desvantagens: {0}";
const QUALITS_TEXT = " Qualidades: {0}";
const PECULIARITY_TEXT = " Pecularidades: {0}";
const SKILL_TEXT = " Perícias: {0}";
const MAGICS_TEXT = " Magias: {0}";
const DEFENSE_TEXT = " Defesa: {0}";
const DAMAGE_TEXT = " Dano: {0}";
const WEAPON_TEXT = " Armas: {0}";
const ARMOR_TEXT = " Armadura: {0}";

export class Npc {

    /**
     * @param  {type} RaceEnum race = null description
     * @param  {type} Type concept = null  description
     * @param  {type} int pts = 0          description
     * @return {type} NpcInfo              description
     */
    Generate(race = null, concept = null, pts = 0) {
        let npc = new NpcInfo();
        let r = race ?? Dice.RollRace();


        //Concept.Concept c = concept != null ? (Concept.Concept)Activator.CreateInstance(concept) : Concept.Concept.GetRandomConcept();
        let c = ConceptFactory.GetRandomConcept();;
        c.DoConcept(npc);

        this.DoAttribute(npc);
        npc.TotalPts += this.CalculePts(npc);
        this.DoHeightAndWeight(npc);
        this.ChangeHeightAndWeight(npc);
        RaceFactory.Create(r).DoRace(npc);

        c.DoEquipment(npc);

        this.RemoveDuplicate(npc);

        if (pts > 0) {
            this.AjustmentPts(npc, pts);
        }

        npc.TotalPts = this.CalculePts(npc);

        return npc;
    }


    /**
     * @param  {type} NpcInfo npc description
     */
    RemoveDuplicate(npc) {
        /*  
        let duplicateSkills = npc.Skills
          .GroupBy(i => i.Name)
          .Select(g => new { Name = g.Key, Count = g.Count() })
          .Where(c => c.Count > 1)
          .Select(i => i.Name)
          .ToList();
         */
        let duplicateSkills = [];
        //forEach (var s in duplicateSkills) {
        duplicateSkills.forEach(function (s, i) {
            npc.Skills.Remove(npc.Skills.Where(e => e.Name == s).Take(1).FirstOrDefault());
        });

        /*
        let duplicateEquip = npc.Equipments
          .GroupBy(i => i.Name)
          .Select(g => new { Name = g.Key, Count = g.Count() })
          .Where(c => c.Count > 1)
          .Select(i => i.Name)
          .ToList();
          */

        //forEach (var s in duplicateEquip) {
        duplicateSkills.forEach(function (s, i) {
            var removeItem = npc.Equipments.Where(e => e.Name == s).Take(1).FirstOrDefault();
            var qtde = removeItem.Qtde;
            npc.Equipments.Remove(removeItem);
            var item = npc.Equipments.Where(e => e.Name == s).Take(1).FirstOrDefault();
            item.Qtde += qtde;
        });
    }


    /**
     * addPts - description
     *
     * @param  {type} NpcInfo npc description
     * @param  {type} int diff    description
     * @return {type} bool        description
     */
    addPts(npc, diff) {
        if (diff >= 10) {
            if (npc.STMod < -3) {
                npc.STMod++;
                return true;
            }
            if (npc.DXMod < -3) {
                npc.DXMod++;
                return true;
            }
            if (npc.IQMod < -3) {
                npc.IQMod++;
                return true;
            }
            if (npc.HTMod < -3) {
                npc.HTMod++;
                return true;
            }
            var minAttr = 100;
            if (npc.STMod < minAttr) minAttr = npc.STMod;
            if (npc.DXMod < minAttr) minAttr = npc.DXMod;
            if (npc.IQMod < minAttr) minAttr = npc.IQMod;
            if (npc.HTMod < minAttr) minAttr = npc.HTMod;

            if (npc.DXMod == minAttr && npc.DXMod < 8) {
                npc.DXMod++;
                return true;
            }
            if (npc.IQMod == minAttr && npc.IQMod < 8) {
                npc.IQMod++;
                return true;
            }
            if (npc.STMod == minAttr && npc.STMod < 8) {
                npc.STMod++;
                return true;
            }
            if (npc.HTMod == minAttr && npc.HTMod < 8) {
                npc.HTMod++;
                return true;
            }
        }
        return false;
    }


    /**
     * removePts - description
     *
     * @param  {type} NpcInfo npc  description
     * @param  {type} int     diff description
     * @return {type} bool         description
     */
    removePts(npc, diff) {
        if (diff >= 10) {
            var maxAttr = 0;
            if (npc.STMod > maxAttr) maxAttr = npc.STMod;
            if (npc.DXMod > maxAttr) maxAttr = npc.DXMod;
            if (npc.IQMod > maxAttr) maxAttr = npc.IQMod;
            if (npc.HTMod > maxAttr) maxAttr = npc.HTMod;
            if (npc.DXMod == maxAttr && npc.DXMod >= -3) {
                npc.DXMod--;
                return true;
            }
            if (npc.IQMod == maxAttr && npc.IQMod >= -3) {
                npc.IQMod--;
                return true;
            }
            if (npc.STMod == maxAttr && npc.STMod >= -3) {
                npc.STMod--;
                return true;
            }
            if (npc.HTMod == maxAttr && npc.HTMod >= -3) {
                npc.HTMod--;
                return true;
            }
        }
        return false;
    }


    /**
     * AjustmentPts - description
     *
     * @param  {type} NpcInfo npc    description
     * @param  {type} int     maxPts description
     */
    AjustmentPts(npc, maxPts) {
        var totalPts = CalculePts(npc);
        let i = 0, diff = 0;
        while (totalPts != maxPts) {
            if (totalPts > maxPts) {
                diff = totalPts - maxPts;
                removePts(npc, diff);
            }
            else {
                diff = maxPts - totalPts;
                addPts(npc, diff);
            }
            totalPts = CalculePts(npc);
            i++;
            if (i > 100) break;
        }
    }


    /**
     * @param  {type} NpcInfo npc description
     */
    DoAttribute(npc) {
        if (npc.ST <= 0) {
            npc.ST = Dice.Roll();
        }
        if (npc.DX <= 0) {
            npc.DX = Dice.Roll();
        }
        if (npc.IQ <= 0) {
            npc.IQ = Dice.Roll();
        }
        if (npc.HT <= 0) {
            npc.HT = Dice.Roll();
        }
    }


    /**
     * CalculePts - description
     *
     * @param  {type} NpcInfo npc description
     * @return {type} int         description
     */
    CalculePts(npc) {
        let t = 0;
        t += npc.STMod * 10;
        t += npc.DXMod * 20;
        t += npc.IQMod * 20;
        t += npc.HTMod * 10;
        npc.Advantages.forEach(function (v, i) {
            t += v.Pts;
        });

        npc.Qualits.forEach(function (v, i) {
            t += v.Pts;
        });
        npc.Disvantages.forEach(function (v, i) {
            t += v.Pts;
        });
        npc.Peculiarity.forEach(function (v, i) {
            t += v.Pts;
        });
        npc.Skills.forEach(function (v, i) {
            t += v.Pts;
        });
        return t;
    }


    /**
     * ChangeHeightAndWeight - description
     *
     * @param  {type} NpcInfo npc description
     */
    ChangeHeightAndWeight(npc) {
        switch (Dice.Roll()) {
            case 3:
                npc.Height -= 0.15;
                npc.Weight -= 18.2;
                break;
            case 4:
                npc.Height -= 0.13;
                npc.Weight -= 13.6;
                break;
            case 5:
                npc.Height -= 0.10;
                npc.Weight -= 9.1;
                break;
            case 6:
                npc.Height -= 0.08;
                npc.Weight -= 4.5;
                break;
            case 7:
                npc.Height -= 0.05;
                npc.Weight -= 2.2;
                break;
            case 8:
                npc.Height -= 0.02;
                npc.Weight -= 2.2;
                break;
            case 12:
                npc.Height += 0.02;
                npc.Weight += 2.2;
                break;
            case 13:
                npc.Height += 0.05;
                npc.Weight += 2.2;
                break;
            case 14:
                npc.Height += 0.08;
                npc.Weight += 4.5;
                break;
            case 15:
                npc.Height += 0.1;
                npc.Weight += 9.1;
                break;
        }
    }


    /**
     * DoHeightAndWeight - description
     *
     * @param  {type} NpcInfo npc description
     */
    DoHeightAndWeight(npc) {
        if (npc.ST <= 5) {
            npc.Height = 1.63;
            npc.Weight = 59;
        }
        else if (npc.ST >= 16) {
            npc.Height = 1.9;
            npc.Weight = 82.3;
        }
        else {
            switch (npc.ST) {
                case 6:
                    npc.Height = 1.65;
                    npc.Weight = 61.3;
                    break;
                case 7:
                    npc.Height = 1.68;
                    npc.Weight = 61.3;
                    break;
                case 8:
                    npc.Height = 1.70;
                    npc.Weight = 63.6;
                    break;
                case 9:
                    npc.Height = 1.73;
                    npc.Weight = 65.8;
                    break;
                case 10:
                    npc.Height = 1.75;
                    npc.Weight = 68.1;
                    break;
                case 11:
                    npc.Height = 1.78;
                    npc.Weight = 70.4;
                    break;
                case 12:
                    npc.Height = 1.8;
                    npc.Weight = 72.6;
                    break;
                case 13:
                    npc.Height = 1.83;
                    npc.Weight = 74.9;
                    break;
                case 14:
                    npc.Height = 1.85;
                    npc.Weight = 77.2;
                    break;
                case 15:
                    npc.Height = 1.88;
                    npc.Weight = 81.7;
                    break;
            }
        }
    }


    /**
     * GenerateTextTitle - description
     *
     * @param  {NpcInfo} npc  description
     * @param  {bool}    html description
     * @return {string}       description
     */
    GenerateTextTitle(npc, html) {
        let vName = npc.Name;
        if (npc.Concept != "") {
            vName += " " + npc.Concept;
        }
        //return (html ? TITLE_HTML : TITLE_TEXT).format(vName);
        return ((html ? TITLE_HTML : TITLE_TEXT)).format(vName);
    }


    /**
     * GenerateText - description
     *
     * @param  {NpcInfo} npc    description
     * @param  {bool} html      description
     * @param  {bool} ShowTitle description
     * @return string           description
     */
    GenerateText(npc, html, ShowTitle = true) {

        let s = [], sb = [];
        if (ShowTitle) {
            sb.push(this.GenerateTextTitle(npc, html));
        }
        sb.push(((html ? ATRIBUTE_HTML : ATRIBUTE_TEXT)).format(npc.ST, npc.DX, npc.IQ, npc.HT));
        if (npc.Race != RaceEnum.Human) {
            s.push(npc.RaceSingular);
        }
        if (npc.Age > 0) {
            s.push("{0} anos".format(npc.Age));
        }
        if (npc.Height > 0) {
            s.push("{0}m".format(npc.Height.toLocaleString('pt-br', { minimumFractionDigits: 2 })));
        }
        if (npc.Weight > 0) {
            s.push("{0}kg".format(npc.Weight.toLocaleString('pt-br', { minimumFractionDigits: 1 })));
        }
        s.push("{0}pts".format(npc.TotalPts));
        if (s.length > 0) {
            sb.push((html ? DESCRIPTION_HTML : DESCRIPTION_TEXT).format(s.join("; ")));
            s = [];
        }

        s.push("Vel. Bás. {0}".format(npc.BaseMove.toLocaleString('pt-br', { minimumFractionDigits: 2 })));
        s.push("Nív. Carga {0} ({1})".format(npc.EncumbranceLevel, npc.Encumbrance));
        s.push("Deslocamento {0}".format(npc.BaseSpeed.toLocaleString('pt-br', { minimumFractionDigits: 0 })));
        s.push("Carga Total {0}kg".format(npc.TotalWeight.toLocaleString('pt-br', { minimumFractionDigits: 2 })));
        sb.push((html ? DESCRIPTION_HTML : DESCRIPTION_TEXT).format(s.join("; ")));
        s = [];
        npc.Advantages.forEach(function (f, i) {
            s.push(f.Name + (f.Pts != 0 ? "[{0}]".format(f.Pts) : ""));
        });
        if (s.length > 0) {
            sb.push((html ? ADVANTAGES_HTML : ADVANTAGES_TEXT).format(s.join("; ")));
        }
        s = [];
        npc.Disvantages.forEach(function (f, i) {
            s.push(f.Name + (f.Pts != 0 ? "[{0}]".format(f.Pts) : ""));
        });
        if (s.length > 0) {
            sb.push((html ? DISVANTAGES_HTML : DISVANTAGES_TEXT).format(s.join("; ")));
        }
        s = [];
        npc.Qualits.forEach(function (f, i) {
            s.push(f.Name + (f.Pts != 0 ? "[{0}]".format(f.Pts) : ""));
        });
        if (s.length > 0) {
            sb.push((html ? QUALITS_HTML : QUALITS_TEXT).format(s.join("; ")));
        }
        s = [];
        npc.Peculiarity.forEach(function (f, i) {
            s.push(f.Name + (f.Pts != 0 ? "[{0}]".format(f.Pts) : ""));
        });
        if (s.length > 0) {
            sb.push((html ? PECULIARITY_HTML : PECULIARITY_TEXT).format(s.join("; ")));
        }
        s = [];
        let skills = npc.Skills.filter(sk => sk.Attribute != AttributeEnum.Magic);
        skills.forEach(function (f, i) {
            s.push(f.Name + " " + f.GetNH(npc) + (f.Pts != 0 ? "[{0}]".format(f.Pts) : ""));
        });
        if (s.length > 0) {
            sb.push((html ? SKILL_HTML : SKILL_TEXT).format(s.join("; ")));
        }
        s = [];
        let magics = npc.Skills.filter(sk => sk.Attribute == AttributeEnum.Magic);
        magics.forEach(function (f, i) {
            s.push(f.Name + " " + f.GetNH(npc) + (f.Pts != 0 ? "[{0}]".format(f.Pts) : ""));
        });
        if (s.length > 0) {
            sb.push((html ? MAGICS_HTML : MAGICS_TEXT).format(s.join("; ")));
        }
        s = [];
        let d = [];

        var hasReflexes = npc.Advantages
            .filter(a => (a.Name ?? "").trim().toLowerCase() == "reflexos em combate")
            .length > 0;

        var esquiva = parseInt(Math.trunc(npc.BaseMove)) + 3;
        if (hasReflexes) {
            esquiva++;
        }
        d.push("Esquiva {0}".format(esquiva));

        /*
        var parry = npc.Skills
            .Where(sk => sk.CanUseToParry == true)
            .Select(sk => sk.GetNH(npc))
            .FirstOrDefault();
        */
        let parry = npc.Skills
            .filter(sk => sk.CanUseToParry == true)
            .map(sk => sk.GetNH(npc));
        if (parry.length > 0) {
            let pr = (parry[0] / 2.0) + 3.0;
            if (hasReflexes) {
                pr++;
            }
            d.push("Aparar {0}".format(parseInt(pr)));
        }

        /*
        var block = npc.Skills
            .Where(sk => string.Compare(sk.Name, "Escudo", true) == 0)
            .Select(sk => sk.GetNH(npc))
            .FirstOr.Default();
            */
        var block = npc.Skills
            .filter(a => a.Name.trim().toLowerCase() == "escudo")
            .map(sk => sk.GetNH(npc));
        if (block.length > 0) {
            //double bk = ((double)block / 2.0) + 3.0;
            let bk = (block[0] / 2.0) + 3.0;
            if (hasReflexes) {
                bk++;
            }
            d.push("Bloqueio {0}".format(parseInt(bk)));
        }

        if (d.length > 0) {
            sb.push((html ? DEFENSE_HTML : DEFENSE_TEXT).format(d.join("; ")));
        }

        d = [];
        let x = [];
        let armor = [];

        var dmg = new Damage();
        npc.Equipments.forEach(function (e, i) {
            if (e instanceof WeaponInfo) {
                let wp = e;
                let str = "";
                x = [];
                wp.Damages.forEach(function (dano, i) {
                    str = "";
                    if (dano.Name != "") {
                        str += "({0}) ".format(dano.Name);
                    }
                    str += dmg.GetDamage(npc.ST, dano.Type, dano.Bonus, dano.Penetration);
                    if (typeof (dano) == "DamageRangedInfo") {
                        //var rd = (DamageRangedInfo)dano;
                        let rd = dano;
                        str += " Prec {0}".format(rd.Prec);
                        str += " Alcance {0}/{1}".format(npc.ST * rd.HalfReach, npc.ST * rd.FullReach);
                        str += " CdT {0} Tiros {1} Magnit. {2} ST {3}".format(rd.CdT, rd.Tiros, rd.Magnitude, wp.STMin);

                    }
                    else {
                        str += " Alcance {0} ST {1}".format(dano.Alcance, wp.STMin);
                    }
                    x.push(str);
                });
                d.push(wp.Name + " " + x.join(", "));

                s.push((e.Qtde > 1 ? "{0} ".format(e.Qtde) : "") + "{0} ${1}, {2}kg".format(
                    e.Name,
                    e.Price.toLocaleString('pt-br', { minimumFractionDigits: 0 }),
                    e.Weight.toLocaleString('pt-br', { minimumFractionDigits: 1 })
                ));
            }
            else if (e instanceof ShieldInfo) {
                //var sd = (ShieldInfo)e;
                let sd = e;

                d.push("Golpe com escudo {0} Alcance 1".format(dmg.GetDamage(npc.ST, DamageTypeEnum.GdP, 0, DamagePenetrationEnum.Cont)));

                s.push((e.Qtde > 1 ? "{0} ".format(e.Qtde) : "") + "{0} (BD{1} RD{2}/PV{3}), ${4}, {5}kg".format(
                    sd.Name, sd.BD, sd.RD, sd.PV,
                    sd.Price.toLocaleString('pt-br', { minimumFractionDigits: 0 }),
                    sd.Weight.toLocaleString('pt-br', { minimumFractionDigits: 1 })
                ));
            }
            else if (e instanceof ArmorInfo) {
                //var ar = (ArmorInfo)e;
                let ar = e;

                armor.push("{0} (RD {1}) ${2}, {3}kg".format(ar.Name, ar.RD,
                    ar.Price.toLocaleString('pt-br', { minimumFractionDigits: 0 }),
                    ar.Weight.toLocaleString('pt-br', { minimumFractionDigits: 1 })
                ));
            }
            else {
                s.push((e.Qtde > 1 ? "{0} ".format(e.Qtde) : "") + "{0} ${1}, {2}kg".format(
                    e.Name,
                    e.Price.toLocaleString('pt-br', { minimumFractionDigits: 0 }),
                    e.Weight.toLocaleString('pt-br', { minimumFractionDigits: 1 })
                ));
            }
        });
        if (npc.ExtraDamage.length > 0) {
            npc.ExtraDamage.forEach(function (ed, i) {
                d.push(ed);
            });
        }
        if (d.length == 0) {
            d.push("Soco {0} Alcance C".format(dmg.GetDamage(npc.ST, DamageTypeEnum.GdP, -1, DamagePenetrationEnum.Cont)));
            d.push("Chute {0} Alcance C".format(dmg.GetDamage(npc.ST, DamageTypeEnum.GdP, 0, DamagePenetrationEnum.Cont)));
        }
        sb.push((html ? DAMAGE_HTML : DAMAGE_TEXT).format(d.join("; ")));
        d = [];
        if (s.length > 0) {
            sb.push((html ? WEAPON_HTML : WEAPON_TEXT).format(s.join("; ")));
        }
        if (armor.length > 0) {
            sb.push((html ? ARMOR_HTML : ARMOR_TEXT).format(armor.join("; ")));
        }
        s = [];
        return sb.join("\n");
    }


    /**
     * @param {type} NpcInfo npc        
     */
    ToHtml(npc) {
        return this.GenerateText(npc, true);
    }

    ToText(npc) {
        return this.GenerateText(npc, false, false);
    }
}
