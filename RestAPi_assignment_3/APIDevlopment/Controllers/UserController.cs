using APIDevlopment.Manager;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace APIDevlopment.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserControllers : ControllerBase
    {

        private readonly IUserManager _userManager;
        public UserControllers(IUserManager userManager)
        {
            _userManager = userManager;
        }


        [HttpGet]
        [Route("getAll")]
        public IActionResult GetAllUsers()
        {
            var result = _userManager.GetAllUsers();
            return result != null ? Ok(result) : BadRequest(result);
        }
        [HttpGet]
        [Route("GetById/{id:int}")]
        public IActionResult GetByID(int id)
        {
            var result = _userManager.GetByID(id);
            return result!=null ? Ok(result) : BadRequest(result);
        }
    }
}