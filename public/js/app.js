const app =  angular.module("CFAC",[])
app.controller("MainController",["$http",function ($http) {

this.hello = "ayy";
this.url = "http://localhost:3000";
this.submissions = [];
this.getSubmissions = () => {

  $http({
    method:"GET",
    url: this.url+"/submissions"
  })
  .then((response) => {
    console.log(response.data);
    this.submissions = response.data;
    console.log("Retrieved Submissions");
  })
  .catch((err) => {
    console.log(err);
    console.log("error getting submissions");
  })
// End getSubmissions
};
//

this.getSubmissions();







// end MainController
}]);
