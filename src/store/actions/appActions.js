export const setAppTitle = (currentUrl) => {
  return (dispatch) => {
    let newAppTitle = 'Our Promise';
    if (currentUrl.startsWith('/graduates')) {
      newAppTitle = 'Graduates';
    } else if (currentUrl.startsWith('/committee')) {
      newAppTitle = 'Committee';
    } else if (currentUrl.startsWith('/lecturers')) {
      newAppTitle = 'Lecturers';
    } else if (currentUrl.startsWith('/videos')) {
      newAppTitle = 'KMPk TV';
    } else {
      switch (currentUrl) {
        case '/auth/create':
          newAppTitle = 'Create Account'
          break;
        case '/auth/login':
          newAppTitle = 'Login'
          break;
        case '/auth/reset':
          newAppTitle = 'Reset Password'
          break;
        case '/auth/verify':
          newAppTitle = 'Verify'
          break;
        default:
      }
    }
    dispatch({ type: 'SET_APPTITLE', newAppTitle });
  }
};
