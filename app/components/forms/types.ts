export type Suspect = {
  name: string;
  motive: string;
  alibi: string;
  alibiVerified: boolean;
  accessToWeapon: boolean;
};

export type Evidence = {
  description: string;
  type: string;
  reliability: number;
  contradictsAlibi: boolean;
  pointsTo?: string;
};
