import './about.styl';
import {AboutController as controller} from './about.controller';
import template from './about.html';

export const aboutDirective = ()=> {
  return {
      template,
      controller,
      controllerAs: 'vm',
      restrict: 'E',
      replace: true,
      scope: {}
  }
};
