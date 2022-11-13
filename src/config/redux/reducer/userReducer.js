const initialState = {
  formUser: {
    UsernameOrEmail: '', //dar026
    Password: '',
  },
  dataUser: {
    roles: [],
  },
  modalPhoto: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_USER':
      return {
        ...state,
        formUser: {
          ...state.formUser,
          [action.formType]: action.formValue,
        },
      };
    case 'DATA_USER':
      return {...state, dataUser: action.payload};
    case 'MODAL_PHOTO':
      return {...state, modalPhoto: action.payload};
    default:
      return state;
  }
};

export default userReducer;
