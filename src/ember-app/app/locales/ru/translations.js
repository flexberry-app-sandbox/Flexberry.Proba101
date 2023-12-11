import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba10',
          title: 'Proba10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
