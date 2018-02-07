import { Roles } from 'meteor/alanning:roles';

export default class Security {
  static checkLoggedIn(userId) {
      if (!userId) {
          throw new Meteor.Error('not-authorized', 'You are not authorized');
        }
    }
}