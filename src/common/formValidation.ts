import * as Yup from 'yup';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*.?&])[A-Za-z\d#@$!%*.?&]{8,}$/;
const emailRegex = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;
const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;

export const loginValidation = Yup.object().shape({
  loginName: Yup.string()
    .required('Please enter your login name')
    .trim()
    // .matches(emailRegex, 'Please enter valid login name')
    .max(100, 'login name should not exceed than 100 characters'),
  password: Yup.string()
  .required('Please enter your password')
  .min(6, 'Password must be at least 6 characters')
//   .matches(passwordRegex, 'Please enter valid password')
});

export const forgotPassword =Yup.object().shape({
    loginName : Yup.string()
    .required('Please enter your login name')
    .trim()
    .max(100, 'Login name should not exceed than 100 characters'),

})

// export  const resetPassword =Yup.object().shape({
//     newPassword : Yup.string()
//     .required ('Please enter your new password')
//     .trim(),

//     confirmNewPassword : Yup.string()
//     .required ('Please re-enter your new password')
//     .trim()
    
// })


export const resetPassword = Yup.object().shape({
  newPassword: Yup.string()
    .required('Please enter your new password')
    .trim(),

  confirmNewPassword: Yup.string()
    .required('Please re-enter your new password')
    .oneOf([Yup.ref('newPassword')], 'New password and confirm new password should be same')
    .trim(),
});
