import { Formik, useFormik } from "formik"

type FormValues = {
    name: string;
    email: string;
    age: number;
}

type FormErrors = {
    name?: string;
    email?: string;
    age?: string;
}

const initialValues : FormValues = {
    name: '',
    email: '',
    age: 0,
}

const onSubmit = (values : FormValues) => {
   // console.log('Form data', values);
}

const validate = (values : FormValues) => {

        const errors : FormErrors = {};

        if(!values.name) {
            errors.name = 'Required';
        }
        if(!values.email) {
            errors.email = 'Required';
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if(!values.age || values.age <= 0) {
            errors.age = 'Age must be greater than 0';
        }
        return errors
}


const Form = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    });

  return (
    <div className="flex w-full justify-center">
        <form className="flex flex-col min-w-[350px] max-w-[500px]"
            onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-4">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" 
                className="border py-2 rounded-lg px-4"
                onChange={formik.handleChange}
                value={formik.values.name}/>
                <span className="text-red-400">
                    {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </span>
            </div>
            
            <div className="flex flex-col my-4">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email"
                className="border py-2 rounded-lg px-4"
                onChange={formik.handleChange}
                value={formik.values.email}/>
                <span className="text-red-400">
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </span>
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age"
                className="border py-2 rounded-lg px-4"
                onChange={formik.handleChange}
                value={formik.values.age}/>
                <span className="text-red-400">
                    {formik.errors.age ? <div>{formik.errors.age}</div> : null}
                </span>
            </div>

            <button className="border mt-4 rounded-lg py-2 hover:bg-gray-300
            cursor-pointer"
             type="submit">
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form