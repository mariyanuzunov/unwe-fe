import { IDoor } from 'src/app/shared/interfaces/door.interface';

export type UpdateDoorDto = Required<Pick<IDoor, '_id'>> &
  Partial<Omit<IDoor, '_id'>>;
