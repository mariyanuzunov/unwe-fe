import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { IDoor } from './shared/interfaces/door.interface';

const entityMetadata: EntityMetadataMap = {
  Door: {
    selectId: (entity: IDoor): string => entity._id,
    entityDispatcherOptions: { optimisticDelete: false },
  },
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
