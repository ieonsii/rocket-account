import faker from 'faker';
import dayjs from 'dayjs';

/**
 * GENERATE ACCOUNT
 */
export const generateAccount = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber('04########'),
  dob: dayjs(faker.date.past()).format('YYYY-mm-dd'),
  bio: faker.lorem.words(),
});
