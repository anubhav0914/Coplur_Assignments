using static Logger; // for the importing the other file use static "using static"

class main{

    public static void Main(){
        
        main ma = new main();
        Logger Log;
        Console.WriteLine("Enter the Log Type (Database , File , Cloud): ");
        string LogType = Console.ReadLine();
        Log = ma.getLogger(LogType);
        Log.LogIn();


    //    Logger dblog = new LogTODataBase();
    //    Logger filelog = new LogTOFIle();
    //    Logger cloudlog = new LogTOCloud();


    //    dblog.LogIn();
    //    filelog.LogIn();
    //    cloudlog.LogIn();

    }

    public  Logger getLogger(string type){
          
        Logger Log ;
        if(type == "Database"){
            Log = new LogTODataBase();
        }
        else if(type == "File"){
            Log = new LogTOFIle();
        }
        else if(type == "Cloud"){
            Log = new LogTOCloud();
        }
        else{
            Console.WriteLine(" The log type is not exist ");
            return null;
        }
       
       return Log;
     
        
    }
}

