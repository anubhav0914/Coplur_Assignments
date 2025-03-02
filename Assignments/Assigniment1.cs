using System;
 class Student{
     
    public String name;
    public int RollNumber;
    public String course;
    public int Age;

    public Student(String name ,int RollNumber , String course , int Age){
       
       this.name = name;
       this.RollNumber = RollNumber;
       this.course = course;
       this.Age = Age;
    }
    
    public void ShowDetails(){
        Console.WriteLine("Name : "+this.name);
        Console.WriteLine("Roll Number : " + this.RollNumber);
        Console.WriteLine("Course : " + this.course);
        Console.WriteLine("Age : "+this.Age);

    }


}

class main{
    public static void Main(){

    Student s1 = new Student("Rahul",1,"Web Development",21);
    Student s2 = new Student("Mukesh",2,"Machine Learning",22);
    Student s3= new Student("Pushkar",3,"UI Designing",22);

    s1.ShowDetails();
    Console.WriteLine();
    s2.ShowDetails();
    Console.WriteLine();
    s3.ShowDetails();
  }
}