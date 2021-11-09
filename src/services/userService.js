export default class UserService{
    constructor(){
        this.user = []
    }   

    add(user){
       this.user.push(user)
    }

    list(){
        return this.users
    }

    getById(id){
        return this.user.find(u=>u.id ===id)
    }
    
}
