import React, { Component } from 'react';
import uuid from 'uuid';
class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ["Web Design", "Mobile Development", "Web Development",]
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.title.value === ""){
      alert("title is required");
    }else{
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value,
      }}, function(){
        this.props.addProject(this.state.newProject);
      })
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category} >{category}</option>
    });
    return (
      <div>
        <h2>Add Projects </h2>
        < br/>< br/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>< br/>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>< br/>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
