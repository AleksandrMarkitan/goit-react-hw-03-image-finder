import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { requestApi } from '../services/api';

import { ButtonLoader } from './Button/Button';
import { Modal } from './Modal/Modal';
// import { ContactList } from './ContactList/ContactList';
// import s from '../components/ContactList/ContactList.module.scss';

export class App extends Component {
  state = {
    images: null,
    query: '',
    page: 1,
    imageInModal: null,
    loader: null,
  };

  onSubmit = query => {
    this.setState({
      query,
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      requestApi(query, page)
        .then(response => {
          this.setState({
            images: response.data.hits,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      // .then(function () {
      //   // always executed
      // });
    }
  }

  nextPageHandler = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  openModal = e => {
    const imageInModal = e.target.dataset.url;
    this.setState({ imageInModal: imageInModal });
  };

  closeModal = () => {
    this.setState({ imageInModal: null });
  };

  render() {
    const { images, imageInModal } = this.state;
    return (
      <>
        <ToastContainer position="top-center" autoClose={2000} />
        <Searchbar onSubmit={this.onSubmit} />
        {images && <ImageGallery images={images} openModal={this.openModal} />}
        {images && <ButtonLoader nextPageHandler={this.nextPageHandler} />}
        {imageInModal && (
          <Modal url={imageInModal} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
