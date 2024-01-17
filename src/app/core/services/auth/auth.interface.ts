export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  image?: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  role?: number;
}

export interface User {

}
