 "use client"

// import React,
// {
//     useEffect,
//     useState,
//     useRef
// } from 'react';
// import { observer } from 'mobx-react';
// import CatStore from "../../../stores/catStore";
// // import RegistrationForm from '../../../forms/RegistrationForm';



// // const CatComponent = observer(() => {
// //     const handleSetName = () => {
// //         CatStore.setName("meow");
// //     };

// //     return (
// //         <div>
// //             <h2>Cat Name: {CatStore.name}</h2>
// //             <button onClick={handleSetName}>Set Name to "meow"</button>
// //         </div>
// //     );
// // });
// // export default CatComponent

// const RegistrationPage = () => {
//     // Your component logic here
//     return (
//         <div>
//             <h1>Registration Page</h1>
//            {/* //<RegistrationForm /> Render your registration form component */}
//         </div>
//     );
// };

// export default RegistrationPage;

import React from 'react';
import { observer } from 'mobx-react';
import RegistrationForm from "../../../forms/RegistrationForm_backup";

const RegistrationPage = () => (
    <div>
        <h1>Registration Page</h1>
        <RegistrationForm />
    </div>
);

export default observer(RegistrationPage);