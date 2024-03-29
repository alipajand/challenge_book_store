import $axios from 'axios';

export default {
  getBookList: (filters) => {
    return $axios({ method: 'GET', url: `books/?${filters}`, data: {} });
  },
  getBookById: (id) => {
    return $axios({ method: 'GET', url: `books/${id}`, data: {} });
  },
  updateBook: (id, body) => {
    return $axios({ method: 'PATCH', url: `books/${id}`, data: body });
  },
  deleteBook: (id) => {
    return $axios({ method: 'DELETE', url: `books/${id}`, data: {} });
  },
  addBook: (body) => {
    return $axios({ method: 'POST', url: 'books/', data: body });
  }
};
