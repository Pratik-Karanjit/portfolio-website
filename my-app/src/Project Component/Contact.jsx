import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../Project CSS/black.jpg'; // Update the path and filename accordingly


const ContactPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    fName: '',
    lName: '',
    email: '',
    companyWebsite: '',
    description: '',
  };

  const onSubmit = async (info) => {
    try {
      await axios.post('http://localhost:8000/users', info);
      navigate('/registration-success');
    } catch (error) {
      console.log('unable to create');
    }
  };

  const validationSchema  = yup.object({
    fName: yup.string().required('First Name is required.'),
    lName: yup.string().required('Last Name is required.'),
    email: yup.string().required('Email is required.'),
    description: yup.string().required('Description is required.'),
  });

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-6 text-center">
            <h1 className="display-1 contact-heading" style={{ color: 'white', textAlign: 'left', paddingLeft: '10%',fontSize: '60px' }}>
              Contact
            </h1>
            <div style={{ paddingTop: '2rem' }}>
              <h2 className="contact-subheading" style={{ color: 'white', textAlign: 'left', paddingLeft: '18%' }}>
                Get in touch via the contact form below and <br />
                I'll come back to you as soon as possible.
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <div className="col-md-8">
            <div className="form-container">
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(formik) => (
                  <Form>
                    <div className="form-row">
                      <div className="form-element-spacing mb-4">
                        <input
                          type="text"
                          id="fName"
                          placeholder="First Name*"
                          {...formik.getFieldProps('fName')}
                          className={`form-input form-control ${
                            formik.touched.fName && formik.errors.fName ? 'is-invalid' : ''
                          }`}
                          required
                        />
                        <ErrorMessage  style={{ color: 'white' }} name="fName" component="div" className="error-message" />
                      </div>
                      <div className="form-element-spacing mb-4">
                        <input
                          type="text"
                          id="lName"
                          placeholder="Last Name*"
                          {...formik.getFieldProps('lName')}
                          className={`form-input form-control ${
                            formik.touched.lName && formik.errors.lName ? 'is-invalid' : ''
                          }`}
                          required
                        />
                        <ErrorMessage  style={{ color: 'white' }} name="lName" component="div" className="error-message" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-element-spacing mb-4">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email*"
                          {...formik.getFieldProps('email')}
                          className={`form-input form-control ${
                            formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                          }`}
                          required
                        />
                        <ErrorMessage  style={{ color: 'white' }} name="email" component="div" className="error-message" />
                      </div>
                      <div className="form-element-spacing mb-4">
                        <input
                          type="text"
                          id="companyWebsite"
                          placeholder="Company Name"
                          {...formik.getFieldProps('companyWebsite')}
                          className="form-input form-control"
                        />
                      </div>
                    </div>
                    <div className="form-element-spacing mb-4">
                      <textarea
                        type="text"
                        id="description"
                        placeholder="Description*"
                        {...formik.getFieldProps('description')}
                        className={`form-input form-control ${
                          formik.touched.description && formik.errors.description ? 'is-invalid' : ''
                        }`}
                        required
                      />
                      <ErrorMessage  style={{ color: 'white' }} name="description" component="div" className="error-message" />
                    </div>
                    <div className="form-element-spacing" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button type="submit" className="form-button btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
