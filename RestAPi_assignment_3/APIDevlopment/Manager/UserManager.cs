using APIDevlopment.Models;
namespace APIDevlopment.Manager
{

    public class UserManager : IUserManager
    {
        public List<UserDTO> GetAllUsers()
        {


            var users = new List<User>{
            new User
            {
                Id = 1,
                FullName = "Alice Johnson",
                Email = "alice.johnson@example.com",
                Password = "Alice@123",
                Gender = "Female",
                Address = "123 Maple Street, New York, NY 10001"
            },
            new User
            {
                Id = 2,
                FullName = "Bob Smith",
                Email = "bob.smith@example.com",
                Password = "Bob@456",
                Gender = "Male",
                Address = "456 Oak Avenue, Los Angeles, CA 90001"
            },
            new User
            {
                Id = 3,
                FullName = "Charlie Brown",
                Email = "charlie.brown@example.com",
                Password = "Charlie@789",
                Gender = "Male",
                Address = "789 Pine Road, Chicago, IL 60601"
            },
                };

            var userDTOs = users.Select(user => new UserDTO
            {
                Id = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                Address = user.Address
            }).ToList();

            return userDTOs;

        }

        public UserDTO GetByID(int id)
        {
            var users = new List<User>{
            new User
            {
                Id = 1,
                FullName = "Alice Johnson",
                Email = "alice.johnson@example.com",
                Password = "Alice@123",
                Gender = "Female",
                Address = "123 Maple Street, New York, NY 10001"
            },
            new User
            {
                Id = 2,
                FullName = "Bob Smith",
                Email = "bob.smith@example.com",
                Password = "Bob@456",
                Gender = "Male",
                Address = "456 Oak Avenue, Los Angeles, CA 90001"
            },
            new User
            {
                Id = 3,
                FullName = "Charlie Brown",
                Email = "charlie.brown@example.com",
                Password = "Charlie@789",
                Gender = "Male",
                Address = "789 Pine Road, Chicago, IL 60601"
            },
                };
            var user = users.FirstOrDefault(u => u.Id == id);

            return new UserDTO
            {
                Id = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                Address = user.Address
            };
            
        }
    }
}