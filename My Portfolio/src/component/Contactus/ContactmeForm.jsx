import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Projectbtn } from '../../style/Project_Section_style';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    message: yup
        .string('Enter your message')
        .min(20, 'The message should be at least 20 characters long')
        .required('Message is required'),
});
const ContactmeForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            toast.success('Email sent successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Slide


            });

            console.log('====================================');
            console.log("Values", values);
            console.log('====================================');
            // alert(JSON.stringify(values, null, 2));
            let templateParams = {
                from_name: values.email,
                message: values.message,
            };

            emailjs.send('service_jyyud9c', 'template_bf1pqhi', templateParams, 'uTyBOgABd3NkqHQA5')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });
        },

    });
    return (


        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                id="message"
                name="message"

                label="Enter you message"
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                style={{
                    marginTop: "2rem",
                    marginBottom: "2rem"
                }}
            />

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide}


            />
            <Projectbtn color="primary" variant="outlined" fullWidth type="submit" style={{ paddingBlock: "0.7rem" }}>Submit</Projectbtn>
        </form>

    )
}

export default ContactmeForm