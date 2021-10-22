import { useDispatch, useSelector } from 'react-redux';
import { checkUser, inputChangeLogin } from '../store/infoReducer';
import { inputChangePassword } from './../store/infoReducer';

//style 
import "../css/form.css";

export default function Form() {
    const dispatch = useDispatch();
    const info = useSelector(state => state.info);


    const handleChangeLogin = (event) => {
        const login = event.target.value;
        dispatch(inputChangeLogin(login));
        dispatch(checkUser())
    }
    
    const handleChangePassword = (event) => {
        const password = event.target.value;
        dispatch(inputChangePassword(password));
        dispatch(checkUser())
    }

    return (
        <div>
            <form action={`/${info.inputLogin}`} className="form">
                Login:<input onChange={handleChangeLogin} />
                Password<input onChange={handleChangePassword} />
                <button disabled={info.checkUser}>login</button>
            </form>
        </div>
    );
}