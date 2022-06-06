export type Appointment = {
  id: number;
  idUser: number;
  title: string;
  description: string;
  createdAt: Date;
  startTime: Date;
  endTime: Date;
};
