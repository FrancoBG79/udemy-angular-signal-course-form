import { AddressData, ADDRESS_DEFAULT } from '../address-form/address.model';

export type ProfileData = {
  email: string;
  avatarUrl: string;
  address: AddressData;
};

export const PROFILE_DEFAULT: ProfileData = {
  email: 'example@gmail.com',
  avatarUrl: '',
  address: { ...ADDRESS_DEFAULT }
};
