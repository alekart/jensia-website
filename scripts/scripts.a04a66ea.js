"use strict";angular.module("jensiaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngMessages"]).config(["$routeProvider",function(a){a.when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location",function(a,b){}]),angular.module("jensiaApp").controller("MainCtrl",["$scope",function(a){a.mail="contact",a.domain="jensia.be",a.contactlink="mailto:",a.arobase="@"}]),angular.module("jensiaApp").controller("ContactCtrl",["$scope","$rootScope","$http",function(a,b,c){a.user={ws:btoa("jensia")},a.submitForm=function(b){b.$valid&&(a.loading=!0,a.error=!1,c({method:"POST",url:"/service/mail.php",data:a.user}).then(function(b){a.contacted=!0},function(b){a.error=!0}).then(function(){a.loading=!1}))}}]),angular.module("jensiaApp").run(["$templateCache",function(a){a.put("views/partials/contact-form.html",'<div id="contact-form-inner" ng-controller="ContactCtrl"> <form name="contact" ng-submit="submitForm(contact)" ng-class="{\'hidden\': contacted}" novalidate> <div class="form-group" ng-class="{ \'has-error\': contact.lastname.$touched && contact.lastname.$invalid || contact.lastname.$invalid && contact.$submitted }"> <label for="firstname">Nom</label> <input id="lastname" name="lastname" ng-model="user.lastname" ng-minlength="2" type="text" class="form-control" required> <div class="ng-message" ng-messages="contact.lastname.$error" ng-if="contact.lastname.$touched || contact.$submitted"> <p ng-message="minlength">Votre nom est trop court</p> <p ng-message="required">Veuillez indiquer votre nom</p> </div> </div> <div class="form-group" ng-class="{ \'has-error\': contact.firstname.$touched && contact.firstname.$invalid || contact.firstname.$invalid && contact.$submitted }"> <label for="firstname">Prénom</label> <input id="firstname" name="firstname" ng-model="user.firstname" type="text" class="form-control" required ng-minlength="2"> <div class="ng-message" ng-messages="contact.firstname.$error" ng-if="contact.firstname.$touched || contact.$submitted"> <p ng-message="minlength">Votre prénom est trop court</p> <p ng-message="required">Veuillez indiquer votre prénom</p> </div> </div> <div class="form-group" ng-class="{ \'has-error\': contact.email.$touched && contact.email.$invalid || contact.email.$invalid && contact.$submitted }"> <label for="email">E-mail</label> <input id="email" name="email" type="email" class="form-control" ng-model="user.email" required> <div class="ng-message" ng-messages="contact.email.$error" ng-if="contact.email.$touched || contact.$submitted"> <p ng-message="email">Veuillez indiquer une adresse e-mail valide</p> <p ng-message="required">Veuillez indiquer une adresse e-mail</p> </div> </div> <div class="form-group" ng-class="{ \'has-error\': contact.message.$touched && contact.message.$invalid || contact.message.$invalid && contact.$submitted }"> <label for="message">Message</label> <textarea id="message" name="message" class="form-control" ng-model="user.message" ng-minlength="10" required></textarea> <div class="ng-message" ng-messages="contact.message.$error" ng-if="contact.message.$touched || contact.$submitted"> <p ng-message="minlength">Veuillez saisir un message avec au moins une phrase</p> <p ng-message="required">Veuillez saisir un message</p> </div> </div> <div class="form-group" id="submit-container" ng-disabled="loading"> <button class="btn btn-contour btn-lg" type="submit">Envoyer</button> </div> </form> <h2 ng-if="contacted"> Merci. </h2> <p class="alert alert-danger" ng-if="error"> Une erreur s\'est produite. </p> </div>')}]);