import { BaseRecord } from '@shared/models/base.model';
import { DataChip } from './data-chip.model';

export interface ImageAccordionItem extends BaseRecord {
    chips?: DataChip[];
}

