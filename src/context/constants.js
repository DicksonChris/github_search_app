class Action {

    static GET_USERS = new Action("GET_USERS")
    static CLEAR_USERS = new Action("CLEAR_USERS")

    constructor(action) {
        this.action = action
    }
}

export default Action