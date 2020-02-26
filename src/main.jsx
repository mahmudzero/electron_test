'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import PagePreview from '_src/src/components/pagePreview/pagePreview';
import NavBar from '_src/src/components/navBar/navBar';
import ShadowDOM from '_src/src/components/shadowDom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  _render_page_prev = () => {
    const _page_prev_json = [
      {
        name: "Johnny Appleseed",
        img_src: "",
        description: "Ad ea ea velit aliqua nostrud aliquip aute commodo ut sit nostrud duis sit ad. Minim cupidatat sunt reprehenderit minim sit anim nulla magna amet non laboris dolor commodo nisi.",
      }, {
        name: "Mufasa Waititi",
        img_src: "",
        description: "Anim pariatur anim incididunt enim deserunt quis excepteur laborum dolore.",
      }, {
        name: "Eddie Hall",
        img_src: "https://www.animatedtimes.com/wp-content/uploads/2019/07/thorragnarok-jeffgoldblum-grandmaster-uneasy-700x334-1280x720.jpg",
        description: "Eiusmod dolore ullamco mollit eiusmod excepteur qui in eiusmod.",
      }, {
        name: "",
        img_src: "",
        description: "",
      }
    ];
    const _rendered = _page_prev_json.map((datum, i) => {
      return (
        <PagePreview 
          name={datum.name} 
          img_src={datum.img_src}
          description={datum.description}
          key={i}
        />
      );
    });
    return (
      _rendered
    );
  }

  render() {
    // we can render arrays of components
    // const _nav_bar = [<NavBar key='1'/>, <NavBar key='2'/>];
    const _page_prev = [<PagePreview key='1' />, <PagePreview key='2' />, <PagePreview key='3' />, <PagePreview key='4' />];
    return (
      <div className='app'>
        <NavBar />
        <div className='app-body'>
          <div className='add-new-dom-container'>
            <div className='add-new-dom'> + New DOM </div>
          </div>
          {/* as seen here */}
          {/* { _nav_bar } */}
          <div className='page-preview-container'>
            <PagePreview />
            { _page_prev }
            { this._render_page_prev() }
          </div>
        </div>
        <ShadowDOM mode='open' css='div { color: red; }' html='<div> hello world </div>' js='console.log("shadowDomJS")'>
        </ShadowDOM>
      </div>
    );
  };
};

const _app = <App name='App'/* props */ />;
ReactDOM.render(_app, document.getElementById('root'));
