import React from 'react'
import './Contact.css'
import { useFormik } from 'formik'
import db from '../../firebase'

const initialValues = {
	name: "",
	email: "",
	phoneNo: "",
	subject: "",
	message: ""
}

const Contact = () => {

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: async values => {
			try {
				await db.collection('contacts').add(values);
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
								<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur commodo risus, nec pellentesque turpis efficitur non.</p>

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
									</div>
								</div>
								<div class="col-md-6">
									<div class="single-input">
										<i class="fas fa-envelope"></i>
										<input type="text" name="email" onChange={formik.handleChange} placeholder="ENTER YOUR EMAIL" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="single-input">
										<i class="fas fa-phone"></i>
										<input type="text" name="phoneNo" onChange={formik.handleChange} placeholder="ENTER YOUR PHONE NUMBER" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="single-input">
										<i class="fas fa-check"></i>
										<input type="text" name="subject" onChange={formik.handleChange} placeholder="ENTER YOUR SUBJECT" />
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
		</div>
	)
}

export default Contact