export interface Issue {
  number: number;
  title: string;
  username: string | undefined;
  profile_img: string | undefined;
  created_at: string;
  comments: number;
  body: string | null | undefined;
}
