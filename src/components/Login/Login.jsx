import { useForm } from 'react-hook-form';
import { setLocalStorage } from '../../utils/localStorage';
import styles from './Login.module.css';

const Login = () => {
    const { 
        register, 
        formState: { errors, isValid }, 
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {      
      setLocalStorage('user', data);
      reset();
    };
      
    return (
        <div className={styles.container}>
            <h1 className='header'>Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First name</label>
                <input
                    placeholder='First name'
                    type="text"
                    {...register("firstName", 
                        { required: "this is required", 
                        minLength: {
                            value: 3,
                            message: "min 3 symbol"
                        } 
                    })}
                />
                <div>
                    {errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}
                </div>
                <label>Last name</label>
                <input
                    placeholder='Last name'
                    type="text"
                    {...register("lastName", { 
                        required: "this is required", 
                        minLength: {
                            value: 3,
                            message: "min 3 symbol"
                        } 
                    })}
                />
                <div>
                    {errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}
                </div>
                <label>Login</label>
                <input
                    placeholder='Login'
                    type="text"
                    {...register("login", 
                        { required: "this is required", 
                        minLength: {
                            value: 3,
                            message: "min 3 symbol"
                        },
                        maxLength: {
                            value: 10,
                            message: "max 10 symbol"
                        } 
                    })}
                />
                <div>
                    {errors?.login && <p>{errors?.login?.message || "Error"}</p>}
                </div>
                <label>Password</label>
                <input
                    placeholder='Password'
                    type="text"
                    {...register("password", 
                        { required: "this is required", 
                        minLength: {
                            value: 4,
                            message: "min 4 symbol"
                        },
                        maxLength: {
                            value: 10,
                            message: "max 10 symbol"
                        } 
                    })}
                />
                <div>
                    {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
                </div>
                <label>Email</label>
                <input
                    placeholder='Email'
                    type="text"
                    {...register("email", {
                        required: "this is required",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Invalid email address"
                        }
                    })}
                />
                <div>
                    {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
                </div>
                <label>Mobile number</label>
                <input
                    placeholder='tel'    
                    type="tel"
                    {...register("mobileNumber", {
                        required: "this is required",
                        maxLength: {
                            value: 11,
                            message: "max 11 symbol"
                        },
                        minLength: {
                            value: 8,
                            message: "min 8 symbol"
                        }
                    })}
                />
                <div>
                    {errors?.mobileNumber && <p>{errors?.mobileNumber?.message || "Error"}</p>}
                </div>                
                <input data-testid="submit" type="submit" disabled={!isValid} />
            </form>
        </div>
    );       
       
}
    

export default Login
