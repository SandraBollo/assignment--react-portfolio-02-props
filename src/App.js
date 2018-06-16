import React, { Component } from 'react';
import logo from './logo.svg';
import SkillList from './components/SkillList.js'
import EducationHistory from './components/EducationHistory.js'
import WorkHistory from './components/WorkHistory.js'




class App extends Component {

  _fabricaDeSkills(){
    const arraySkillsJsx = this.props.skills.map(function(str, i) {
      return <SkillList hola = {str} key={i}/>
    })


    return arraySkillsJsx
  }
  _generateEducation(){
    const educationArrayJsk = this.props.eduList.map(function(eduObj, i) {
      // console.log(eduObj)
      return  <EducationHistory school = {eduObj.institute} degree = {eduObj.fieldOfStudy} year = { eduObj.dates}  key = {i} />

    })

    return educationArrayJsk
  }
_fabricadeHistory(){
  const workArraysJs = this.props.jobsList.map(function(workObj, i) {
    return <WorkHistory end = {workObj.years.end} start = {workObj.years.start} title = {workObj.title} company = {workObj.company} description = {workObj.description} key ={i} />


  })
  return workArraysJs
}


  render() {
    return (
      <div id= "app-container">
        <section>
          <div>
            <h4>Skills</h4>
          </div>
          <div className="skills-list">
          { this._fabricaDeSkills() }
          </div>
          </section>

          <section>
            <h4>Education</h4>
            <div className="degree-list">
              { this._generateEducation() }
            </div>
          </section>



        <section>
          <h4>Work Experience</h4>
          <div class="job-timeline">
              { this._fabricadeHistory() }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
