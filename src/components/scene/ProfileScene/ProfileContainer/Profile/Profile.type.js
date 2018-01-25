//@flow
export type IProfile = {
  name: string,
  avatar: string,
  birthday: string,
  passportNo: string
};

export type IProfileProps = {
  isFetching: boolean,
  profile: IProfile
};

export type IProfileActions = {
  fetchProfile: () => {}
};

export type IProfileFullProps = IProfileProps & IProfileActions;
