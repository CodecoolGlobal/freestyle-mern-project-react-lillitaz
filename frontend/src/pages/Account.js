import React from 'react';
import Footer from '../components/Footer';

function Account() {
    let currentDate = new Date().toDateString();

    return (
        <div >
            <div>this is the user account page, the user can edit their user data here, maybe add alternative contact information and also search input field with add to favorite movies button</div>
            <div>
                <Footer currentDate={currentDate} />
            </div>
        </div>
    );
}

export default Account;