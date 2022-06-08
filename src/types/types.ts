export type TAppointment = {
  id: number;
  uuid: string;
  title: string;
  description: string;
  createdAt: string;
  startTime: string;
  endTime: string;
};

export type TUser = {
  uuid: string;
  id: string;
  password: string;
  email: string;
  name: string;
  avatar: string;
};
