export type TAppointment = {
  id?: number;
  uuid?: string;
  title: string;
  description: string;
  createdAt: string;
  start: {
    day: string;
    time: string;
  };
  end: {
    day: string;
    time: string;
  };
};

export type TAppointmentArray = TAppointment[];

export type TUser = {
  uuid: string;
  id: string;
  password: string;
  email: string;
  name: string;
  avatar: string;
};
