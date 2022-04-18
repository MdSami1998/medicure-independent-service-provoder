import React from 'react';

const Blogs = () => {

    return (
        <div className='min-h-screen bg-indigo-50'>
            <h1 className='text-4xl font-bold text-center py-5'>Question & Answer Section </h1>
            <div className=' w-3/4 mx-auto pb-5'>
                <div className='bg-indigo-100 p-8 font-bold'>
                    <h1 className='text-2xl font-bold mb-5 text-indigo-800'>Difference between authorization and authentication?</h1>

                    <p className='font-semibold text-lg leading-8'>
                        Authentication is the process of verifying and confirming users identity and password.Authorization is the process to determine if the authenticated  user has access to the resources in an organization.
                        Authentication verifies who the user is and Authorization gives permission what resources a user can access.
                        Authentication is the first step of a good identity and access management process.Authorization comes after authentication.
                    </p>
                </div>
                <div className=' bg-indigo-100 p-8 font-bold'>
                    <h2 className='text-2xl font-bold mb-5 text-indigo-800'>Why are you using firebase? What other options do you have to implement authentication?</h2>

                    <p className='font-semibold text-lg leading-8'>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-to-use UI frameworks. It handles passwords, phone numbers, and prominent federated identity providers like Google, Facebook, and Twitter, among other methods.
                        <br />
                        Besides Google Firebase Authentication there are one more library called React firebase hooks which helps us to implement authentication in our app.
                    </p>
                </div>
                <div className=' bg-indigo-100 p-8 font-bold'>
                    <h2 className='text-2xl font-bold mb-5 text-indigo-800'>What other services does firebase provide other than authentication?</h2>

                    <p className='font-semibold text-lg leading-8'>
                        There are many services which Firebase provides, Most useful of them are:
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Cloud Messaging.</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;