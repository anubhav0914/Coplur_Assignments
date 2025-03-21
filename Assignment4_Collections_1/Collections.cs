using System.Threading.Tasks.Dataflow;
using System.Xml.Serialization;

public class main
{
    public static void Main(string[] args)
    {
        Restaurant restro1 = new Restaurant();
        restro1.AddNewFoodToMenu(100, "Paratha");
        restro1.AddNewFoodToMenu(120, "Daal Fry");
        restro1.AddNewFoodToMenu(150, "Paneer Butter Masala");
        restro1.AddNewFoodToMenu(200, "Biryani");
        restro1.PlaceOrder(1, new List<string> { "Paratha", "Daal Fry" });
        restro1.PlaceOrder(2, new List<string> { "Biryani" });
        restro1.FoodCategories.Add("Pizza");
        restro1.FoodCategories.Add("Chinees");
        restro1.FoodCategories.Add("Drinks");
        restro1.FoodCategories.Add("Dessert");

        while (true)
        {
            Console.WriteLine("\n========== Restaurant Mnagement System ===");
            Console.WriteLine("1. Add Food to Menu");
            Console.WriteLine("2. Show Menu");
            Console.WriteLine("3. Place an Order");
            Console.WriteLine("4. Show Pending Deliveries");
            Console.WriteLine("5. Deliver an Order");
            Console.WriteLine("6. Show Delivered Orders");
            Console.WriteLine("7. Exit");
            Console.Write("Enter your choice: ");

            int num = int.Parse(Console.ReadLine());

            switch (num)
            {
                case 1:
                    Console.Write("Enter Food Name: ");
                    string foodName = Console.ReadLine();
                    Console.Write("Enter Price: ");
                    int price = int.Parse(Console.ReadLine());
                    restro1.AddNewFoodToMenu(price, foodName);
                    Console.WriteLine("Food Added Successfully!");
                    break;

                case 2:
                    Console.WriteLine("\n--- Menu ---");
                    restro1.ShowMenu();
                    break;

                case 3:
                    Console.Write("Enter Order ID: ");
                    int ID = int.Parse(Console.ReadLine());

                    Console.Write("Enter Food Items (use comma to separated it): ");
                    List<string> orderItems = new List<string>(Console.ReadLine().Split(','));
                    restro1.PlaceOrder(ID, orderItems);
                    break;

                case 4:
                    Console.WriteLine("\n--- Pending Deliveries ---");
                    restro1.ShowPendingDeliveries();
                    break;

                case 5:
                    restro1.DeliverOrder();
                    break;

                case 6:
                    Console.WriteLine("\n--- Delivered Orders ---");
                    restro1.ShowDeliveredOrders();
                    break;

                case 7:
                    Console.WriteLine("Exiting... Thank you!");
                    return;

                default:
                    Console.WriteLine("Invalid num. Try again.");
                    break;
            }
        }
    }
       
    }



public interface IRestaurant
{
    List<string> MenuItems { get; set; }
    Dictionary<int, List<string>> CustomerOrder { get; set; }
    Dictionary<int, string> Menu { get; set; }
    Queue<List<string>> PendingDeliveries { get; set; }
    Stack<List<string>> DeliveredOrders { get; set; }
    HashSet<string> FoodCategories { get; set; }
}

public class Restaurant : IRestaurant
{
    public List<string> MenuItems { get; set; } = new List<string>();
    public Dictionary<int, List<string>> CustomerOrder { get; set; } = new Dictionary<int, List<string>>();
    public Queue<List<string>> PendingDeliveries { get; set; } = new Queue<List<string>>();
    public Stack<List<string>> DeliveredOrders { get; set; } = new Stack<List<string>>();
    public HashSet<string> FoodCategories { get; set; } = new HashSet<string>();
    
    public Dictionary<int, string> Menu { get; set; } = new Dictionary<int, string>();

    public void AddNewFoodToMenu(int price,string str){
        this.MenuItems.Add(str);
        this.Menu.Add(price,str);
    }
    public void ShowMenu(){
    
        foreach (var items in this.Menu)
        {   
            Console.WriteLine($"Price: {items.Key}");
            Console.WriteLine("Food   : " + string.Join(", ", items.Value));
            Console.WriteLine("******");
        }
        
    }

    public void PlaceOrder(int OrdId ,List<string> list){
        this.CustomerOrder.Add(OrdId,list);
        this.PendingDeliveries.Enqueue(list);
        Console.WriteLine("Order Placed ......");
    } 
    public void DeliverOrder(){
        List<string> lis = this.PendingDeliveries.Dequeue();
        this.DeliveredOrders.Push(lis);
        Console.WriteLine("Order Delivered ......");
    }

    public void ShowPendingDeliveries(){
        foreach (var order in this.PendingDeliveries)
        {
            Console.WriteLine("- " + string.Join(", ", order));
        }
        Console.WriteLine("----------------------");
    }


    public void ShowDeliveredOrders(){
        foreach (var order in  this.DeliveredOrders)
        {
            Console.WriteLine("- " + string.Join(", ", order));
        }
    }

    public void ShowFoodCategories(){
        foreach (var category in FoodCategories)
        {
            Console.WriteLine("- " + category);
        }

    }
}
