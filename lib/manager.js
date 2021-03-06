const Employee = require('./employee');

class Manager extends Employee {


	constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        this._officeNumber = officeNumber;
        this._role = 'Office Number:'
	}

/////
    
    get officeNumber() {
        return this._officeNumber;
    }

/////
    
    set officeNumber(num) {
        this._officeNumber = num;
    }

/////
    
    getRoleVar() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager