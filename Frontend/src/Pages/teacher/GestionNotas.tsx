import { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector } from '../../Redux/hooks';
import './notas.css';
import { MiCampusApi, TeacherByIDResponse } from '../../config/api';
import SkeletonGestionNotas from './SkeletonGestionNotas';

interface gestionStat {
    courses: string[],
    grades: string[]
}

const GestionNotas = () => {

    const { user } = useAppSelector(state => state.user);

    const [isLoading, setIsLoading] = useState(false);
    const [courseSelected, setCourseSelected] = useState('');
    const [gestionState, setGetionState] = useState<gestionStat>({
        courses: [],
        grades: []
    });


    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = event.target;
        setCourseSelected(value);
    }

    useEffect(() => {
        setIsLoading(true);
        MiCampusApi.get<TeacherByIDResponse>(`/teachers/${user?.id}`).then(resp => {
            const coursesArr = resp.data.courses.map(course => course.course);
            const gradesArr = resp.data.courses.map(course => `${course.grade} - ${course.section}`);
            const courses = Array.from(new Set(coursesArr));
            const grades = Array.from(new Set(gradesArr));

            setGetionState({
                courses,
                grades
            })
            setIsLoading(false);
        }).catch(err => console.error(err))
    }, [])

    if (isLoading) {
        return ( <SkeletonGestionNotas/>)
    }
    return (
        <div className="notasContainer">
            <h1 className="notaPage-title">Seleciona el grado y curso</h1>
            <section className='inputs'>
                <div className="inputGroup">
                    <label htmlFor="">Grado</label>
                    <select name="grade">
                        {
                            gestionState.grades.map((grade, idx) => (
                                <option key={idx} value={grade}>{grade}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Curso</label>
                    <select name="course" onChange={onSelectChange}>
                        {
                            gestionState.courses.map((course, idx) => (
                                <option key={idx} value={course}> {course}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <span className="label">Resultado de la busqueda:</span>
                    
                </div>

            </section>
            <section>
                <code>
                    {
                        JSON.stringify(gestionState.courses)
                    }
                </code>
                <code>
                    {
                        JSON.stringify(gestionState.grades)
                    }
                </code>
            </section>
        </div>
    )
}

export default GestionNotas
