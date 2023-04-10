const nope = (str:string[]) => {
  str.push('1')
}
nope(['2'])

interface IUser {
  name:string;
  age:number;
  status: boolean
}

const user: IUser = {name:'Nope',age:12,status:true}
console.log(user)