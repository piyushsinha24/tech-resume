import React, { Component } from "react";

class TwoColumn extends Component {
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          margin: "0 auto",
          width: "8.5in",
          height: "11in",
          backgroundColor: "#fff",
          boxShadow: "0 3px 8px -3px rgba(0, 0, 0, 0.7)",
        }}
      >
        <header style={{color: `${this.props.headerTextColor}`}} className="flex flex-col justify-center items-start font-sans w-full h-1/6">
          <div className="bg-gray-100 h-1/6 w-1/4"></div>
          <div style={{backgroundColor: `${this.props.headerColor}`}} className="flex flex-col items-start justify-center px-5 h-5/6 w-full">
            <div className="text-3xl">{this.props.user.name}</div>
            <div className="text-lg pt-3">{this.props.user.wantedJobTitle}</div>
          </div>
        </header>
        <div className="flex h-5/6 font-sans">
          <div className="bg-gray-100 w-1/4 mt-0.5">
            <section className="flex flex-col divide-y divide-black w-full mb-5 px-5 pt-3">
              <div className="text-md text-black tracking-widest">SKILLS</div>
              <div>
                {this.props.user.skills == null
                  ? ""
                  : this.props.user.skills
                      .split(",")
                      .map((skill) => (
                        <div className="inline-block px-1 mt-3 mx-1 bg-black text-sm text-white" key={skill}>
                          {skill}
                        </div>
                      ))}
              </div>
            </section>
            <div className="flex flex-col px-5">
              <div className="text-md text-black border-b border-black tracking-widest">
                CONTACT
              </div>
              <div className="text-sm pt-3 break-all">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>{" "}
                {this.props.user.phone}
              </div>
              <div className="text-sm pt-3 break-all">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>{" "}
                {this.props.user.email}
              </div>
              <div className="text-sm pt-3 break-all">
                <svg
                  className="w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>{" "}
                {this.props.user.location}
              </div>
            </div>
          </div>
          <div className="w-3/4">
          <section className="flex flex-col text-white w-full mb-5 px-5">
              <div className="text-md text-black pt-3 border-b border-black tracking-widest">
                SUMMARY
              </div>
              {!this.props.user.summary || 0 === this.props.user.summary.length ? "" : <div className="text-sm pt-3 text-black">
                {this.props.user.summary}
              </div>}
            </section>
            <section className="flex flex-col text-black w-full mb-5 px-5">
              <div className="text-md text-black border-b border-black tracking-widest">
                PROFESSIONAL EXPERIENCE
              </div>
              {[...Array(this.props.empCount)].map((e, i) => (
                <div className="flex flex-col" key={`emp${i}`}>
                  <div className="flex justify-between">
                    <div className="text-sm pt-3 text-black">
                      <li>
                        {this.props.employment.jobTitles[`jobTitle${i + 1}`]}
                      </li>
                    </div>
                    <div>
                      <div className="inline-block text-sm pt-3 text-black">
                        {
                          this.props.employment.jobStartDate[
                            `jobStartDate${i + 1}`
                          ]
                        }{" "}
                        -
                      </div>
                      <div className="inline-block text-sm pt-3 pl-3 text-black">
                        {this.props.employment.jobEndDate[
                          `jobEndDate${i + 1}`
                        ] === undefined
                          ? "Present"
                          : this.props.employment.jobEndDate[
                              `jobEndDate${i + 1}`
                            ]}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm pt-3 text-black">
                    {this.props.employment.emp[`emp${i + 1}`]}
                  </div>
                  <div className="text-sm pt-3 text-black">
                    {this.props.employment.jobDesc[`jobDesc${i + 1}`]}
                  </div>
                </div>
              ))}
            </section>
            <section className="flex flex-col text-black w-full mb-5 px-5">
              <div className="text-md text-black border-b border-black tracking-widest">
                PROJECTS
              </div>
              {[...Array(this.props.projectCount)].map((e, i) => (
                <div className="flex flex-col" key={`emp${i}`}>
                  <div className="flex justify-between">
                    <div className="text-sm pt-3 text-black">
                      <li>
                        {
                          this.props.project.projectTitles[
                            `projectTitle${i + 1}`
                          ]
                        }
                      </li>
                    </div>
                    <div>
                      <div className="inline-block text-sm pt-3 text-black">
                        {
                          this.props.project.projectStartDate[
                            `projectStartDate${i + 1}`
                          ]
                        }{" "}
                        -
                      </div>
                      <div className="inline-block text-sm pt-3 pl-3 text-black">
                        {this.props.project.projectEndDate[
                          `projectEndDate${i + 1}`
                        ] === undefined
                          ? "Present"
                          : this.props.project.projectEndDate[
                              `projectEndDate${i + 1}`
                            ]}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm pt-3 text-black">
                    {this.props.project.projectDesc[`projectDesc${i + 1}`]}
                  </div>
                </div>
              ))}
            </section>
            <section className="flex flex-col text-black w-full mb-5 px-5">
              <div className="text-md text-black border-b border-black tracking-widest">
                EDUCATION
              </div>
              {[...Array(this.props.eduCount)].map((e, i) => (
                <div className="flex flex-col" key={`emp${i}`}>
                  <div className="flex justify-between">
                    <div className="text-sm pt-3 text-black">
                      <li>{this.props.education.qual[`qual${i + 1}`]}</li>
                    </div>
                    <div>
                      <div className="inline-block text-sm pt-3 text-black">
                        {
                          this.props.education.eduStartDate[
                            `eduStartDate${i + 1}`
                          ]
                        }{" "}
                        -
                      </div>
                      <div className="inline-block text-sm pt-3 pl-3 text-black">
                        {this.props.education.eduEndDate[
                          `eduEndDate${i + 1}`
                        ] === undefined
                          ? "Present"
                          : this.props.education.eduEndDate[
                              `eduEndDate${i + 1}`
                            ]}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm pt-3 text-black">
                    {this.props.education.edu[`educ${i + 1}`]}
                  </div>
                  <div className="text-sm pt-3 text-black">
                    {this.props.education.eduDesc[`eduDesc${i + 1}`]}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default TwoColumn;
