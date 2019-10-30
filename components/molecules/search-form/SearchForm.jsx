import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';

const prefix = 'm-search';
const MIN_VALUE = 3;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleSearchInput(value) {
    const { onInput } = this.props;
    if (value.length >= MIN_VALUE && onInput) {
      onInput(value);
    }
  }

  render() {
    const { results } = this.state;
    const { input, button } = this.props;
    return (
      <div className={prefix}>
        <Input
          type="text"
          onChange={((value) => this.handleSearchInput(value))}
          {...input}
        />
        <Button {...button} className={`${prefix}__button`} />
        <div>
          {results.map((el) => (<div>el</div>))}
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  button: PropTypes.shape({
    text: PropTypes.string
  }),
  input: PropTypes.shape({
    placeholder: PropTypes.string
  }),
  onInput: PropTypes.func
};

export default SearchForm;
