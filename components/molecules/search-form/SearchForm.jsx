import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';

const prefix = 'm-search';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  render() {
    const { results } = this.state;
    const { input, button } = this.props;
    return (
      <div className={prefix}>
        <Input
          type="text"
          {...input}
        />
        <Button {...button} />
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
  })
};

export default SearchForm;
