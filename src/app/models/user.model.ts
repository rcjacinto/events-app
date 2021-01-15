export interface User {
    id: string;
    name: {
      first: string;
      last: string;
      mi: string;
    };
    gender: string;
    dob: any;
    address: string;
    mobile: number;
    email: string;
    image: string;
    role: any;
    idNumber: any;
    date: {
      created: any;
      modified: any;
    };
    status: number;
  }
  