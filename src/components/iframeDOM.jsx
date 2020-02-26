'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class IFrameDOM_internal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  htmlTemplate() {
    var head_template = '  <meta charset="UTF-8">\n' +
                    '  <meta name="viewport" content="width=device-width, initial-scale=1"\n>' +
                    '  <style>\n' + this.props.css + '\n  </style>\n';

    var body_template = this.props.html + '\n  <script>\n' + this.props.js + '\n  </script>\n';

    return {
      head: head_template,
      body: body_template
    };
  }

  componentDidMount() {
    this.iframeHead = this.nodx.contentDocument.head;
    this.iframeRoot = this.nodx.contentDocument.body;
    this.iframeHead.innerHTML = this.htmlTemplate().head;
    this.iframeRoot.innerHTML = this.htmlTemplate().body;

    this.forceUpdate();
  };

  render() {
    const { children, head, ...rest } = this.props;
    return (
      <div { ...rest } ref={ nodx => (this.nodx = nodx) }>
        { this.iframeHead && ReactDOM.createPortal(head, this.iframeHead) }
        { this.iframeRoot && ReactDOM.createPortal(children, this.iframeRoot) }
      </div>
    );
  };
};

export default class IFrameDOM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    const { css, html, js, mode } = this.props;
    return (
      <IFrameDOM_internal mode={ mode } css={ css } html={ html } js={ js }>

      </IFrameDOM_internal>
    );
  };
};