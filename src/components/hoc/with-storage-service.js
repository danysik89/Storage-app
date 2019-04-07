import React from 'react';
import { ItemstoreServiceConsumer } from '../storage-service-context'

const withStorageService = () => (Wrapped) => {

  return (props) => {
    return (
      <ItemstoreServiceConsumer>
        {
          (storageService) => {
            return (<Wrapped {...props} storageService={storageService} />);
          }
        }
      </ItemstoreServiceConsumer>
    );
  }
};

export default withStorageService;