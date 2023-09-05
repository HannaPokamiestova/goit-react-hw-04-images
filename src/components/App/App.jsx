import React from 'react';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { imagesMaper } from 'utils/imagesmaper';
import { Section } from '../Section';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button';
import { Container } from './App.styled';
import * as API from '../../api/pixabayAPI';
export class App extends Component {
  state = {
    images: null,
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    totalHits: null,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      try {
        const { hits, totalHits } = await API.fetchImages(
          this.state.query,
          this.state.page
        );

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...imagesMaper(hits)],
            totalHits,
          };
        });

        if (totalHits === 0) {
          toast(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (this.state.page === 1 && totalHits !== 0) {
          toast(`Hooray! We found ${totalHits} images.`);
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handelSubmitForm = query => {
    if (query.trim() === '') {
      return toast.error('Enter data to search');
    }

    this.setState({ images: [], page: 1, query });
  };

  handleButtomLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, error, totalHits, page } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handelSubmitForm} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Section>
          {isLoading && <Loader />}
          {images && <ImageGallery images={images} />}

          {images && totalHits - page * 12 > 0 && (
            <Button onClick={this.handleButtomLoad} />
          )}
        </Section>
        <ToastContainer />
      </Container>
    );
  }
}
