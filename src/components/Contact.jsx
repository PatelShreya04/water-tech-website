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
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-6 text-primary text-center md:mt-10">Contact Us</h2>
          <p className='text-center text-xl mt-10 '>Need to get in touch? Fill out this contact form.</p>
        </div>
        <div className="md:w-1/2 p-4 h-auto">
          <div className="container mx-auto mt-4 p-5 bg-gray-100 rounded-md shadow-md flex">
            <form onSubmit={handleFormSubmit} className="w-full">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Your Company Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="dealer">Dealer</option>
                  <option value="individual">Individual</option>
                  <option value="technician">Technician</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Your Subject"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-600">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Your Content"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
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
