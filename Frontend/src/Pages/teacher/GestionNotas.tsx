import './notas.css';

const GestionNotas = () => {
    return (
        <div className="notasContainer">
            <h1 className="notaPage-title">Seleciona el curso, asignatura y etapa</h1>
            <section className='inputs'>
                <div className="inputGroup">
                    <label htmlFor="">Curso</label>
                    <select>
                        <option value=""> Curso 1</option>
                        <option value=""> Curso 2</option>
                        <option value=""> Curso 3</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Asignatura</label>
                    <select>
                        <option value=""> Matemática</option>
                        <option value=""> Ciencias Sociales</option>
                        <option value=""> Arte</option>
                    </select>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <span className="label">Resultado de la busqueda:</span>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col justify-center items-center flex-1 rounded-md bg-slate-100 py-2">
                            <span>Nivel primario</span>
                            <span className="text-zinc-900 font-bold mt-2">254878</span>
                        </div>
                        <button className="btn-results self-center">Buscar</button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default GestionNotas
