import { createContext, useEffect, useReducer } from "react";

const getUserFromLocalStorage = () => {
    try {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        return null;
    }
};

const initialState = {
    user: getUserFromLocalStorage(),
    loading: false,
    error: null,
};

export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return { ...state, loading: true, error: null };
        case "LOGIN_SUCCESS":
            return { user: action.payload, loading: false, error: null };
        case "LOGIN_FAILURE":
            return { user: null, loading: false, error: action.payload };
        case "REGISTER_SUCCESS":
            return { user: action.payload, loading: false, error: null };
        case "LOGOUT":
            return { user: null, loading: false, error: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        if (state.user !== null) {
            localStorage.setItem("user", JSON.stringify(state.user));
        } else {
            localStorage.removeItem("user");
        }
    }, [state.user]);

    return (
        <AuthContext.Provider value={{ 
            user: state.user, 
            loading: state.loading, 
            error: state.error, 
            dispatch 
        }}>
            {children}
        </AuthContext.Provider>
    );
};