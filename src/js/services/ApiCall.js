const _handleResponse = response => {
  if (response.ok) return Promise.resolve(response);
  return Promise.reject(response);
};

const getAccessToken = () => localStorage.getItem('access-token');

const _getAuthHeader = withAuth => (
  withAuth && { 'Authorization': `Bearer ${getAccessToken()}` }
);

class ApiCall {
  static delete(url, data, withAuth = true) {
    return (
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          ..._getAuthHeader(withAuth)
        },
        body: data ? JSON.stringify(data) : null
      }).then(_handleResponse)
    );
  }

  static download(url, withAuth = true) {
    return (
      fetch(url, {
        method: 'GET',
        headers: _getAuthHeader(withAuth),
      }).then(_handleResponse)
        .then(res => res.blob())
    );
  }

  static get(url, withAuth = false) {
    return (
      fetch(url, {
        method: 'GET',
        headers: _getAuthHeader(withAuth),
      }).then(_handleResponse)
        .then(res => res.json())
    );
  }

  static post(url, data, withAuth = false) {
    return (
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          ..._getAuthHeader(withAuth)
        },
        body: JSON.stringify(data)
      }).then(_handleResponse)
        .then(res => res.json())
    );
  }

  static postPlain(url, data, withAuth = true) {
    return (
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          ..._getAuthHeader(withAuth)
        },
        body: data
      }).then(_handleResponse)
        .then(res => res.json())
    );
  }

  static put(url, data, withAuth = true) {
    return (
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          ..._getAuthHeader(withAuth)
        },
        body: JSON.stringify(data)
      }).then(_handleResponse)
        .then(res => res.json())
    );
  }
}

export default ApiCall;
