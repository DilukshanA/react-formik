import { useFormik } from "formik"

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            age: ''
        },
        onSubmit: (values) => {
            console.log('Form data', values);
        } 
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