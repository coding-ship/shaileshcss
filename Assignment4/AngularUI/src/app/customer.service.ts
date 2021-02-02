import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscriber, Observable } from 'rxjs';
import { Customer } from './customer';
import { User } from './userModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private url='http://localhost:53226/api/';
//http://localhost:53226/api/Auth/AddNewUser
  constructor(private http:HttpClient) { }
    
  getusers():Observable<Customer[]>{
return this.http.get<Customer[]>(this.url+"GetUsers");
   }
  // http://localhost:53226/api/GetUser?email=admin
  getspecificuser(email:any):Observable<User>{
    return this.http.get<User>(this.url+'GetUser?email='+email);
       }

   //http://localhost:53226/api/UpdateUser?id=1
   updateuser(id:number,user:Customer):Observable<Customer>
   {
    return this.http.put<Customer>(this.url+'UpdateUser?id='+id,user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  
   }
   //http://localhost:53226/api/DeleteUser?id=1
   deleteuser(email:any):Observable<Customer>
   {
     return this.http.delete<Customer>(this.url+'DeleteUser?mail='+email,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });

   }


 
   adduser(user:Customer):Observable<Customer>{  
    //console.log(user);
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Customer>(this.url+'AddNewUser',user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  
    }
    
    
  
  

}
