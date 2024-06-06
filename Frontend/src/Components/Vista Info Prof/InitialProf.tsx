import React from 'react';

interface ProfesorProps {
  profesor: string;
}

const InitialProf: React.FC<ProfesorProps> = ({ profesor }) => {


  const getInitials = (fullName: string) => {
    const [firstName, lastName] = fullName.split(' ');
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };


  return (
    <>
    <div className='flex flex-col'>
        {/* Iniciales: */}
      <div className="w-[2em] h-[2em] rounded-full flex items-center justify-center text-5xl m-4" style={{ color: 'rgb(54, 74, 137)', alignSelf: 'center' , background:'white', border:'#cccc, solid, 0.1em'}}>
        {profesor ? getInitials(profesor) : ''}
      </div>
    </div>
    </>
  );
}

export default InitialProf;
