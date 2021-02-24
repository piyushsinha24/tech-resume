import React from "react";
import Minimalist from "./Minimalist";
import TwoColumn from "./TwoColumn";

class Resume extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.type === "minimalist" ? (
          <Minimalist
            user={this.props.userData}
            employment={this.props.empData}
            empCount={this.props.empCount}
            education={this.props.eduData}
            eduCount={this.props.eduCount}
            project={this.props.projectData}
            projectCount={this.props.projectCount}
          />
        ) : (
          <TwoColumn
            user={this.props.userData}
            employment={this.props.empData}
            empCount={this.props.empCount}
            education={this.props.eduData}
            eduCount={this.props.eduCount}
            project={this.props.projectData}
            projectCount={this.props.projectCount}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Resume;
