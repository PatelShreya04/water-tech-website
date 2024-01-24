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
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Create a mailto link with the form data
        const mailtoLink = `mailto:dharmip060@gmail.com?subject=Contact%20Form&body=
      Name: ${formData.name}%0D%0A
      Phone: ${formData.phone}%0D%0A
      Subject: ${formData.subject}%0D%0A
      Company Name: ${formData.companyName}%0D%0A
      Category: ${formData.category}%0D%0A
      Email: ${formData.email}`;

        // Open the user's default email client
        window.location.href = mailtoLink;
    };


    return (
        <div>
            <Header />
            <Nav />

            <div className="container mx-auto mt-4  p-5">
                <h2 className="text-4xl font-bold mb-6 text-primary transform hover:scale-90 text-center">Contact Us</h2>

                <form onSubmit={handleFormSubmit} className=' w-3/4'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-bold text-gray-900">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-bold text-gray-900">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-lg font-bold text-gray-900">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary"
                            required
                        />
                    </div>
                    <label htmlFor="name" className="block text-lg font-bold text-gray-900">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary"
                        required
                    />
                    <div className="mb-4">
                        <label htmlFor="companyName" className="block text-lg font-bold text-gray-900">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-lg font-bold text-gray-900">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-primary"
                        >
                            <option value="dealer">Dealer</option>
                            <option value="individual">Individual</option>
                            <option value="technician">Technician</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80"
                    >
                        Send Mail
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
