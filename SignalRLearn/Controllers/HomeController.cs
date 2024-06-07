using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SignalRLearn.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHubContext _hubContext;

        // 無參數的公用建構函式
        public HomeController()
        {
            _hubContext = GlobalHost.ConnectionManager.GetHubContext<MySignalHub>();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            // 現在可以這樣使用了
            _hubContext.Clients.All.clientMsgPublish("有人偷偷登入");

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}