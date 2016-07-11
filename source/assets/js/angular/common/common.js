import angular from 'angular';
import MainMenu from './main-menu/mainMenu';
import Timeline from './timeline/timeline';

let commonModule = angular.module('app.common', [
  MainMenu,
  Timeline
])

.name;

export default commonModule;
