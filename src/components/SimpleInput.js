import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError, //alijas
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset:resetNameInput } = useInput( (value) => value.trim() !=='');

        const {value:enteredEmail, 
               isValid: enteredEmailIsValid,
               hasError: emailInputHasError,
               valueChangeHandler: emailChangeHandler,
              inputBlurHandler: emailBlurHandler,
              reset: resetEmailInput } = useInput( (value) => value.includes('@'));
   
  

   let formIsValid = false;

   if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
   } 


/*    useEffect(()  => {

    if(enteredNameIsValid ) {

      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }

   }, [enteredNameIsValid]); */




   const formSubmissionHandler = (event) => {
    event.preventDefault();

   


    if(!enteredNameIsValid) {
        

  
        return;

    }
    

    console.log(enteredName);
   // const enteredValue = nameInputRef.current.value;
    
   

    //nameInputRef.current.value = ''; => Nije idealno, jer jedino React treba da upravlja DOMom
    resetNameInput();
    //setEnteredName(''); 
    //setEnteredNameTouched(false);

   // setEnteredEmail(''); //da resetujemo vrednost
   // setEnteredEmailTouched(false);


   resetEmailInput();
   };


  

   const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

   const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        
        type='text' 
        id='name'
         onChange={nameChangedHandler}
         onBlur = {nameBlurHandler}
        value={enteredName}
        />

       {nameInputHasError &&(<p className="error-text">Uneto ime ne sme biti prazno</p>
      )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
        
        type='email' 
        id='email'
        onChange={emailChangeHandler}
        onBlur = {emailBlurHandler}
        value={enteredEmail}
        />

       {emailInputHasError &&(<p className="error-text">Unesite validan mejl</p>
      )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
