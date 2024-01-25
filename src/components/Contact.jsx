import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyName: '',
    category: 'dealer',
    subject: '',
    content: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:dharmip060@gmail.com?subject=Contact%20Form&body=
      Name: ${formData.name}%0D%0A
      Phone: ${formData.phone}%0D%0A
      Subject: ${formData.subject}%0D%0A
      Company Name: ${formData.companyName}%0D%0A
      Category: ${formData.category}%0D%0A
      Email: ${formData.email}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4 ">
          <h2 className="text-4xl font-bold mb-6 text-primary text-center">Contact Us</h2>
          <p>Need to get in touch? Fill this contact form.</p>
        </div>
        <div className='lg:w-1/2 p-4'>

        <div className="container mx-auto mt-4 p-5 bg-gray-100 rounded-md shadow-md flex ">


          <form onSubmit={handleFormSubmit} className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="mb-4 spaxe-x-2 flex">
              {/* <label htmlFor="name" className="block text-lg font-bold text-gray-900">
                Name
              </label> */}
              <input
                type="text"
               
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                className="w-82 px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary text-primary"
                required
              />
            </div>
            <div className='flex mb-4'>

<div className="mr-4 flex">
  {/* <label htmlFor="email" className="block text-lg font-bold text-gray-900">
    Email
  </label> */}
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder='E-mail'
                className="w-36 px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary text-primary"
                required
  />
</div>

<div className=" flex "> {/* Added ml-4 for margin */}
  {/* <label htmlFor="phone" className="block text-lg font-bold text-gray-900">
    Phone
  </label> */}
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder='Phone Number'
                className="w-36 px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary text-primary"
                required
  />
</div>

</div>

            {/* <label htmlFor="name" className="block text-lg font-bold text-gray-900">
              Subject
            </label> */}
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder='Subject'
                className="w-72 px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary text-primary"
                required
            />
            {/* <label htmlFor="content" className="block text-lg font-bold text-gray-900">
              Content
            </label> */}
            <input
              type="text"
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder='Content'
              className="w-72 px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary text-primary"
              required
              
            />
            <div className='flex'>

            <div className="mb-4">
              {/* <label htmlFor="companyName" className="block text-lg font-bold text-gray-900">
                Company Name
              </label> */}
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder='Company Name'
                className="w-36 px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary text-primary"
                required
              />
            </div>

            <div className="mb-4">
              {/* <label htmlFor="category" className="block text-lg font-bold text-gray-900">
                Category
              </label> */}
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-36 px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary"
              >
                <option value="dealer">Dealer</option>
                <option value="individual">Individual</option>
                <option value="technician">Technician</option>
              </select>
            </div>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:border-primary"
            >
              Send Mail
            </button>
          </form>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
