"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoolSmartContract = /** @class */ (function () {
    function CoolSmartContract() {
        this.users = [];
    }
    CoolSmartContract.prototype.addUser = function (id, name) {
        var newUser = {
            id: id,
            name: name,
            balance: 0,
        };
        this.users.push(newUser);
    };
    CoolSmartContract.prototype.getUsers = function () {
        return this.users;
    };
    CoolSmartContract.prototype.transferBalance = function (senderId, receiverId, amount) {
        var sender = this.users.find(function (user) { return user.id === senderId; });
        var receiver = this.users.find(function (user) { return user.id === receiverId; });
        if (sender && receiver && sender.balance >= amount) {
            sender.balance -= amount;
            receiver.balance += amount;
        }
        else {
            throw new Error("Invalid transfer or insufficient balance.");
        }
    };
    return CoolSmartContract;
}());
exports.default = CoolSmartContract;
