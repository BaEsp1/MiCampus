import { envs } from "src/config/envs";

interface SeedTeacher {
  name: string;
  last_name: string;
  password: string;
  email: string;
  birthdate?: Date;
  dni: string;
  id_grade?: string;
}

type ValidRoles = 'STUDENT' | 'TEACHER' | 'ADMIN';

// interface SeedUser {
//   email: string;
//   fullName: string;
//   password: string;
//   roles: string[];
// }

// interface SeedData {
//   users: SeedUser[];
//   products: SeedProduct[];
// }


export const initialData//: SeedData
= {
  admin: [
    {
      name: 'diego',
      last_name: 'garay',
      password: envs.passwordAdmin,
      email: 'diegogaraycullas@gmail.com',
      dni: '9796970',
    },
  ],
  teachers: [
    {
      name: 'diego',
      last_name: 'gonzalez',
      password: 'Abc123',
      email: 'diego@gmail.com',
      dni: '12395678',
    },
    {
      name: "Sofía",
      "last_name": "Martínez",
      "password": "Abc123",
      "email": "sofia@example.com",
      "dni": "98765932"
    },
    {
      "name": "Mateo",
      "last_name": "Hernández",
      "password": "Abc123",
      "email": "mateo@example.com",
      "dni": "87659321"
    },
    {
      "name": "Valentina",
      "last_name": "García",
      "password": "Abc123",
      "email": "valentina@example.com",
      "dni": "76593210"
    },
    {
      "name": "Juan",
      "last_name": "López",
      "password": "Abc123",
      "email": "juanbdf@example.com",
      "dni": "65932109"
    },
    {
      "name": "Isabella",
      "last_name": "Gómez",
      "password": "Abc123",
      "email": "isabellamjhjn@example.com",
      "dni": "54321098"
    },
    {
      "name": "Martín",
      "last_name": "Díaz",
      "password": "Abc123",
      "email": "martin@example.com",
      "dni": "43210987"
    },
    {
      "name": "Lucía",
      "last_name": "Rodríguez",
      "password": "Abc123",
      "email": "lucia@example.com",
      "dni": "32109876"
    },
    {
      "name": "Emilio",
      "last_name": "Pérez",
      "password": "Abc123",
      "email": "emilio@example.com",
      "dni": "21098765"
    },
    {
      "name": "Valeria",
      "last_name": "Muñoz",
      "password": "Abc123",
      "email": "valeria@example.com",
      "dni": "10987654"
    }
  ],

  courses: [
    {
      'name': 'Matematicas'
    },
    {
      'name': 'Fisica'
    },
    {
      'name': 'Quimica'
    },
    {
      'name': 'Historia'
    },
    {
      'name': 'Lengua'
    },
    {
      'name': 'Ingles'
    },
    {
      'name': 'Geografia'
    },
    {
      'name': 'Arte'
    },
    {
      'name': 'Musica'
    }
  ],

  grades: [
    {
      'school_year': 2024,
      'grade': 'Primero',
      'section': 'A',
    },

    {
      'school_year': 2024,
      'grade': 'Primero',
      'section': 'B',
    },
    {
      'school_year': 2024,
      'grade': 'Segundo',
      'section': 'A',
    },
    {
      'school_year': 2024,
      'grade': 'Segundo',
      'section': 'B',
    },
    {
      'school_year': 2024,
      'grade': 'Tercero',
      'section': 'A',
    },
    {
      'school_year': 2024,
      'grade': 'Tercero',
      'section': 'B',
    },
    {
      'school_year': 2024,
      'grade': 'Cuarto',
      'section': 'A',
    },
    {
      'school_year': 2024,
      'grade': 'Cuarto',
      'section': 'B',
    },
    {
      'school_year': 2024,
      'grade': 'Quinto',
      'section': 'A',
    },
    {
      'school_year': 2024,
      'grade': 'Quinto',
      'section': 'B',
    },
    {
      'school_year': 2024,
      'grade': 'Sexto',
      'section': 'A',
    },
    {
      'school_year': 2024,
      'grade': 'Sexto',
      'section': 'B',
    },
  ],

  students: [
    {
      'name': 'Diego',
      'last_name': 'Gonzalez',
      'password': 'Abc123',
      'email': 'diegoo@gmail.com',
      'dni': '12395667',
    },
    {
      name: 'diego',
      last_name: 'gonzalez',
      password: 'Abc123',
      email: 'diego5@gmail.com',
      dni: '12395567',
    },
    {
      "name": "Lucas",
      "last_name": "Hernández",
      "password": "Abc123",
      "email": "lucas@example.com",
      "dni": "58765932"
    },
    {
      "name": "Valentina",
      "last_name": "Martínez",
      "password": "Abc123",
      "email": "valentinahj@example.com",
      "dni": "87659123"
    },
    {
      "name": "Mateo",
      "last_name": "Gómez",
      "password": "Abc123",
      "email": "mateodv@example.com",
      "dni": "76593012"
    },
    {
      "name": "Martina",
      "last_name": "López",
      "password": "Abc123",
      "email": "martina@example.com",
      "dni": "65932901"
    },
    {
      "name": "Agustina",
      "last_name": "Fernández",
      "password": "Abc123",
      "email": "agustina@example.com",
      "dni": "59321809"
    },
    {
      "name": "Sebastián",
      "last_name": "García",
      "password": "Abc123",
      "email": "sebastian@example.com",
      "dni": "93210098"
    },
    {
      "name": "Camila",
      "last_name": "Díaz",
      "password": "Abc123",
      "email": "camila@example.com",
      "dni": "32109567"
    },
    {
      "name": "Lautaro",
      "last_name": "Pérez",
      "password": "Abc123",
      "email": "lautaro@example.com",
      "dni": "21098179"
    },
    {
      "name": "Isabella",
      "last_name": "Rodríguez",
      "password": "Abc123",
      "email": "isabella@example.com",
      "dni": "10987059"
    },
    {
      "name": "Tomás",
      "last_name": "González",
      "password": "Abc123",
      "email": "tomas@example.com",
      "dni": "12395579"
    },
    {
      "name": "Lucía",
      "last_name": "Herrera",
      "password": "Abc123",
      "email": "luciahj@example.com",
      "dni": "12395670"
    },
    {
      "name": "Juan",
      "last_name": "Sánchez",
      "password": "Abc123",
      "email": "juan@example.com",
      "dni": "12395671"
    },
    {
      "name": "Emma",
      "last_name": "Romero",
      "password": "Abc123",
      "email": "emma@example.com",
      "dni": "12395672"
    },
    {
      "name": "Santiago",
      "last_name": "Alvarez",
      "password": "Abc123",
      "email": "santiago@example.com",
      "dni": "12395673"
    },
    {
      "name": "Mía",
      "last_name": "Torres",
      "password": "Abc123",
      "email": "mia@example.com",
      "dni": "12395679"
    },
    {
      "name": "Thiago",
      "last_name": "Giménez",
      "password": "Abc123",
      "email": "thiago@example.com",
      "dni": "12395675"
    },
    {
      "name": "Emma",
      "last_name": "Pérez",
      "password": "Abc123",
      "email": "emma2@example.com",
      "dni": "12395676"
    },
    {
      "name": "Benjamín",
      "last_name": "Gutierrez",
      "password": "Abc123",
      "email": "benjamin392@example.com",
      "dni": "12395677"
    },
    {
      "name": "Joaquín",
      "last_name": "Moreno",
      "password": "Abc123",
      "email": "joaquin@example.com",
      "dni": "12093579"
    },
    {
      "name": "Catalina",
      "last_name": "Núñez",
      "password": "Abc123",
      "email": "catalina@example.com",
      "dni": "12395680"
    },
    {
      "name": "Agustín",
      "last_name": "Rojas",
      "password": "Abc123",
      "email": "agustin@example.com",
      "dni": "12395681"
    },
    {
      "name": "Juana",
      "last_name": "Molina",
      "password": "Abc123",
      "email": "juana@example.com",
      "dni": "12395682"
    },
    {
      "name": "Delfina",
      "last_name": "Fuentes",
      "password": "Abc123",
      "email": "delfina@example.com",
      "dni": "12395683"
    },
    {
      "name": "Ignacio",
      "last_name": "Aguilar",
      "password": "Abc123",
      "email": "ignacio239@example.com",
      "dni": "12395689"
    },
    {
      "name": "Luna",
      "last_name": "Sosa",
      "password": "Abc123",
      "email": "luna395@example.com",
      "dni": "12395685"
    },
    {
      "name": "Valentín",
      "last_name": "Vargas",
      "password": "Abc123",
      "email": "valentingdf@example.com",
      "dni": "12395686"
    },
    {
      "name": "Martina",
      "last_name": "Pereyra",
      "password": "Abc123",
      "email": "martina3953@example.com",
      "dni": "12395687"
    },
    {
      "name": "Bautista",
      "last_name": "Acosta",
      "password": "Abc123",
      "email": "bautista5t@example.com",
      "dni": "12395688"
    },
    {
      "name": "Renata",
      "last_name": "Benítez",
      "password": "Abc123",
      "email": "renataaww@example.com",
      "dni": "97395689"
    },
    {
      "name": "Benicio",
      "last_name": "Giménez",
      "password": "Abc123",
      "email": "beniciohrw@example.com",
      "dni": "12395690"
    },
    {
      "name": "Dulce",
      "last_name": "Blanco",
      "password": "Abc123",
      "email": "dulcedjmnj@example.com",
      "dni": "12395691"
    },
    {
      "name": "Simón",
      "last_name": "Martínez",
      "password": "Abc123",
      "email": "simonhbf@example.com",
      "dni": "12395692"
    },
    {
      "name": "Alma",
      "last_name": "Mendoza",
      "password": "Abc123",
      "email": "almadherg@example.com",
      "dni": "12395693"
    },
    {
      "name": "Federico",
      "last_name": "Blanco",
      "password": "Abc123",
      "email": "federicovbg@example.com",
      "dni": "12395699"
    },
    {
      "name": "Carolina",
      "last_name": "Gutierrez",
      "password": "Abc123",
      "email": "carolinarwr@example.com",
      "dni": "12395695"
    },
    {
      "name": "Bruno",
      "last_name": "Alonso",
      "password": "Abc123",
      "email": "brunoffsd@example.com",
      "dni": "12395696"
    },
    {
      "name": "Elena",
      "last_name": "Sánchez",
      "password": "Abc123",
      "email": "elena2239@example.com",
      "dni": "12395697"
    },
    {
      "name": "Maximiliano",
      "last_name": "Díaz",
      "password": "Abc123",
      "email": "maximiliano935639@example.com",
      "dni": "12395698"
    }
  ],


}
