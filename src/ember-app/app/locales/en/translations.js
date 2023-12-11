import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba10ДолжностиLForm from './forms/i-i-s-proba10-должности-l';
import IISProba10ОрганизацияLForm from './forms/i-i-s-proba10-организация-l';
import IISProba10ПланирСобесLForm from './forms/i-i-s-proba10-планир-собес-l';
import IISProba10РегРезультLForm from './forms/i-i-s-proba10-рег-результ-l';
import IISProba10РегистАнкетыLForm from './forms/i-i-s-proba10-регист-анкеты-l';
import IISProba10СотрудникиLForm from './forms/i-i-s-proba10-сотрудники-l';
import IISProba10ДолжностиEForm from './forms/i-i-s-proba10-должности-e';
import IISProba10ОрганизацияEForm from './forms/i-i-s-proba10-организация-e';
import IISProba10ПланирСобесEForm from './forms/i-i-s-proba10-планир-собес-e';
import IISProba10РегРезультEForm from './forms/i-i-s-proba10-рег-результ-e';
import IISProba10РегистАнкетыEForm from './forms/i-i-s-proba10-регист-анкеты-e';
import IISProba10СотрудникиEForm from './forms/i-i-s-proba10-сотрудники-e';
import IISProba10ДолжностиModel from './models/i-i-s-proba10-должности';
import IISProba10ОрганизацияModel from './models/i-i-s-proba10-организация';
import IISProba10ПланирСобесModel from './models/i-i-s-proba10-планир-собес';
import IISProba10РегРезультModel from './models/i-i-s-proba10-рег-результ';
import IISProba10РегистАнкетыModel from './models/i-i-s-proba10-регист-анкеты';
import IISProba10СотрудникиModel from './models/i-i-s-proba10-сотрудники';
import IISProba10ТЧПланирСобесModel from './models/i-i-s-proba10-т-ч-планир-собес';
import IISProba10ТЧРегистАнкетыModel from './models/i-i-s-proba10-т-ч-регист-анкеты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba10-должности': IISProba10ДолжностиModel,
    'i-i-s-proba10-организация': IISProba10ОрганизацияModel,
    'i-i-s-proba10-планир-собес': IISProba10ПланирСобесModel,
    'i-i-s-proba10-рег-результ': IISProba10РегРезультModel,
    'i-i-s-proba10-регист-анкеты': IISProba10РегистАнкетыModel,
    'i-i-s-proba10-сотрудники': IISProba10СотрудникиModel,
    'i-i-s-proba10-т-ч-планир-собес': IISProba10ТЧПланирСобесModel,
    'i-i-s-proba10-т-ч-регист-анкеты': IISProba10ТЧРегистАнкетыModel
  },

  'application-name': 'Proba10',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba10',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba10',
          title: 'Proba10'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba10: {
          caption: 'Proba10',
          title: 'Proba10',
          'i-i-s-proba10-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba10-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          },
          'i-i-s-proba10-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba10-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba10-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-proba10-организация-l': {
            caption: 'Организация',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba10-должности-l': IISProba10ДолжностиLForm,
    'i-i-s-proba10-организация-l': IISProba10ОрганизацияLForm,
    'i-i-s-proba10-планир-собес-l': IISProba10ПланирСобесLForm,
    'i-i-s-proba10-рег-результ-l': IISProba10РегРезультLForm,
    'i-i-s-proba10-регист-анкеты-l': IISProba10РегистАнкетыLForm,
    'i-i-s-proba10-сотрудники-l': IISProba10СотрудникиLForm,
    'i-i-s-proba10-должности-e': IISProba10ДолжностиEForm,
    'i-i-s-proba10-организация-e': IISProba10ОрганизацияEForm,
    'i-i-s-proba10-планир-собес-e': IISProba10ПланирСобесEForm,
    'i-i-s-proba10-рег-результ-e': IISProba10РегРезультEForm,
    'i-i-s-proba10-регист-анкеты-e': IISProba10РегистАнкетыEForm,
    'i-i-s-proba10-сотрудники-e': IISProba10СотрудникиEForm
  },

});

export default translations;
