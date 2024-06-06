import React from 'react';

interface ProfileInitialsProps {
    name: string;
    lastName: string;
}

const getInitials = (name: string, lastName: string) => {
    return `${name.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

const ProfileInitials: React.FC<ProfileInitialsProps> = ({ name, lastName }) => {
    return (
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg" style={{backgroundColor:'rgb(54, 74, 137)'}}>
            {getInitials(name, lastName)}
        </div>
    );
}

export default ProfileInitials;
