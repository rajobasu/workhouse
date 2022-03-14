export const TARGET_MILESTONES = [
  { level: "Newbie", targetScore: 100 },
  { level: "Beginner", targetScore: 1000 },
  { level: "Pupil", targetScore: 10000 },
  { level: "Intermediate", targetScore: 1000000 },
  { level: "Expert", targetScore: 10000000 },
  { level: "Master", targetScore: 100000000 },
  { level: "Advanced", targetScore: 1000000000 },
];

export const getUserLevel = (
  progress: number
): { level: string; targetScore: number } | undefined => {
  for (const pair of TARGET_MILESTONES) {
    if (progress < pair.targetScore) {
      return pair;
    }
  }
};
