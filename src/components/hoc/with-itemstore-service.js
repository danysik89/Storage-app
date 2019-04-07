import React from 'react';
import { ItemstoreServiceConsumer } from '../itemstore-service-context'

const withItemstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <ItemstoreServiceConsumer>
        {
          (itemstoreService) => {
            return (<Wrapped {...props} itemstoreService={itemstoreService} />);
          }
        }
      </ItemstoreServiceConsumer>
    );
  }
};

export default withItemstoreService;