var PB = PB || {};

(function () {
    'use strict';

// attempt to retrieve authentication from data sources

    PB.Poll = Backbone.Model.extend({
        


        

    });




})();

/*

function setUser(profile, token) {
if (!localStorage.getItem('id_token')) {
localStorage.setItem('profile', JSON.stringify(profile));
localStorage.setItem('id_token', token);
}
}

function removeUser() {
localStorage.removeItem('profile');
localStorage.removeItem('id_token');
}

class AuthStoreClass extends EventEmitter {
emitChange() {
this.emit(CHANGE_EVENT);
}

addChangeListener(callback) {
this.on(CHANGE_EVENT, callback)
}

removeChangeListener(callback) {
this.removeListener(CHANGE_EVENT, callback)
}

isAuthenticated() {
if (localStorage.getItem('id_token')) {
return true;
}
return false;
}

getUser() {
return localStorage.getItem('profile');
}

getJwt() {
return localStorage.getItem('id_token');
}

*/

