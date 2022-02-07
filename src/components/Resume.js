import React from 'react';

export default function Resume(props) {

    if (props.data) {
        var achievments = props.data.achievments.map(function(achievments){
            return <div key={achievments.title}><h3>{achievments.title}</h3>
                <p className="info">{achievments.place}<span>&bull;</span><em className="date">{achievments.date}</em></p>
                <ul>{achievments.certificates.map(certificates => {
                    return ( <li key={certificates}><span>&bull;&nbsp;</span>{certificates}</li>);
                  })}
                </ul>
            </div>
        })

        var language = props.data.languages.map(function(languages){
            return <li key={languages}><span>&bull;</span> {languages}</li>
        })
        
        var message = props.data.skillmessage.map(function (skillmessage) {
            return <li key={skillmessage}><span>&bull;</span> {skillmessage}</li>
        })
        
        var education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree}<span>&bull;</span><em className="date">{education.graduated}</em></p>
                <ul>{education.description.map(description => {
                  return ( <li key={description}><span>&bull;&nbsp;</span>{description}</li>);
                    })}
                </ul>
            </div>
        })
        
        var work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <ul>{work.description.map(description => {
                  return ( <li key={description}><span>&bull;&nbsp;</span>{description}</li>);
                    })}
                </ul>
                
            </div>
        })

        var skills = props.data.skills.map((skills) => {
            var className = 'bar-expand skill-gradient';
            return (
                <li key={skills.name}>
                    <span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em>
                </li>
            )
        })
    }

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work}
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                <ul>{message}</ul>
                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row achievments">
                <div className="three columns header-col">
                    <h1><span>achievments</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {achievments}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row language">
                <div className="three columns header-col">
                    <h1><span>languages</span></h1>
                </div>

                <div className="nine columns main-col">
                    <ul>{language}</ul>
                </div>
            </div>
        </section>
    );
}