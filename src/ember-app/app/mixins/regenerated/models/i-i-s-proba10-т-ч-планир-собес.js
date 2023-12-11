import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тЧРегистАнкеты: DS.belongsTo('i-i-s-proba10-т-ч-регист-анкеты', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba10-планир-собес', { inverse: 'тЧПланирСобес', async: false })
});

export let ValidationRules = {
  тЧРегистАнкеты: {
    descriptionKey: 'models.i-i-s-proba10-т-ч-планир-собес.validations.тЧРегистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba10-т-ч-планир-собес.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПланирСобесE', 'i-i-s-proba10-т-ч-планир-собес', {
    
  });

  modelClass.defineProjection('ТЧПланирСобесL', 'i-i-s-proba10-т-ч-планир-собес', {
    
  });
};
