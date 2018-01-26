import { schema } from 'normalizr';

export const account = new schema.Entity('accounts');
export const arrayOfAccounts = [account];
