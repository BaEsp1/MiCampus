import './skeleton.css'

const SkeletonGestionNotas = () => {
    return (
        <div className="notasContainer">
            <h1 className="text-slate-700 text-3xl font-bold">Seleciona el curso y grado</h1>
            <section className='inputs'>
                <div className="flex flex-col">
                    <label className="text-slate-800 font-bold">Curso</label>
                    <div className="skeleton h-8"></div>
                </div>
                <div className="flex flex-col">
                    <label className="text-neutral-600 font-bold">Grado</label>
                    <div className="skeleton h-8"></div>
                </div>
                <button className="btn-results flex-1 bg-slate-800 cursor-pointer" disabled={true}>Buscar</button>

            </section>
            <section>
                <br />
                <div className="skeleton h-10"></div>
            </section>
        </div>
    )
}

export default SkeletonGestionNotas
