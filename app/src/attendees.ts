export type Attendee = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  city: string;
};

const attendees: Attendee[] = [
  {
    id: 0,
    username: "@kjellski",
    first_name: "Kjell",
    last_name: "Otto",
    city: "Hamburg",
  },
  {
    id: 1,
    first_name: "Kassey",
    last_name: "Mewha",
    username: "kmewha0",
    city: "Lipiany",
  },
  {
    id: 2,
    first_name: "Flss",
    last_name: "Thomlinson",
    username: "fthomlinson1",
    city: "Zhongtai",
  },
  {
    id: 3,
    first_name: "Arvin",
    last_name: "Grono",
    username: "agrono2",
    city: "Jianguo",
  },
  {
    id: 4,
    first_name: "Ulrich",
    last_name: "Leveret",
    username: "uleveret3",
    city: "Santisimo Rosario",
  },
  {
    id: 5,
    first_name: "Stavro",
    last_name: "Medway",
    username: "smedway4",
    city: "Calaba",
  },
  {
    id: 6,
    first_name: "Adrianne",
    last_name: "Longega",
    username: "alongega5",
    city: "Qijiawan",
  },
  {
    id: 7,
    first_name: "Sara",
    last_name: "Bartosinski",
    username: "sbartosinski6",
    city: "Fartura",
  },
  {
    id: 8,
    first_name: "Ely",
    last_name: "Mengo",
    username: "emengo7",
    city: "Libao",
  },
  {
    id: 9,
    first_name: "Yul",
    last_name: "Leddie",
    username: "yleddie8",
    city: "Star’",
  },
  {
    id: 10,
    first_name: "Brietta",
    last_name: "Sheehan",
    username: "bsheehan9",
    city: "Nanlu",
  },
];

export default attendees;
