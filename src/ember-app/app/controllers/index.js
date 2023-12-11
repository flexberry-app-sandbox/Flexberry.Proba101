import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba10.caption'),
          title: i18n.t('forms.application.sitemap.proba10.title'),
          children: [{
            link: 'i-i-s-proba10-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-сотрудники-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-proba10-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-рег-результ-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-proba10-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-регист-анкеты-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-proba10-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-планир-собес-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-proba10-должности-l',
            caption: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-должности-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-proba10-организация-l',
            caption: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba10.i-i-s-proba10-организация-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})