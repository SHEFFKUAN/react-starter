/*
 * ExamplesPage
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export class ExamplesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Examples" />
        <h1 className="display-4 m-t-3 m-b-3">Examples</h1>
        <ul>
          <li>Dropdown list</li>
          <li>Search</li>
          <li>Filtering checkboxes</li>
          <li>Drag and Drop</li>
          <li>Infinite scroll with progressive preloading - medium, icons8, facebook</li>
        </ul>
        <div className="card card-block">
          <h4 className="card-title">Bootstrap CSS overrides</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/bootstrap-global" className="card-link">Using ":global"</Link>
          <Link to="/examples/bootstrap-classnames" className="card-link">Using "classnames"</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">Pagination</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/pagination" className="card-link">Pagination</Link>
          <Link to="/examples/pagination-url" className="card-link">Pagination with URL change</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">GitHub API Example</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/pagination" className="card-link">User info</Link>
          <Link to="/examples/pagination" className="card-link">Repository info</Link>
          <Link to="/examples/pagination" className="card-link">Issues & pull requests</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">Lazy load images</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/pagination" className="card-link">Lazy load</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">Icons</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/icons-fa" className="card-link">Font Awesome</Link>
          <Link to="/examples/icons-svg" className="card-link">Custom SVG icons</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">File upload <small className="text-muted">(requires back-end)</small></h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/pagination" className="card-link">Basic file upload</Link>
          <Link to="/examples/pagination" className="card-link">Drag & Drop upload</Link>
        </div>
      </div>
    );
  }
}

export default connect()(ExamplesPage);
