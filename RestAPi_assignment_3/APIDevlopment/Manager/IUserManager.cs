using APIDevlopment.Models;

namespace APIDevlopment.Manager
{

    public interface IUserManager
    {
        public List<UserDTO> GetAllUsers();
        public UserDTO GetByID(int id);
    }
}