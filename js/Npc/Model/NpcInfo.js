export class NpcInfo {

  constructor() {
    this._STMod = 0;
    this._DXMod = 0;
    this._IQMod = 0;
    this._HTMod = 0;

    this._STRaceMod = 0;
    this._DXRaceMod = 0;
    this._IQRaceMod = 0;
    this._HTRaceMod = 0;

    this._PVMod = 0;
    this._PerMod = 0;
    this._WillMod = 0;
    this._FadigaMod = 0;
    this._RDMod = 0;
    this._MagicMod = 0;
    this._STLiftingMod = 0;
    this._BaseMoveMod = 0;

    this._Height = 0;
    this._Weight = 0;
    this._Age = 0;
    this._TotalPts = 0;

    this._Advantages = [];
    this._Disvantages = [];
    this._Qualits = [];
    this._Peculiarity = [];
    this._Advantages = [];
    this._Skills = [];
    this._Equipments = [];
    this._ExtraDamage = [];
    this._Minions = [];
  }

  get Name() {
    return this._Name;
  }
  set Name(value) {
    this._Name = value;
  }

  /**
   * @return RaceEnum  description
   */
  get Race() {
    return this._Race;
  }

  /**
   * @param  RaceEnum value description
   */
  set Race(value) {
    this._Race = value;
  }

  get RaceSingular() {
    return this._RaceSingular;
  }
  set RaceSingular(value) {
    this._RaceSingular = value;
  }

  get RacePlural() {
    return this._RacePlural;
  }
  set RacePlural(value) {
    this._RacePlural = value;
  }

  get Concept() {
    return this._Concept;
  }
  set Concept(value) {
    this._Concept = value;
  }

  get STRaceMod() {
    return this._STRaceMod;
  }
  set STRaceMod(value) {
    this._STRaceMod = value;
  }

  get DXRaceMod() {
    return this._DXRaceMod;
  }
  set DXRaceMod(value) {
    this._DXRaceMod;
  }

  get IQRaceMod() {
    return this._IQRaceMod;
  }
  set IQRaceMod(value) {
    this._IQRaceMod = value;
  }

  get HTRaceMod() {
    return this._HTRaceMod;
  }
  set HTRaceMod(value) {
    this._HTRaceMod = value;
  }

  get STMod() {
    return this._STMod;
  }
  set STMod(value) {
    this._STMod = value;
  }

  get DXMod() {
    return this._DXMod;
  }
  set DXMod(value) {
    this._DXMod = value;
  }

  get IQMod() {
    return this._IQMod;
  }
  set IQMod(value) {
    this._IQMod = value;
  }

  get HTMod() {
    return this._HTMod;
  }
  set HTMod(value) {
    this._HTMod = value;
  }

  get ST() {
    return 10 + this.STMod + this.STRaceMod;
  }
  set ST(value) {
    this.STMod = value - 10;
  }

  get DX() {
    return 10 + this.DXMod + this.DXRaceMod;
  }
  set DX(value) {
    this.DXMod = value - 10;
  }

  get IQ() {
    return 10 + this.IQMod + this.IQRaceMod;
  }
  set IQ(value) {
    this.IQMod = value - 10;
  }

  get HT() {
    return 10 + this.HTMod + this.HTRaceMod;
  }
  set HT(value) {
    this.HTMod = value - 10;
  }


  get PVMod() {
    return this._PVMod;
  }
  set PVMod(value) {
    this._PVMod = value;
  }

  get PerMod() {
    return this._PerMod;
  }
  set PerMod(value) {
    this._PerMod = value;
  }

  get PerMod() {
    return this._PerMod;
  }
  set PerMod(value) {
    this._PerMod = value;
  }

  get WillMod() {
    return this._WillMod;
  }
  set WillMod(value) {
    this._WillMod = value;
  }

  get FadigaMod() {
    return this._FadigaMod;
  }
  set FadigaMod(value) {
    this._FadigaMod = value;
  }

  get RDMod() {
    return this._RDMod;
  }
  set RDMod(value) {
    this._RDMod = value;
  }

  get MagicMod() {
    return this._MagicMod;
  }
  set MagicMod(value) {
    this._MagicMod = value;
  }

  get STLiftingMod() {
    return this._STLiftingMod;
  }
  set STLiftingMod(value) {
    this._STLiftingMod = value;
  }

  get BaseMoveMod() {
    return this._BaseMoveMod;
  }
  set BaseMoveMod(value) {
    this._BaseMoveMod = value;
  }

  get BaseMove() {
    return ((this.HT + this.DX) / 4.0) + this.BaseMoveMod;
  }

  get BaseLift() {
    return (this.ST + this.STLiftingMod) * (this.ST + this.STLiftingMod) / 10;
  }

  get TotalWeight() {
    //return this.Equipments.Select(e => e.Weight * e.Qtde).Sum();
    return this.Equipments
        .map(e => e.Weight * e.Qtde)
        .reduce((a, b) => a + b, 0);
  }

  get EncumbranceLevel() {
    var tc = this.TotalWeight;
    var bc = this.BaseLift;
    if (tc <= this.BaseLift) {
      return 0;
    }
    else if (tc <= this.BaseLift * 2) {
      return 1;
    }
    else if (tc <= this.BaseLift * 3) {
      return 2;
    }
    else if (tc <= this.BaseLift * 6) {
      return 3;
    }
    else if (tc <= this.BaseLift * 10) {
      return 4;
    }
    else {
      return 5;
    }
  }

  get Encumbrance() {
    let c = '';
    switch (this.EncumbranceLevel) {
      case 0:
        c = "Nenhuma";
        break;
      case 1:
        c = "Leve";
        break;
      case 2:
        c = "Média";
        break;
      case 3:
        c = "Pesada";
        break;
      case 4:
        c = "Mt. Peso";
        break;
      default:
        c = "Sobrecarga";
        break;
    }
    return c;
  }

  get BaseSpeed() {
    var s = this.BaseMove;
    switch (this.EncumbranceLevel) {
      case 1:
        s *= 0.8;
        break;
      case 2:
        s *= 0.6;
        break;
      case 3:
        s *= 0.4;
        break;
      case 4:
        s *= 0.2;
        break;
      case 5:
        s = 1;
        break;
    }
    //return parseInt(Math.Truncate(s));
    return parseInt(Math.trunc(s));
  }

  get Height() {
    return this._Height;
  }
  set Height(value) {
    this._Height = value;
  }

  get Weight() {
    return this._Weight;
  }
  set Weight(value) {
    this._Weight = value;
  }

  get Age() {
    return this._Age;
  }
  set Age(value) {
    this._Age = value;
  }

  get TotalPts() {
    return this._TotalPts;
  }
  set TotalPts(value) {
    this._TotalPts = value;
  }

  /**
   * @return FeatureInfo[]  description
   */
  get Advantages() {
    return this._Advantages;
  }
  /**
   * @param  FeatureInfo[] value description
   */
  set Advantages(value) {
    this._Advantages = value;
  }

  /**
   * @return FeatureInfo[]  description
   */
  get Disvantages() {
    return this._Disvantages;
  }
  /**
   * @param  FeatureInfo[] value description
   */
  set Disvantages(value) {
    this._Disvantages = value;
  }

  /**
   * @return FeatureInfo[]  description
   */
  get Qualits() {
    return this._Qualits;
  }
  /**
   * @param  FeatureInfo[] value description
   */
  set Qualits(value) {
    this._Qualits = value;
  }

  /**
   * @return FeatureInfo[]  description
   */
  get Peculiarity() {
    return this._Peculiarity;
  }
  /**
   * @param  FeatureInfo[] value description
   */
  set Peculiarity(value) {
    this._Peculiarity = value;
  }

  /**
   * @return {type} FeatureInfo[]  description
   */
  get Peculiarity() {
    return this._Peculiarity;
  }
  /**
   * @param {type} FeatureInfo[] value description
   */
  set Peculiarity(value) {
    this._Peculiarity = value;
  }

  /**
   * @return {type} SkillInfo[]  description
   */
  get Skills() {
    return this._Skills;
  }
  /**
   * @param {type} SkillInfo[] value description
   */
  set Skills(value) {
    this._Skills = value;
  }

  /**
   * @return {type} EquipmentInfo[]  description
   */
  get Equipments() {
    return this._Equipments;
  }
  /**
   * @param {type} EquipmentInfo[] value description
   */
  set Equipments(value) {
    this._Equipments = value;
  }

  /**
   * @return {type} string[]  description
   */
  get ExtraDamage() {
    return this._ExtraDamage;
  }
  /**
   * @param {type} string[] value description
   */
  set ExtraDamage(value) {
    this._ExtraDamage = value;
  }

  /**
   * @return {type} string[]  description
   */
  get Minions() {
    return this._Minions;
  }
  /**
   * @param {type} string[] value description
   */
  set Minions(value) {
    this._Minions = value;
  }
}
