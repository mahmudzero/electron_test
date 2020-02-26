'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { throws } from 'assert';

class ShadowDOM_internal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  htmlTemplate() {
    var template = '<!DOCTYPE html>\n' +
                    '<html lang="en-US">\n' +
                    '<head>\n' + '  <meta charset="UTF-8">\n' +
                    '  <meta name="viewport" content="width=device-width, initial-scale=1"\n>' +
                    '  <style>\n' + this.props.css + '\n  </style>\n' + '</head>' +
                    '<body>\n' + this.props.html +
                    '\n</body>' + '</html>';
    var script = document.createElement('script');
    script.textContent = this.props.js;
    return {template, script};
  }

  componentDidMount() {
    this.shadowRoot = this.node.attachShadow({ mode: this.props.mode });
    this.shadowRoot.innerHTML = this.htmlTemplate().template;
    this.node.appendChild(this.htmlTemplate().script);
    this.forceUpdate();
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <div { ...rest } ref={ node => (this.node = node) }>
        { this.shadowRoot && ReactDOM.createPortal(children, this.shadowRoot) }
      </div>
    );
  };
};

export default class ShadowDOM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    const { css, html, js, mode } = this.props;
    return (
      <ShadowDOM_internal mode={ mode } css={ css } html={ html } js={ js }>

      </ShadowDOM_internal>
    );
  };
};