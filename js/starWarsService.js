angular.module('app').service('starWarsService', function ($http) {

  this.getPlanets1 = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/' + 'planets?page=1'
    })
    .then(function(response) {
      console.log('start planet');
      console.log(response);
      return response.data.results;
    })
  }


  this.getPlanets2 = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/' + 'planets?page=2'
    })
    .then(function(response) {
      console.log('start planet');
      console.log(response);
      return response.data.results;
    })
  }

//3
  this.getPlanets3 = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/' + 'planets?page=3'
    })
    .then(function(response) {
      console.log('start planet');
      console.log(response);
      return response.data.results;
    })
  }

//4
  this.getPlanets4 = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/' + 'planets?page=4'
    })
    .then(function(response) {
      console.log('start planet');
      console.log(response);
      return response.data.results;
    })
  }


  //5
    this.getPlanets5 = function() {
      return $http({
        method: 'GET',
        url: 'http://swapi.co/api/' + 'planets?page=5'
      })
      .then(function(response) {
        console.log('start planet');
        console.log(response);
        return response.data.results;
      })
    }


    //6
      this.getPlanets6 = function() {
        return $http({
          method: 'GET',
          url: 'http://swapi.co/api/' + 'planets?page=6'
        })
        .then(function(response) {
          console.log('start planet');
          console.log(response);
          return response.data.results;
        })
      }


      this.getPlanets7 = function() {
        return $http({
          method: 'GET',
          url: 'http://swapi.co/api/' + 'planets/61/'
        })
        .then(function(response) {
          console.log('start planet');
          console.log(response);
          return response.data.results;
        })
      }




//flatten on lodash







})
