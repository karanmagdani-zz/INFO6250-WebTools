export class Task {
  [x: string]: any;
  public Id: number;
  public Name: string;
  public Description: string;
  public Status: Status;
  public AssignedTo: string;
  public Date: number;

}

 export enum Status {
  'New', 'Ready for test', 'In Progress', 'Closed', 'Needs Info'
}
