using Microsoft.AspNetCore.Mvc;

namespace funnylearn.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
