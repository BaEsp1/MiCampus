import './Cards.css';
import { useAppSelector } from '../../../Redux/hooks';

type Course = { courseId: string; course: string };

const MateriasCards: React.FC = () => {
    
    const {courses} = useAppSelector(state => state.teacher);
    const colors = [
        "#003366", "#003D80", "#004499", "#004BB3", "#0052CC",
        "#3269FF", "#3C72FF", "#456AFF", "#4E73FF", "#576CFF",
        "#6065FF", "#695EFF", "#7257FF", "#7B50FF", "#8449FF",
        "#8D42FF", "#963BFF", "#9F34FF", "#A82DFF", "#B126FF",
    ];

    const coursesArr: Course[] = courses.map(course => {
        return { course: course.course, courseId: course.courseId }
    });
    const materias = Array.from(new Set(coursesArr.map(course => JSON.stringify(course)))).map(course => JSON.parse(course));

    return (
        <div className="cards-container">
            {materias?.map((course,index) => {

                return (
                    <div className="card-wrapper" key={course.courseId}>
                        <div 
                        className="card" 
                        onClick={() => {}}
                        >
                            <div className="card-header" style={{ backgroundColor: colors[index % colors.length] }}>
                            </div>
                            <hr />
                            <div className="card-body">
                                <h3 className='font-semibold'>{course.course}</h3>
                            </div>
                           
                        </div>
                    </div>
                );
            })}
           
        </div>
    );
}

export default MateriasCards;
