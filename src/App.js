import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Projects: []
    }
  }

  componentWillMount() {
    this.setState({Projects: [
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web Design",
      },
      {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Development",
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Shopping Cart",
        category: "Web Development",
      },
    ]});
  }

  handleAddProject(project) {
    let projects = this.state.Projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.Projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.Projects} onDelete={this.handleDeleteProject.bind(this) } />
      </div>
    );
  }
}

export default App;
