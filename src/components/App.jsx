import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { ButtonLoader } from './Button/Button';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import s from '../components/ContactList/ContactList.module.scss';

export class App extends Component {
  state = {
    images: [],
    query: '',
  };

  onSubmit = query => {
    this.setState({
      query,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      axios
        .get('https://pixabay.com/api/', {
          params: {
            key: '29884952-0a1ce1203a17cb22a427e3a5c',
            per_page: 12,
            q: `${this.state.query}`,
            image_type: 'photo',
            orientation: 'horizontal',
          },
        })
        .then(response => {
          console.log(response);
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

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        <ToastContainer position="top-center" autoClose={2000} />
        <ImageGallery images={images} />
      </>
    );
  }
}
