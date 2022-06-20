import { IDoor } from 'src/app/shared/interfaces/door.interface';

export type CreateDoorDto = Required<Omit<IDoor, '_id' & 'rating'>>;
