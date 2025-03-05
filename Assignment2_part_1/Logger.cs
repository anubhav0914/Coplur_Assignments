using System;

public abstract class Logger{

    public  abstract void LogIn(); /// when ever we are trying to marked as abstract we must have to write the modifier (public, private)
}

public class LogTODataBase : Logger{
    
     public override void  LogIn(){  // when ever we are trying to override we must have to write the modifier (public, private)
           Console.WriteLine("You are succesfully Loged in Data Based");
    }

}
public class LogTOFIle : Logger{
      
       public override void  LogIn(){ 
           Console.WriteLine("You are succesfully Loged in File");
    }
}
public class LogTOCloud : Logger{
      
       public override void  LogIn(){ 
           Console.WriteLine("You are succesfully Loged in Cloud");
    }
}