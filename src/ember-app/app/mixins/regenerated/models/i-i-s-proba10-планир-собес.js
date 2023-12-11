import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-proba10-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba10-регист-анкеты', { inverse: null, async: false }),
  тЧПланирСобес: DS.hasMany('i-i-s-proba10-т-ч-планир-собес', { inverse: 'планирСобес', async: false })
});

export let ValidationRules = {
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba10-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba10-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba10-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba10-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПланирСобес: {
    descriptionKey: 'models.i-i-s-proba10-планир-собес.validations.тЧПланирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba10-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    тЧПланирСобес: hasMany('i-i-s-proba10-т-ч-планир-собес', '', {
      
    })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba10-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 })
  });
};
