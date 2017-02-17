function MoviesController() {
  this.likesList = [];
  this.unlike = function (index) {
    this.likesList.splice(index, 1);
  };
  this.addToLikes = function (movie) {
    this.likesList.push(movie);
  };
  this.favorites = [{
    title: 'Final Fantasy',
    year: 1994,
    popular: true,
    category: 'fantasy'
  },{
    title: 'Shrek',
    year: 2000,
    popular: false,
    category: 'fantasy'
  },{
    title: 'Terminator',
    year: 2010,
    popular: true,
    category: 'action'
  }];
}

angular
 .module('app')
 .controller('MoviesController', MoviesController);
