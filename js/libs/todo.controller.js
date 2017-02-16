function MoviesController() {
  this.favorites = [{
    title: 'Front',
    year: 1994,
    popular: true,
    category: 'fantasy'
  },{
    title: 'Termit',
    year: 2000,
    popular: false,
    category: 'fantasy'
  },{
    title: 'Scare',
    year: 2010,
    popular: true,
    category: 'action'
  }];
}

angular
 .module('app')
 .controller('MoviesController', MoviesController);
