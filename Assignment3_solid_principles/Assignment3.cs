public class Program
{
    public static void Main(string[] args)
    {
       Customer cust = new Customer()
        {
            CustomerId = 101,
            FirstName = "Anubhav",
            LastName = "Gupta",
            Email = "anubhav@email.com",
            Type = CustomerType.Gold
        };
         
        Offers ofr = DataFactory.GetOffers();

        // register  of Customers
        CustomerRegerstation reg =  DataFactory.DoRegstration();
        reg.RegisterationNumber = 1 ;
        reg.Register(cust, DataFactory.GetLogger("Database"));
        reg.Display(cust);

        // process orders
        ProcessOrder order = DataFactory.ProcessOrders();
        order.ProcessOrd(DataFactory.GetLogger("activity"), ofr, cust);
    }
}
// interface of logger  (low level module )
public interface ILogger{
     void Log();
}
public class LogTODataBase : ILogger{
      
      public  void Log(){
        Console.WriteLine("Save to the database");
      }

}
public class ActivityLog : ILogger{
      
      public  void Log(){
        Console.WriteLine("The activity log ");
      }

}


// interface of customerDeatils

public interface ICustomerDetails{
    public int CustomerId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public CustomerType Type { get; set; }
   
    
}
// interface of regesteration 

public interface IRegisteration :ICustomerDetails {

    public int RegisterationNumber { get; set; }
    public void Register(Customer cust, ILogger log);
    public void SaveCustomer(ILogger log);
    public  void Display(Customer cust);

}

// interface of orders
public interface IOrders {

    public int NumberOfOrders { get; set; }
    public string ProductType { get; set; }
}
// interface of process 
public interface IProcessOrder : IOrders {
    public string Location { get; set; }
    public void OrderOf(Customer cust);
    public void ProcessOrd(ILogger log, Offers ofr, Customer cust);
    public int CheckforOffers(Offers ofr, Customer cust);
}

// interface of offers  

public interface IOffers{

   public int GetDiscountPercentage(Customer cust);
    public int GetAvilableCupon(Customer cust);
    
}




public class Customer : ICustomerDetails { 
        
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public CustomerType Type { get; set; }
       
}
public class CustomerRegerstation : IRegisteration{

     private ILogger _log ;
     public int RegisterationNumber { get; set; }   // adding new feature
     public int CustomerId { get; set; }
     public string FirstName { get; set; }
     public string LastName { get; set; }
     public string Email { get; set; }
     public CustomerType Type { get; set; }
     public void Register(Customer cust, ILogger log)
      {
        try
        {
            if (cust.Type == CustomerType.Bronze)
            {
                //some logic
            }
            if (cust.Type == CustomerType.Silver)
            {
                //some logic
            }
            if (cust.Type == CustomerType.Gold)
            {
                //some logic
            }
            if (cust.Type == CustomerType.Platinum)
            {
                //some logic
            }
            SaveCustomer(log);
        } 
        catch (Exception err){
            Console.WriteLine(err);
         }
        
       } 
    public void SaveCustomer(ILogger log){
             
              _log = log ;
             
             try{
                _log.Log();
                Console.WriteLine("the customer details have been saved to the datanbase");
             }
             catch (Exception err){
                 Console.WriteLine(err);
             }
     }
     public void Display(Customer cust){
            Console.WriteLine("ID : "+ cust.CustomerId);
            Console.WriteLine("First Name : "+ cust.FirstName);
            Console.WriteLine("Last Name : "+ cust.LastName);
            Console.WriteLine("Emial : "+ cust.Email);
            Console.WriteLine("Type : "+ cust.Type);
            Console.WriteLine("Regstration NUmber: "+ this.RegisterationNumber);

        }

}
public class Orders : IOrders{
    public int NumberOfOrders { get; set; }
    public string ProductType {get; set;}
     
}

public class ProcessOrder :IProcessOrder {
        
    private ILogger _log;
    public int NumberOfOrders { get; set; }
    public string ProductType { get; set; }
    public string Location { get; set; }

     public void OrderOf(Customer cust){
         
         Console.WriteLine("The order is of :"+ cust.CustomerId);

    }
    public void ProcessOrd(ILogger log, Offers ofr,Customer cust){
          
          int discount =  CheckforOffers(ofr,cust);
         
         //Process Payment after Discount
         //Send confirmation
         //Log Order Activity
         _log = log ;
         _log.Log();

    }

    public int CheckforOffers(Offers ofr,Customer cust){
        int discount = ofr.GetDiscountPercentage(cust);
        return discount;
    }
}
public class  Offers : IOffers{

     public int GetDiscountPercentage(Customer cust){
            
        if (cust.Type == CustomerType.Bronze)
        {
            return 15;
        }

        if (cust.Type == CustomerType.Silver)
        {
            return 20;
        }

        if (cust.Type == CustomerType.Gold)
        {
            return 25;
        }

        if (cust.Type == CustomerType.Platinum)
        {
            return 27;
        }

        return 12;
     }
     public int GetAvilableCupon(Customer cust){
         
         // some logic
         return 19101;
     }
}
public enum CustomerType
{
    Bronze,
    Silver,
    Gold,
    Platinum
}



public static  class DataFactory {

    public static  ILogger GetLogger( string str){
           
           if (str == "Database"){
            return new LogTODataBase();
           }
           else {
            return new ActivityLog();
           }
    }
    public static  CustomerRegerstation DoRegstration(){
          return new CustomerRegerstation();
    }
    public static  ProcessOrder ProcessOrders(){
        return new ProcessOrder();
    }
    public static  Offers GetOffers(){
        return new Offers();
    }
}








// public class Customer
// {
//     public int CustomerId { get; set; }
//     public string FirstName { get; set; }
//     public string LastName { get; set; }
//     public string Email { get; set; }
//     public CustomerType Type { get; set; }
//     public void Register(Customer cust)
//     {
//         try
//         {
//             if (cust.Type == CustomerType.Bronze)
//             {
//                 //some logic
//             }

//             if (cust.Type == CustomerType.Silver)
//             {
//                 //some logic
//             }

//             if (cust.Type == CustomerType.Gold)
//             {
//                 //some logic
//             }

//             if (cust.Type == CustomerType.Platinum)
//             {
//                 //some logic
//             }

//             SaveCustomer();

//         }
//         catch (Exception ex)
//         {
//             //ILogger 
//             Console.WriteLine($"Log Error: {ex.Message}");
//         }
//     }

//     public virtual bool SaveCustomer()
//     {
//         //save customer details to database
//         return true;
//     }

//     public int GetDiscountPercentage()
//     {
//         if (this.Type == CustomerType.Bronze)
//         {
//             return 15;
//         }

//         if (this.Type == CustomerType.Silver)
//         {
//             return 20;
//         }

//         if (this.Type == CustomerType.Gold)
//         {
//             return 25;
//         }

//         if (this.Type == CustomerType.Platinum)
//         {
//             return 27;
//         }

//         return 12;
//     }

//     public void ProcessOrder(Customer cust)
//     {
//         GetDiscountPercentage();
//         //Process Payment after Discount
//         //Send confirmation
//         //Log Order Activity
//         Console.WriteLine("Order Placed Successfully");
//     }
// }

// public class Leads : Customer
// {
//     //It is just a lead so need to save it in the database
//     public void GetDiscount()
//     {
//         int discount = GetDiscountPercentage();
//     }

//     public void ProcessOrder()
//     {
//         //some logic
//     }
// }
