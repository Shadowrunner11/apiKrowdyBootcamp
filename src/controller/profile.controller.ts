import profilesModel, { IProfileUrlInfo } from '../schema/profiles.schema';

class Profile {
  createProfiles(profiles: IProfileUrlInfo[]) {
    profilesModel.insertMany(profiles);
  }
}

export default new Profile();