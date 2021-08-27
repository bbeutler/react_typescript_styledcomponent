import { User, MyStatus } from "../lib/common-types";

export const ownerMenuItems: User[] = [
  {id: 1, avatar: "https://www.upwork.com/profile-portraits/c1qhJNINt8OIfzkd44ssek9ANZXXxGlx4AC_XHE1Byd6XSHvb2QuJkB3c6e7J34jrn", name: "Ross Rich", role: "Manager"},
  {id: 2, avatar: "https://www.upwork.com/profile-portraits/c1cBqbtVvqBjdzMhHHKjoDG33XRoI5ZiAVBN7ArlhSdmAA1sulSyS5VpIlWEZG-jfM", name: "Matias Capuano", role: "Associate"},
  {id: 3, avatar: "https://www.upwork.com/profile-portraits/c1WsTLVWMp_uTlM4TIXEx4ZVZGkIug0UJXpoaebf7QfmVzUTOqsySImJeMwENCH1f7", name: "Amit Patel", role: "Associate"},
  {id: 4, avatar: "https://www.upwork.com/profile-portraits/c1WIB4b9L4Q5kVcxkTIrNLcZxwLwheM2UUk5PFAIH1YX_fqasdArgvWysUAyoAv3R3", name: "Suzy Anderson", role: "Associate"}
];

export const statusMenuItems: MyStatus[] = [
    {id: 1, name: "My evaluations"}, 
    {id: 2, name: "My steps"}
]