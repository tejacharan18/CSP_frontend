import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{ HttpClient, HttpHeaders} from '@angular/common/http'
import{  InsertedSuccess,
  PatientDetails,
  Read,
  DoctorDetails,
  UniqueConstraintError,
  symptom}from './doct';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private usernamesubject = new BehaviorSubject<string>('');
  public username$ = this.usernamesubject.asObservable();

  private usersubject = new BehaviorSubject<string>('');
  public user$ = this.usersubject.asObservable();
   
  setUsername(username:string){
    this.usernamesubject.next(username);
  }
  setuser(user:string){
    this.usersubject.next(user);
  }
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3200/';


  //patient

  
  Insertp(
    Details: PatientDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'patient/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Inserts(
    Details: symptom
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'disease/Read',
      Details,
    );
  }
  Readp(email: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}patient/Read${email}`);
  }
  Deletep(email: string): Observable<InsertedSuccess> {
    console.log(`${this.url}patient/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}patient/Delete${email}`
    );
  }
  Updatep(email: string, Details: PatientDetails) {
    return this.http.put(`${this.url}patient/Update${email}`, Details, {
      headers: this.headers,
    });
  }
  view(email:string):Observable<Read>{
    return this.http.get<Read>(`${this.url}patient/View${email}`);
  }

  // doctor


  Insert(
    Details: DoctorDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'doctor/Insert',
      Details,
      { headers: this.headers }
    );
  }
  sym(
    Details: any
  ): Observable<any> {
    return this.http.post<any>(
      this.url + 'disease/Read',
      Details,
      { headers: this.headers }
    );
  }
  
 reads(symptom:string[]):Observable<Read>{
  let str:string=''

  for (let i = 0; i < symptom.length; i++) {
    
    str += `'${symptom[i]}'`;
    
    if (i !== symptom.length - 1) {
      str += ',';
    }
  }
  console.log(symptom);
  return this.http.get<Read>(`${this.url}disease/Read[${str}]`);

  // return this.http.get<Read>(`${this.url}disease/Read${symptom}`);
 }

  Read(licence_num: number): Observable<Read> {
    return this.http.get<Read>(`${this.url}doctor/Read${licence_num}`);
  }
  Dlogin(doct_email: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}doctor/Dlogin${doct_email}`);
  }
  Delete(licence_num: number): Observable<InsertedSuccess> {
    console.log(`${this.url}doctor/Delete${licence_num}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}doctor/Delete${licence_num}`
    );
  }


  read():Observable<Read>{
    return this.http.get<Read>(`${this.url}patient/ReadAll`);
  }
  Delete1(email: string): Observable<InsertedSuccess> {
    console.log(`${this.url}patient/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}patient/Delete${email}`
    );
  }
  read1(email: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}patient/Read${email}`);
  }
 

  Update(licence_num: number, Details: DoctorDetails) {
    return this.http.put(`${this.url}doctor/Update${licence_num}`, Details, {
      headers: this.headers,
    });
  }



  Showoff(){};
}
