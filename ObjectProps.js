var person = {
    "firstName" : "Dhruv",
    "lastName" : "Maindola",
    "getFullName" : function(){
        this.firstName + " " + this.lastName
    },
    "address" : {
        "street" : "123 abs",
        "city" : "New Delhi",
        "state" : "Delhi",
        "country" : "India"
    },
    "isFromState" : function(state){
        return this.address.state ===  state
    }
}

console.log(person.isFromState("Delhi"))