const initialState = {
  formPresence: {},
  dataPegawaiKehadiran: false,
  mapPresence: {
    isLoadApi: false,
    shapeCircle: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [106.82278495767176, -6.572953429677959],
          },
        },
      ],
    },
    lat: -6.572953429677959,
    lon: 106.82278495767176,
  },
};

const presenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_PRESENCE':
      return {
        ...state,
        formPresence: {
          ...state.formPresence,
          [action.formType]: action.formValue,
        },
      };
    case 'DATA_PEGAWAI_KEHADIRAN':
      return {...state, dataPegawaiKehadiran: action.payload};
    case 'MAP_PRESENCE':
      return {...state, mapPresence: action.payload};

    default:
      return state;
  }
};

export default presenceReducer;
