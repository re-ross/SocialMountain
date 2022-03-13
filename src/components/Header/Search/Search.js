import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    let word = e.target.value;
    this.setState({ text: word });
  }

  render() {
    const { getFilteredPosts } = this.props;

    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange={this.handleSubmit} />

          <SearchIcon
            id="Search__icon"
            onClick={() => getFilteredPosts(this.state.text)}
          />
        </div>
      </section>
    );
  }
}
