import React, { Component } from 'react'

class WorkHistory extends Component {
  render() {
    return (
           <div class="job">
             <div class="job__years">
               <h6 class="job__end">{this.props.end}</h6>
               <h6 class="job__start">{this.props.start}</h6>
             </div>
             <h5 class="job__title">{this.props.title}</h5>
             <h5 class="job__company">{this.props.company}</h5>
             <p class="job__description">{this.props.description}</p>
           </div>

    );
  }
}

export default WorkHistory;
