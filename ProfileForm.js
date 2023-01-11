import classes from './ProfileForm.module.css';
import { useRef,useContext } from 'react';
import AuthCartContext from '../../authSotre/authcontext';
import { useHistory } from 'react-router-dom';
const ProfileForm = () => {
  const history = useHistory()
  const authCtx = useContext(AuthCartContext)
const changepass = useRef()
console.log('formprofileform',authCtx.tokentaken)
const submitHandler =(event)=>{
  event.preventDefault()
  const enteredpassword = changepass.current.value

  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDohcQdgl3-uiia8iK3LiGBuiVUcCoDsdo',{
    method:'POST',
    body:JSON.stringify({
      idToken:authCtx.TokenTaked,
      password:enteredpassword,
      returnSecureToken:false,
    }),
    headers:{
      'Content-Type':'application/json',
    },
  })
  .then((res)=>{
     history.replace('/')
    }
  )
}
  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input       type='password' id='new-password' ref={changepass} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
