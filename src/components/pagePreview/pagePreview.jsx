'use strict';
import React from 'react';

export default class PagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_name: 'Johnny AppleSeed',
      description: 'Duis eiusmod id adipisicing sunt id.',
    };
  };

  render() {
    const name = this.props.name || this.state.author_name;
    const _first_initial = name[0];
    if(!this.props.img_src) {
      return (
        <div className='page-preview'>
          <div className='page-preview__name-image-container'>
            <div className='page-preview__image-container__bordered'>
              { _first_initial }
            </div>
            <div className='page-preview__name'> { this.props.name || this.state.author_name } </div>
          </div>
          <div className='page-preview__description-container'>
            { this.props.description || this.state.description }
          </div>
        </div>
      );
    } else {
      return (
        <div className='page-preview'>
        <div className='page-preview__name-image-container'>
          <div className='page-preview__image-container'>
            <img className='page-preview__image' src={this.props.img_src}/>
          </div>
          <div className='page-preview__name'> { this.props.name || this.state.author_name } </div>
        </div>
        <div className='page-preview__description-container'>
          { this.props.description || this.state.description }
        </div>
      </div>
      );
    }
  };
};
