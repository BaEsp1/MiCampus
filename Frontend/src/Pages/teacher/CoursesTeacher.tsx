import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { MiCampusApi, TeacherByIDResponse } from "../../config/api";
import MateriasCards from "./components/MateriasCards"
import { setTeacherData } from "../../Redux/Reducers/teacherReducer";

const CoursesTeacher = () => {

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.user);
    const {teacher} = useAppSelector(state => state.teacher);


    useEffect(() => {
        if(!teacher){
            MiCampusApi.get<TeacherByIDResponse>(`/teachers/${user?.id}`)
            .then(resp => {
                dispatch(setTeacherData({
                    teacher: resp.data.teacher,
                    courses: resp.data.courses,
                    tutorships: resp.data.tutorships,
                }))
            })
        }
    },[])

    return (
        <div className="Materias flex flex-row">
            <div className="Col1" style={{ width: '275px' }}>
            </div>

            <div className="Col2" style={{ margin: '2em', width: 'fit-content' }}>
                <h1 className="p-4 font-semibold text-3xl justify-center flex"> Materias</h1>
                <MateriasCards />
            </div>
        </div>
    )
}

export default CoursesTeacher
