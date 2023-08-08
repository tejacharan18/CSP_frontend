export interface DoctorDetails {
    licence_num:number;
    doct_name:string;
    doct_email:string;
    doct_ph_num:number;
    doct_age:number;
    doct_desgn:string;
    doct_hosp:string;
    doct_exp:number;
    doct_add:string;

    }
    export interface symptompredict{
      disease_id:number;
      symptom_name:string;

    }
    
    export interface symptom{
      symptoms:[];
    }
    export interface UniqueConstraintError {
      errorNum: Number;
      offset: Number;
    }
    export interface InsertedSuccess {
      lastRowid: String;
      rowsAffected: Number;
    }
    export interface Read {
        Result: [];
    }
    export interface doctorlogin{
      doct_email:string;
      licence_num:string;
      doct_name:string;
    }
    export interface PatientDetails {
      patient_name:string;
      age:number;
      email:string;
      phone_no:number;
      height:number;
      weight:number;
      blood_group:string;
      address:string;
      previous_health_issues:string;
      disability:string;
      diabetic:string;
      img:string;
    }
   export interface symptoms{
    symptoms:[];
   }
    export interface Login{
      email:string;
      phone_no:string;
    }