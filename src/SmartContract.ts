interface User {
    id: number;
    name: string;
    balance: number;
  }
  
  export default class CoolSmartContract {
    private users: User[];
  
    constructor() {
      this.users = [];
    }
  
    addUser(id: number, name: string): void {
      const newUser: User = {
        id,
        name,
        balance: 0,
      };
  
      this.users.push(newUser);
    }
  
    getUsers(): User[] {
      return this.users;
    }
  
    transferBalance(senderId: number, receiverId: number, amount: number): void {
      const sender = this.users.find((user: { id: number; }) => user.id === senderId);
      const receiver = this.users.find((user: { id: number; }) => user.id === receiverId);
  
      if (sender && receiver && sender.balance >= amount) {
        sender.balance -= amount;
        receiver.balance += amount;
      } else {
        throw new Error("Invalid transfer or insufficient balance.");
      }
    }
  }