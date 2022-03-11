export interface UserProfile {
  name: string;
  points: number;
  verified: -1 | 1;
}

export const emptyUser: UserProfile = {
  name: "",
  points: 0,
  verified: 1,
};

export interface PostUserInfoPayload {
  name?: string;
  points?: number;
  verified?: -1 | 1;
}
