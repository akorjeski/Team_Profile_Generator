const Employee = require('./Employee');

class Engineer extends Employee {
	/*********************
	**** Constructor *****
	*********************/

	constructor(name, id, email, github) {
        super(name, id, email);
        this._github = github;
        this._role = "GitHub:";
	}

/////
    
    get github() {
        return this._github;
    }

/////
    set github(hub) {
        this._github = hub;
    }

/////
    
    getRoleVar() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;