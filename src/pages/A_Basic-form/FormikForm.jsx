import { Formik,Form,Field,FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function FormikForm() {

    return (
        <div>
            <h1>Formik Form</h1>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                    .required("Username is required")
                    .email("Invalid email address"),
                    password: Yup.string()
                    .required("Password is required")
                    .min(6, "Password must be at least 6 characters")
                    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                    .matches(/[0-9]/, "Password must contain at least one number")  
                    .matches(/[@$!%*?&]/, "Password must contain at least one special character")

                })}
                >


                <Form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <FastField type="text" name="username" id="username" />
                        <ErrorMessage name="username" component="div" className="text-danger" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <FastField type="password" name="password" id="password" />
                        <ErrorMessage name="password" component="div" className="text-danger" />  
                    </div>
                    <div>
                        <FastField type="submit" value="Submit" />
                    </div>
                </Form>

            </Formik>
        </div>
    )
}