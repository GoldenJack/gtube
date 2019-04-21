import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'atoms';

import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper({ name: 'fallback', prefix: 'error-boundary-' });

export default class Fallback extends Component {
  static propTypes = {
    componentStack: PropTypes.string,
    error: PropTypes.object,
  };

  static defaultProps = {
    componentStack: null,
    error: null,
  };

  state = {
    open: true,
    detailsVisible: false
  };

  toggleInfo = () => {
    this.setState(({ detailsVisible }) => ({ detailsVisible: !detailsVisible }));
  };

  refresh = () => {
    window.location.reload();
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, detailsVisible } = this.state;
    const { componentStack, error } = this.props;
    const buttonText = detailsVisible ? 'Скрыть детали ошибки' : 'Показать детали ошибки';
    return open && (
      <div {...cn()}>
        <div {...cn('content')}>
          <span onClick={this.close} {...cn('close')} role="button">
            &times;
          </span>
          <p {...cn('notification')}>
            Во время работы приложения произошла непредвиденная ошибка.
            Попробуйте <a href="#" onClick={this.refresh}>обновить</a> страницу.<br />
            Если ошибка повторяется, пожалуйста, обратитесь в техподдержку сообщив следующие детали:
          </p>
          <Button mix={cn('button').className} onClick={this.toggleInfo}>
            {buttonText}
          </Button>
          {
            detailsVisible && (
              <div {...cn('details')}>
                <pre>    { error.toString() }</pre>
                <pre {...cn('details-wrap')}>{ componentStack }</pre>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
