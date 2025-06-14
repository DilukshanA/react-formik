import { useFormik } from "formik"

type FormValues = {
    name: string;
    email: string;
    age: number;
}

const initialValues : FormValues = {
    name: '',
    email: '',
    age: 0,
}

const onSubmit = (values : FormValues) => {
    console.log('Form data', values);
}

const validate = (values : FormValues) => {

        const errors : Partial<FormValues> = {};

        if(!values.name) {
            errors.name = 'Required';
        }
        if(!values.email) {
            errors.email = 'Required';
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if(!values.age || values.age <= 0) {
            errors.age = 0;
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
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" 
            className="border mb-4"
            onChange={formik.handleChange}
            value={formik.values.name}/>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"
            className="border mb-4"
            onChange={formik.handleChange}
            value={formik.values.email}/>

            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age"
            className="border"
            onChange={formik.handleChange}
            value={formik.values.age}/>

            <button className="border mt-4"
             type="submit">
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form