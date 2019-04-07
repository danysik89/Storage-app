const initialState = {
  storageData: [], 
  items: [
    // {title: 'Poroshenko', number: 23, price: 13, id: '01'},
    // {title: 'Zelensky', number: 42, price: 7, id: '02'}
  ]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ITEMS_LOADED':
      return {
        items: action.payload
      };
      
    default:
      return state;
  }

};

export default reducer;