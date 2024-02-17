import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

const Experience_Vertical_Timeline = ({ Title, SubTitle, StartDate, EndDate, Desc }) => {
    return (
        <>
            <VerticalTimeline layout={"1-column-left"} lineColor='#0F172A' >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0F172A', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #0F172A' }}
                    date={`${StartDate} - ${EndDate}`}
                    iconStyle={{ background: '#0F172A', color: '#fff' }}
                //   icon={<WorkIcon />}
                // style={{ border: "2px solid red", display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <h3 className="vertical-timeline-element-title">{Title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{SubTitle}</h4>
                    <p>
                        {Desc}
                    </p>

                </VerticalTimelineElement>

            </VerticalTimeline>
        </>
    )
}
Experience_Vertical_Timeline.propTypes = {
    Title: PropTypes.string.isRequired,
    SubTitle: PropTypes.string.isRequired,
    StartDate: PropTypes.string.isRequired,
    EndDate: PropTypes.string.isRequired,
    Desc: PropTypes.string.isRequired,

};

export default Experience_Vertical_Timeline



