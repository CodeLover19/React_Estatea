import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return <footer>
        <ul>
          <li>
            Twitter: <a href="https://twitter.com/leepaul24">@leepaul24</a>
          </li>
          <li>
            Portfolio: <a href="http://www.aznmaster.jwnmedia.com/">
              <span>Lee Paul</span>
            </a>
          </li>
        </ul>
      </footer>;
  }
}
