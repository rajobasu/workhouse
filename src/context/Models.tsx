export interface UserProfile {
  name: string;
  email: string;
  points: number;
  verified: -1 | 1;
}

export const emptyUser: UserProfile = {
  name: "",
  email: "",
  points: 0,
  verified: -1,
};

export interface PostUserInfoPayload {
  name?: string;
  points?: number;
  email?: string;
  verified?: -1 | 1;
}
