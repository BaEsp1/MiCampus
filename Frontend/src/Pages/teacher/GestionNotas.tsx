import { useEffect, useState } from 'react';
import { useAppSelector } from '../../Redux/hooks';
import Swal from 'sweetalert2';

import { Califications, MiCampusApi, TeacherByIDResponse } from '../../config/api';
import SkeletonGestionNotas from './SkeletonGestionNotas';
import { useForm } from '../../hooks';
import './css/notas.css';

type Course = { courseId: string; course: string };
type Grade = { gradeId: string; grade: string };

interface gestionStat {
    courses: Course[],
    grades: Grade[]
}

const GestionNotas = () => {

    const { user } = useAppSelector(state => state.user);

    const [isLoading, setIsLoading] = useState(false);
    const [loadingResults, setLoadingResults] = useState(false);
    const [studentsCalifications, setStudentsCalifications] = useState<Califications[]>([]);
    const [gestionState, setGetionState] = useState<gestionStat>({
        courses: [],
        grades: []
    });
    const { formState, onSelectChange } = useForm({
        course: '',
        grade: ''
    })

    const getStudents = async () => {
        if (!formState.course || formState.course === 'no-selected') {
            Swal.fire({
                icon: "warning",
                title: "Seleciona un curso",
            });
            return;
        }
        if (!formState.grade || formState.grade === 'no-selected') {
            Swal.fire({
                icon: "warning",
                title: "Seleciona un grado",
            });
            return;

        }
        setLoadingResults(true);
        MiCampusApi.get<Califications[]>(`/califications/idTeacher/${user?.id}/idCourse/${formState.course}/IdGrade/${formState.grade}`)
            .then(resp => {
                setStudentsCalifications(resp.data);
                setLoadingResults(false);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        setIsLoading(true);
        MiCampusApi.get<TeacherByIDResponse>(`/teachers/${user?.id}`)
            .then(resp => {
                const coursesArr: Course[] = resp.data.courses.map(course => {
                    return { course: course.course, courseId: course.courseId }
                });
                const gradesArr: Grade[] = resp.data.courses.map(course => {
                    return {
                        gradeId: course.gradeId,
                        grade: `${course.grade} - ${course.section}`
                    }
                });
                const courses = Array.from(new Set(coursesArr.map(course => JSON.stringify(course)))).map(course => JSON.parse(course));
                const grades = Array.from(new Set(gradesArr.map(grade => JSON.stringify(grade)))).map(grade => JSON.parse(grade));

                setGetionState({
                    courses,
                    grades
                })
                setIsLoading(false);
            })
            .catch(err => console.error(err))
    }, [])

    if (isLoading) {
        return (<SkeletonGestionNotas />)
    }
    return (
        <div className="notasContainer">
            <h1 className="notaPage-title">Seleciona el grado y curso</h1>
            <section className='inputs'>
                <div className="inputGroup">
                    <label htmlFor="">Grado</label>
                    <select name="grade" value={formState.grade} onChange={onSelectChange}>
                        <option value={'no-selected'}>Selecciona un grado</option>
                        {
                            gestionState.grades.map(({ grade, gradeId }) => (
                                <option key={gradeId} value={gradeId}>{grade}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Curso</label>
                    <select name="course" value={formState.course} onChange={onSelectChange}>
                        <option value={'no-selected'}>Selecciona un curso</option>
                        {
                            gestionState.courses.map(({ course, courseId }) => (
                                <option key={courseId} value={courseId}> {course}</option>
                            ))
                        }
                    </select>
                </div>
                <button
                    className="btn-results"
                    onClick={getStudents}
                >
                    Buscar
                </button>

            </section>
            <section >
                <div className="table__labels">
                    <div className="table__cell">
                        Apellido
                    </div>
                    <div className="table__cell">
                        Nombre
                    </div>
                    <div className="table__cell">
                        Competencia
                    </div>
                    <div className="table__cell">
                        Nota
                    </div>
                </div>
                {
                    (loadingResults)
                    ?
                    <LoadingResults/>
                    :
                    studentsCalifications.length === 0
                    ? <div className="text-center text-2xl p-8">
                        No hay resultados
                    </div>
                    :studentsCalifications.map((calification) => (
                        <div key={calification.id} className="table__row">
                            <div className="table__cell">
                                {calification.last_name}
                            </div>
                            <div className="table__cell">
                                {calification.name}
                            </div>
                            <div className="table__cell">
                                {calification.competence}
                            </div>
                            <div className="table__cell">
                                {calification.note}
                            </div>
                        </div>
                    ))
                }


            </section>
        </div>
    )
}

export default GestionNotas



const LoadingResults = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="lds-dual-ring"></div>
    </div>
  )
}

