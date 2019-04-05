const initialState = {
  storageData: [
    {title: 'Pizza', number: 23, price: 13, id: '01'},
    {title: 'Burger', number: 42, price: 7, id: '02'},
    {title: 'Hot dog', number: 26, price: 6, id: '03'},
    {title: 'Steak', number: 8, price: 89, id: '04'},
    {title: 'Cruasan', number: 13, price: 12, id: '05'}
  ], 
  items: []
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