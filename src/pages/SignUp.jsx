import { useForm} from 'react-hook-form';


const Contact = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => alert('successful');


  return (
    <div className='p-8'>
    <div className="bg-blue-900 flex justify-center items-center flex-col flex-wrap mx-2">
    
      <div class='text-white'>
        <strong class=' text-2xl ' id='title'>Join now!</strong>
        <p class=''>Get 10,000 FREE</p>
        </div>

        <div className='p-8'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class='m-2 flex justify-between gap-3 ' id='name-div'>
          <div className='lg:w-1/2 md:w-full sm:w-full'>
            <input id='first_name' className='p-2 rounded'
            type='text' placeholder='Username'
              {...register("firstname", {
                required: true, maxLength: 15 
              })}
            /> 
            {errors.firstname && <p style={{color: 'red'}}>Firstname Required</p>}

          </div>
        </div>


        <div class='m-2'>
            <input id='email'  className='p-2 rounded'
            type='email'
            placeholder='Email'
            {
              ...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
             />
            {errors.email && <p style={{color: 'red'}}>Email required</p>}

        </div>
          
        <div  className='m-2 lg:w-1/2 md:w-full sm:w-full'>
            <input type="password" id="pass" name="password" placeholder='********' className='p-2 rounded'
            minlength="8" required />
          </div>


        <div class='m-2'>
          <select name="pets" id="pet-select"  className='p-2 rounded'>
            <option value="">--Please choose an option--</option>
            <option value="dog">Teacher</option>
            <option value="cat">Student</option>
          </select>
        </div>

        <div className='flex wrap justify-between'>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>         
          <p></p>
        </div>
        <button id='btn__submit'
         type='submit' value='submit' class='w-full h-8 text-white p-0 m-2 bg-orange-600 rounded'>
          Sign Up!
        </button>
        </form>

    </div>
    </div>
    </div>
    );
  }
  
  
  export default Contact;
  