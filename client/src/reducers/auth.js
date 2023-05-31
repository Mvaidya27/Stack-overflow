const authReducer = (state= {data:null}, action) => {
    switch (action.type) {
        case 'AUTH':
            //console.log(action)
            localStorage.setItem('Profile',JSON.stringify({ ...action?.data}))
            return { ...state, data: action?.data }
            case 'LOGOUT':
                localStorage.clear();
                return { ...state, data: null };
        default:
            return state;    
    }
}

export default authReducer;