function MoviesController() {
  this.newTitle = '';
  this.newYear = '';
  this.onFocus = function () {
    console.log('Focus!');
  };
  this.onBlur = function () {
    console.log('Blur!');
  }
  this.onChange = function () {
    console.log('Change!', this.newTitle);
  }
  this.addMovie = function () {
    this.favorites.unshift({
      title: this.newTitle,
      year: this.newYear
    });
  };
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
