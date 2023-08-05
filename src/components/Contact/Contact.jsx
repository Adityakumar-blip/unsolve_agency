import React from 'react'
import './Contact.css'
import { ErrorMessage, useFormik } from 'formik'
import db from '../../firebase'
import * as yup from 'yup'
import Confirmation from '../../Common/Confirmation'

const initialValues = {
	name: "",
	email: "",
	phoneNo: "",
	subject: "",
	message: ""
}

const formSchema = yup.object({
	name: yup.string().required('Name is required'),
	email: yup.string().email().required('Email is required'),
	phoneNo: yup.number().required('Mobile number is required'),
	subject: yup.string().required('Requirement is required'),
})

const Contact = () => {

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: formSchema,
		onSubmit: async values => {
			try {
				debugger
				await db.collection('contacts').add(values);
				handleOpen()
				console.log('Form data saved successfully!');
			} catch (error) {
				console.error('Error saving form data:', error);
			}
		},

	})
	return (
		<div>
			<div class="container">
				<div class="section-contact">
					<div class="row justify-content-center">
						<div class="col-12 col-lg-10 col-xl-8">
							<div class="header-section text-center">
								<h2 class="title">Get In Touch
									<span class="dot"></span>
									<span class="big-title">CONTACT</span>
								</h2>
								<p class="description">Connect with us today for further enquiries.</p>

							</div>
						</div>
					</div>
					<div class="form-contact">
						<form onSubmit={formik.handleSubmit} >
							<div class="row">
								<div class="col-md-6">
									<div class="single-input">
										<i class="fas fa-user"></i>
										<input type="text" name="name" onChange={formik.handleChange} placeholder="ENTER YOUR NAME" />
										{formik.errors.name && formik.touched.name ? <p className='error'>{formik.errors.name}</p> : ""}
									</div>
								</div>
								<div class="col-md-6">
									<div class="single-input">
										<i class="fas fa-envelope"></i>
										<input type="text" name="email" onChange={formik.handleChange} placeholder="ENTER YOUR EMAIL" />
										{formik.errors.email && formik.touched.email ? <p className='error'>{formik.errors.email}</p> : ""}
									</div>
								</div>
								<div class="col-md-6">
									<div class="single-input">
										<i class="fas fa-phone"></i>
										<input type="text" name="phoneNo" onChange={formik.handleChange} placeholder="ENTER YOUR PHONE NUMBER" />
										{formik.errors.phoneNo && formik.touched.phoneNo ? <p className='error'>{formik.errors.phoneNo}</p> : ""}
									</div>
								</div>
								<div class="col-md-6">
									<div class="single-input">
										<i class="fas fa-check"></i>
										<input type="text" name="subject" onChange={formik.handleChange} placeholder="ENTER YOUR REQUIREMENT" />
										{formik.errors.subject && formik.touched.subject ? <p className='error'>{formik.errors.subject}</p> : ""}
									</div>	
								</div>
								<div class="col-12">
									<div class="single-input">
										<i class="fas fa-comment-dots"></i>
										<textarea placeholder="ENTER YOUR MESSAGE" onChange={formik.handleChange} name='message'></textarea>
									</div>	
								</div>
								<div class="col-12">
									<div class="submit-input text-center">
										<input type="submit" name="submit" value="GET SOLVED" />
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			{
				open && <Confirmation open={open} handleClose={handleClose}/>
			}
		</div>
	)
}

export default Contact