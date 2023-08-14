import { IMenu } from "src/app/shared/models/menu";

export const MENU: IMenu[] = [
  {
    name: "Beranda",
    path: "/",
    icon: "fa-house"
  },
  {
    name: "Postingan",
    path: "/post",
    icon: "fa-address-card"
  },
  {
    name: "Lowongan",
    path: "/vacancy",
    icon: "fa-briefcase"
  },
  {
    name: "Pengguna",
    path: "/user",
    icon: "fa-users"
  },
  {
    name: "Perusahaan",
    path: "/company",
    icon: "fa-building"
  }
]
